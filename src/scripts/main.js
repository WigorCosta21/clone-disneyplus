document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-tab-button]')
  const questions = document.querySelectorAll('[data-faq-question]')

  const heroSection = document.querySelector('.hero')
  const heroHeight = heroSection.clientHeight

  window.addEventListener('scroll', () => {
    const currentPosition = window.scrollY

    currentPosition < heroHeight ? hideHeaderElements() : displayHeaderElements()
  })

  // Attractions section, tab schedule
  buttons.forEach((button) => {
    button.addEventListener('click', (btn) => {
      const targetTab = btn.target.dataset.tabButton
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
      hideAllTabs()
      tab.classList.add('shows__list--is-active')
      removeActiveButton()
      btn.target.classList.add('shows__tabs__button--is-active')
    })
  })

  // FAQ section, accordion
  questions.forEach((question) => {
    question.addEventListener('click', openOrCloseAnswer)
  })

})

const hideAllTabs = () => {
  const tabsContainer = document.querySelectorAll('[data-tab-id]')

  tabsContainer.forEach((tab) => {
    tab.classList.remove('shows__list--is-active')
  })
}

const removeActiveButton = () => {
  const buttons = document.querySelectorAll('[data-tab-button]')

  buttons.forEach((button) => {
    button.classList.remove("shows__tabs__button--is-active")
  })
}

const openOrCloseAnswer = (element) => {
  const elementClass = 'faq__questions__item--is-open'
  const parentElement = element.target.parentNode

  parentElement.classList.toggle(elementClass)
}

const hideHeaderElements = () => {
  const header = document.querySelector('header')
  header.classList.add('header--is-hidden')
}

const displayHeaderElements = () => {
  const header = document.querySelector('header')
  header.classList.remove('header--is-hidden')
}