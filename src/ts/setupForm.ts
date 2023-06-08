import iconArrow from '../assets/icon-arrow.svg'

const items = ['Day', 'Month', 'Year']

export function setupForm() {
  const main = document.querySelector('main')
  const divContainer = document.createElement('div')
  const form = document.createElement('form')
  const divContainerIcon = document.createElement('div')
  const imgIcon = document.createElement('img')
  const button = document.createElement('button')

  imgIcon.src = iconArrow
  imgIcon.alt = 'icon arrow'

  divContainer.classList.add('grid', 'grid-cols-3', 'gap-4')

  items.forEach(item => {
    const div = document.createElement('div')
    const label = document.createElement('label')
    label.textContent = item.toUpperCase()
    label.classList.add('tracking-widest', 'text-smokey-grey', 'font-bold')
    const input = document.createElement('input')
    input.type = 'number'
    input.classList.add('w-full', 'border', 'rounded-lg', 'text-xl', 'p-4', 'font-bold')
    div.append(label, input)
    divContainer.append(div)
  })

  divContainerIcon.classList.add('w-full', 'my-4', 'relative', 'after:content-[""]', 'after:absolute', 'after:border', 'after:border', 'after:w-full', 'after:top-1/2')
  button.classList.add('mx-auto', 'block')
  imgIcon.classList.add('bg-purple', 'p-4', 'rounded-full', 'z-10', 'relative')
  button.append(imgIcon)
  divContainerIcon.append(button)
  form.append(divContainer, divContainerIcon)
  main?.append(form)
}