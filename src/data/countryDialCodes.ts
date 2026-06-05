import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js';

export interface CountryDialCode {
  country: CountryCode;
  name: string;
  dialCode: string;
  label: string;
  value: string;
}

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

export const countryDialCodes: CountryDialCode[] = getCountries()
  .map((country) => {
    const name = regionNames.of(country) ?? country;
    const dialCode = `+${getCountryCallingCode(country)}`;

    return {
      country,
      name,
      dialCode,
      label: `${name} (${dialCode})`,
      value: `${country}|${dialCode}`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const defaultCountryDialCode = 'IN|+91';
export const defaultCountry = 'IN';

export const countryOptions = countryDialCodes.map((country) => ({
  label: country.name,
  value: country.country,
}));

export function getCountryName(value: string | undefined): string {
  const trimmed = value?.trim();
  if (!trimmed) return '';

  const country = countryDialCodes.find(
    (item) => item.country === trimmed || item.name.toLowerCase() === trimmed.toLowerCase()
  );

  return country?.name ?? trimmed;
}
