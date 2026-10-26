export interface LocalizedText {
  readonly pt: string;
  readonly en?: string;
}

export interface LocalizedWords {
  readonly pt: readonly string[];
  readonly en?: readonly string[];
}
