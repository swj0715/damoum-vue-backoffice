export function validateEmail(email: string) {
  return /^[0-9a-zA-Z]([-_.*0-9a-zA-Z]*)@[0-9a-zA-Z]([-.0-9a-zA-Z]*\.)+[a-zA-Z]{2,}$/.test(email)
}
