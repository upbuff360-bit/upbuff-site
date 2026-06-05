import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js';

export interface PhoneValidationResult {
  ok: boolean;
  fullPhone: string;
  telHref: string;
  error?: string;
}

export function validateOptionalPhone(
  countryCode: string | undefined,
  phone: string | undefined,
  country: string | undefined
): PhoneValidationResult {
  const trimmedPhone = phone?.trim() ?? '';
  if (!trimmedPhone) {
    return { ok: true, fullPhone: '', telHref: '' };
  }

  const selected = parseCountrySelection(countryCode);
  const expectedCountry = parseCountryValue(country);

  if (selected.country && expectedCountry && selected.country !== expectedCountry) {
    return {
      ok: false,
      fullPhone: '',
      telHref: '',
      error: 'Country and phone country code do not match.',
    };
  }

  const parseCountry = selected.country ?? expectedCountry;

  if (!parseCountry && !trimmedPhone.startsWith('+')) {
    return {
      ok: false,
      fullPhone: '',
      telHref: '',
      error: 'Please select a country code for the phone number.',
    };
  }

  const phoneNumber = trimmedPhone.startsWith('+')
    ? parsePhoneNumberFromString(trimmedPhone)
    : parsePhoneNumberFromString(trimmedPhone, parseCountry);

  if (!phoneNumber?.isValid()) {
    return {
      ok: false,
      fullPhone: '',
      telHref: '',
      error: 'Please enter a valid phone number for the selected country code.',
    };
  }

  if (selected.dialCode && `+${phoneNumber.countryCallingCode}` !== selected.dialCode) {
    return {
      ok: false,
      fullPhone: '',
      telHref: '',
      error: 'The phone number does not match the selected country code.',
    };
  }

  if (selected.country && phoneNumber.country && phoneNumber.country !== selected.country) {
    return {
      ok: false,
      fullPhone: '',
      telHref: '',
      error: 'The phone number does not match the selected country code.',
    };
  }

  if (expectedCountry && phoneNumber.country && phoneNumber.country !== expectedCountry) {
    return {
      ok: false,
      fullPhone: '',
      telHref: '',
      error: 'The phone number does not match the selected country.',
    };
  }

  return {
    ok: true,
    fullPhone: phoneNumber.formatInternational(),
    telHref: phoneNumber.number,
  };
}

function parseCountrySelection(value: string | undefined): { country?: CountryCode; dialCode?: string } {
  const trimmed = value?.trim();
  if (!trimmed) return {};

  const [country, dialCode] = trimmed.includes('|') ? trimmed.split('|') : ['', trimmed];
  const normalizedDialCode = dialCode.match(/^\+\d+$/) ? dialCode : undefined;

  return {
    country: /^[A-Z]{2}$/.test(country) ? (country as CountryCode) : undefined,
    dialCode: normalizedDialCode,
  };
}

function parseCountryValue(value: string | undefined): CountryCode | undefined {
  const trimmed = value?.trim();
  if (!trimmed || trimmed === 'Other') return undefined;

  if (/^[A-Z]{2}$/.test(trimmed)) {
    return trimmed as CountryCode;
  }

  return undefined;
}
