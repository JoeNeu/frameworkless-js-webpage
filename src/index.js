import * as text from '@/js/text'
import * as httpService from '@/js/http'

import '@/styles/index.scss'

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
    app.append(heading)
  }
})
