import * as text from '@/js/text'
import * as httpService from '@/js/http'

import '@/styles/index.scss'

let path = ''

if (process.env.NODE_ENV === 'production') {
  path = '/frameworkless-js-webpage'
}

window.addEventListener('load', () => {
  if (document.getElementById('topnav') != null) {
    const nav = document.getElementById('topnav')

    const home = document.createElement('a')
    home.href = path + '/'
    home.innerHTML = 'Home'
    if (document.getElementById('welcome') != null) {
      home.setAttribute('class', 'active')
    }

    const dog = document.createElement('a')
    dog.href = path + '/content.html'
    dog.innerHTML = 'Dog Selection'
    if (document.getElementById('download') != null) {
      dog.setAttribute('class', 'active')
    }

    const about = document.createElement('a')
    about.href = path + '/about.html'
    about.innerHTML = 'About'
    if (document.getElementById('about') != null) {
      about.setAttribute('class', 'active')
    }

    nav.append(home, dog, about)
  }

  if (document.getElementById('download') != null) {
    const id = document.getElementById('info')
    id.innerHTML = text.info()
    const fetchPictures = document.createElement('button')
    fetchPictures.addEventListener('click', httpService.download)
    fetchPictures.innerHTML = 'GET EM DOGGOS'
    fetchPictures.id = 'downloadButton'
    fetchPictures.setAttribute('class', 'btn')
    fetchPictures.setAttribute('class', 'btn-warning')
    fetchPictures.setAttribute('class', 'btn-lg')

    document.querySelector('#download').append(fetchPictures)
  }

  if (document.getElementById('welcome') != null) {
    const heading = document.createElement('h1')
    heading.textContent = text.welcome()

    document.querySelector('#welcome').append(heading)
  }

  if (document.getElementById('about') != null) {
    if (window.location.search !== '') {
      const selection = document.createElement('div')
      selection.innerHTML = 'Your previous query was: ' + window.location.search
      const prevSelection = document.querySelector('#prevSelection')
      prevSelection.append(selection)
    }

    document
      .querySelector('#about')
      .append(text.getAbout(), text.getAbout(), text.getAbout())

    const fName = document.getElementById('fName')
    fName.onkeyup = () => {
      if (fName.value.length >= 8) {
        fName.removeAttribute('class')
        fName.setAttribute('class', 'valid')
      } else {
        fName.removeAttribute('class')
        fName.setAttribute('class', 'invalid')
      }
    }

    const fNumber = document.getElementById('fNumber')
    fNumber.onkeyup = () => {
      if (/^\d+$/.test(fNumber.value)) {
        fNumber.removeAttribute('class')
        fNumber.setAttribute('class', 'valid')
      } else {
        fNumber.removeAttribute('class')
        fNumber.setAttribute('class', 'invalid')
      }
    }

    const fPw = document.getElementById('fPw')
    fPw.onkeyup = () => {
      if (
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(fPw.value)
      ) {
        fPw.removeAttribute('class')
        fPw.setAttribute('class', 'valid')
      } else {
        fPw.removeAttribute('class')
        fPw.setAttribute('class', 'invalid')
      }
    }

    const fEmail = document.getElementById('fEmail')
    fEmail.onkeyup = () => {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fEmail.value)) {
        fEmail.removeAttribute('class')
        fEmail.setAttribute('class', 'valid')
      } else {
        fEmail.removeAttribute('class')
        fEmail.setAttribute('class', 'invalid')
      }
    }

    // WTF pls excuse this function.
    // It was late and i had to go see some friends. Got never refactored
    const form = document.getElementById('aboutForm')
    form.setAttribute('action', path + '/about.html')
    form.onsubmit = () => {
      if (fName.value.length >= 8) {
        fName.removeAttribute('class')
        fName.setAttribute('class', 'valid')
        if (/^\d+$/.test(fNumber.value)) {
          fNumber.removeAttribute('class')
          fNumber.setAttribute('class', 'valid')
          if (
            // eslint-disable-next-line max-len
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
              fPw.value
            )
          ) {
            fPw.removeAttribute('class')
            fPw.setAttribute('class', 'valid')
            // eslint-disable-next-line max-len
            if (
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fEmail.value)
            ) {
              fEmail.removeAttribute('class')
              fEmail.setAttribute('class', 'valid')
              return true
            }
            fEmail.removeAttribute('class')
            fEmail.setAttribute('class', 'invalid')
          } else {
            fPw.removeAttribute('class')
            fPw.setAttribute('class', 'invalid')
          }
        } else {
          fNumber.removeAttribute('class')
          fNumber.setAttribute('class', 'invalid')
        }
      } else {
        fName.removeAttribute('class')
        fName.setAttribute('class', 'invalid')
      }
      return false
    }
  }
})
