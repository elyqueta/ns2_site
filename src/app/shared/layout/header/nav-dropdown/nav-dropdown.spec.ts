import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavDropdown } from './nav-dropdown';
import { Icon } from '../../../../shared/ui/icon/icon';

describe('NavDropdown', () => {
  let fixture: ComponentFixture<NavDropdown>;
  let component: NavDropdown;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavDropdown, Icon],
      providers: [provideRouter([])],
    });
    fixture = TestBed.createComponent(NavDropdown);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Soluções');
    fixture.componentRef.setInput('id', 'solutions');
    fixture.componentRef.setInput('items', [
      { href: '/servicos', label: 'Serviços' },
      { href: '/produtos', label: 'Produtos' },
      { href: '/desenvolvimento-web', label: 'Desenvolvimento web' },
    ]);
    fixture.detectChanges();
  });

  it('começa fechado com aria-expanded="false"', () => {
    const trigger = fixture.nativeElement.querySelector('button');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(component.open()).toBe(false);
  });

  it('abre ao clicar no trigger', () => {
    const trigger = fixture.nativeElement.querySelector('button');
    trigger.click();
    fixture.detectChanges();
    expect(component.open()).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
  });

  it('fecha com Escape', () => {
    component.open.set(true);
    fixture.detectChanges();
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    fixture.nativeElement.querySelector('button').dispatchEvent(event);
    fixture.detectChanges();
    expect(component.open()).toBe(false);
  });
});
