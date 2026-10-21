import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { SITE_ORIGIN } from '../../core/site-origin';
import { WhatsappService } from '../../core/whatsapp.service';
import { contactDetails, contactInterests, contactPageContent } from '../../data/contacto';
import { contactMapConfig, contactMapContent } from '../../data/map.config';
import { webPacotes } from '../../data/web-pacotes';
import { ContactMap } from '../../shared/ui/contact-map/contact-map';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

type ContactField = 'name' | 'phone' | 'email' | 'interest' | 'message' | 'consent';

@Component({
  selector: 'app-contacto',
  imports: [ContactMap, Icon, LocalizedPipe, PageHero, ReactiveFormsModule, RouterLink],
  templateUrl: './contacto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacto {
  private readonly formBuilder = inject(FormBuilder).nonNullable;
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  private initialServiceApplied = false;

  readonly copy = contactPageContent;
  readonly contact = contactDetails;
  readonly interests = contactInterests;
  readonly mapConfig = contactMapConfig;
  readonly mapCopy = contactMapContent;
  readonly status = signal('');
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);
  readonly form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    company: ['', Validators.maxLength(120)],
    phone: ['', [Validators.required, Validators.pattern(/^[+]?[\d\s()-]{7,24}$/)]],
    email: ['', Validators.email],
    interest: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]],
    consent: [false, Validators.requiredTrue],
  });
  private readonly seoEffect = effect(() => {
    this.seo.setPage(this.i18n.t('pages.contact'), this.i18n.text(contactPageContent.lead), {
      breadcrumbs: [
        { name: this.i18n.text(contactPageContent.homeLabel), url: `${SITE_ORIGIN}/` },
        { name: this.i18n.t('pages.contact'), url: `${SITE_ORIGIN}/contacto` },
      ],
    });
  });

  constructor() {
    this.applyServiceQuery();
  }

  fieldError(field: ContactField): string | null {
    const control = this.form.controls[field];
    if (!control.touched || control.valid) {
      return null;
    }

    if (control.hasError('required') || control.hasError('requiredTrue')) {
      return this.i18n.text(field === 'consent' ? this.copy.consentError : this.copy.requiredError);
    }
    if (control.hasError('pattern')) {
      return this.i18n.text(this.copy.phoneError);
    }
    if (control.hasError('email')) {
      return this.i18n.text(this.copy.emailError);
    }
    if (control.hasError('minlength')) {
      return this.i18n.text(this.copy.messageError);
    }
    return null;
  }

  submitVia(channel: 'whatsapp' | 'email'): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.status.set('');
      return;
    }

    const values = this.form.getRawValue();
    const interest = this.interests.find((item) => item.pt === values.interest);
    const message = this.whatsapp.buildContactMessage(
      { ...values, interest: interest ? this.i18n.text(interest) : values.interest },
      channel === 'email',
    );
    const url =
      channel === 'whatsapp'
        ? this.whatsapp.createWhatsappUrl(message)
        : this.whatsapp.createMailtoUrl(
            this.contact.email.label,
            `${interest ? this.i18n.text(interest) : values.interest} — ${this.i18n.lang() === 'en' ? 'Contact request' : 'Pedido de contacto'}`,
            message,
          );
    const view = this.document.defaultView;
    if (!view) {
      this.status.set(this.i18n.text(this.copy.submissionError));
      return;
    }

    this.status.set(this.i18n.text(this.copy.sendingStatus));
    view.location.assign(url);
  }

  private applyServiceQuery(): void {
    const service = this.queryParams().get('servico');
    if (!this.initialServiceApplied && service) {
      const available = new Set<string>(this.interests.map((interest) => interest.pt));
      if (available.has(service)) {
        this.form.controls.interest.setValue(service);
      } else if (webPacotes.some((packageItem) => packageItem.slug === service)) {
        this.form.controls.interest.setValue('Websites');
      }
      this.initialServiceApplied = true;
    }
  }
}
