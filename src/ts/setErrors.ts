interface ErrorObject {
  isInvalid: boolean;
  message: string;
}

interface Error {
  day: ErrorObject;
  month: ErrorObject;
  year: ErrorObject;
}

export function setErrors(errors: Error, items: NodeListOf<Element>) {
  const hasErrors: string[] = []
  let existSpan = null

  items.forEach(item => {
    const input = item.querySelector('input') as HTMLInputElement
    existSpan = item.querySelector('span')

    if (!errors[input.name as keyof typeof errors].isInvalid) {
      existSpan?.remove()
      return
    }

    if (existSpan?.textContent === errors[input.name as keyof typeof errors].message
      || existSpan?.textContent === 'This field is required') {
      hasErrors.push(input.name)
    }

    if (!existSpan) {
      const span = document.createElement('span')
      span.classList.add('text-light-red', 'mt-2', 'block')
      item.appendChild(span)

      if (input.value === '') {
        hasErrors.push(input.name)
        span.textContent = 'This field is required'
      }

      if (input.value !== '' && errors[input.name as keyof typeof errors].isInvalid) {
        hasErrors.push(input.name)
        span.textContent = errors[input.name as keyof typeof errors].message
      }
    }
  })

  return hasErrors.length > 0
}