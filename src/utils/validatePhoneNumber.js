export const validatePhoneNumber = (phone_number) => {
  if (!phone_number) {
    return false;
  }
  const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
  return regexTelefone.test(phone_number);
};
