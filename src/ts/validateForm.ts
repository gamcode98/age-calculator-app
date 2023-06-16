import { setErrors } from "./setErrors"

export function validateForm(day: string, month: string, year: string) {
  const items = document.querySelectorAll('form div div')

  const errors = {
    day: {
      isInvalid: +day < 1 || +day > 31,
      message: 'Must be a valid day'
    },
    month: {
      isInvalid: +month < 1 || +month > 12,
      message: 'Must be a valid month'
    },
    year: {
      isInvalid: +year < 1900 || +year > new Date().getFullYear(),
      message: 'Must be in the past'
    }
  }

  return setErrors(errors, items)

}
