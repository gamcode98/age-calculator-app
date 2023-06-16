import './style.css'
import { calculateAge, setupForm, setupResult } from './ts/index'

document.addEventListener('DOMContentLoaded', () => {
  setupForm()
  setupResult()
  calculateAge()
})