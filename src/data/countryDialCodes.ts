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
