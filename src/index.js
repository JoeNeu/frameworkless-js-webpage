import * as text from '@/js/main'
import * as httpService from '@/js/http'

import webpackLogo from '@/images/webpack-logo.svg'
import '@/styles/index.scss'

const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = text.welcomeText()

window.addEventListener('load', () => {
  if (document.getElementById('download') != null) {
    const fetchPictures = document.createElement('button')
    fetchPictures.addEventListener('click', httpService.download)
    fetchPictures.innerHTML = 'GET EM DOGGOS'
    const header = document.querySelector('#download')
    header.append(fetchPictures)
  }

  if (document.getElementById('welcome') != null) {
    const app = document.querySelector('#welcome')
    app.append(logo, heading)
  }
})
