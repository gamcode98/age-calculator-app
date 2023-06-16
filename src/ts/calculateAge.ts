import { validateForm } from "./validateForm"

export function calculateAge() {
  const form = document.querySelector('form') as HTMLFormElement
  const yearsSpan = document.getElementById('years') as HTMLSpanElement
  const monthsSpan = document.getElementById('months') as HTMLSpanElement
  const daysSpan = document.getElementById('days') as HTMLSpanElement

  form.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(form)
    const day = formData.get('day') as string
    const month = formData.get('month') as string
    const year = formData.get('year') as string

    const hasErrors = validateForm(day, month, year)

    if (!hasErrors) {
      const dateOfBirth = new Date(+year, +month, +day)
      const currentDate = new Date()
      const ageMilliseconds = currentDate.getTime() - dateOfBirth.getTime()

      const age = new Date(ageMilliseconds)

      yearsSpan.textContent = (age.getUTCFullYear() - 1970).toString().padStart(2, '0')
      monthsSpan.textContent = (age.getUTCMonth() + 1).toString().padStart(2, '0')
      daysSpan.textContent = (age.getUTCDate() - 1).toString().padStart(2, '0')
    }

  })

}