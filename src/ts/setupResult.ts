const items = ['years', 'months', 'days']

export function setupResult() {
  const main = document.querySelector('main')
  const container = document.createElement('div')

  items.forEach(item => {
    const itemContainer = document.createElement('div')
    const itemNumber = document.createElement('span')
    const itemParagraph = document.createElement('p')

    itemNumber.classList.add('text-5xl', 'text-purple', 'font-extrabold', 'lg:text-7xl')
    itemNumber.textContent = '- -'
    itemParagraph.classList.add('text-5xl', 'font-extrabold', 'italic', 'lg:text-7xl')
    itemParagraph.textContent = item
    itemNumber.id = item.toLowerCase()
    itemContainer.classList.add('flex', 'gap-4', 'items-center')
    itemContainer.append(itemNumber, itemParagraph)
    container.append(itemContainer)
  })

  container.classList.add('mb-4')
  main?.append(container)


}