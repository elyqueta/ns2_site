import { Injectable } from '@angular/core';

export interface SluggableContent {
  slug: string;
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  all<T>(items: readonly T[]): readonly T[] {
    return items;
  }

  bySlug<T extends SluggableContent>(items: readonly T[], slug: string): T | undefined {
    return items.find((item) => item.slug === slug);
  }
}
