declare module "@js-joda/locale_en" {
  export interface LocaleInstance {
      language: () => string;
      country: () => string;
      localeString: () => string;
      toString: () => string;
      equals: (other: any) => string;
  }

  export interface LocaleStatic {
      [key: string]: LocaleInstance;
      new(): LocaleInstance;
  }

  export const Locale: LocaleStatic;
}
