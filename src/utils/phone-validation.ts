import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js/max';

export interface PhoneValidationResult {
  ok: boolean;
  fullPhone: string;
  telHref: string;
  error?: string;
}

export function validateOptionalPhone(
  countryCode: string | undefined,
  phone: string | undefined
): PhoneValidationResult {
  const trimmedPhone = phone?.trim() ?? '';
  if (!trimmedPhone) {
    return { ok: true, fullPhone: '', telHref: '' };
  }

  const selected = parseCountrySelection(countryCode);

  if (!selected.country && !trimmedPhone.startsWith('+')) {
    return {
      ok: false,
      fullPhone: '',
      telHref: '',
      error: 'Please select a country code for the phone number.',
    };
  }

  const phoneNumber = trimmedPhone.startsWith('+')
    ? parsePhoneNumberFromString(trimmedPhone)
    : parsePhoneNumberFromString(trimmedPhone, selected.country);

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
