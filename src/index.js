import * as text from '@/js/text'
import * as httpService from '@/js/http'

import '@/styles/index.scss'

window.addEventListener('load', () => {
  if (document.getElementById('download') != null) {
    const fetchPictures = document.createElement('button')
    fetchPictures.addEventListener('click', httpService.download)
    fetchPictures.innerHTML = 'GET EM DOGGOS'
    fetchPictures.id = 'downloadButton'
    fetchPictures.setAttribute('class', 'btn')
    fetchPictures.setAttribute('class', 'btn-warning')
    fetchPictures.setAttribute('class', 'btn-lg')
    const download = document.querySelector('#download')
    download.append(fetchPictures)
  }

  if (document.getElementById('welcome') != null) {
    const heading = document.createElement('h1')
    heading.textContent = text.welcome()

    const welcome = document.querySelector('#welcome')
    welcome.append(heading)
  }

  if (document.getElementById('about') != null) {
    const lorem = document.createElement('div')
    lorem.textContent = text.about()
    lorem.setAttribute('class', 'ml-1')
    const lorem2 = document.createElement('div')
    lorem2.textContent = text.about()
    lorem2.setAttribute('class', 'ml-1')
    const lorem3 = document.createElement('div')
    lorem3.textContent = text.about()
    lorem3.setAttribute('class', 'ml-1')

    const about = document.querySelector('#about')
    about.append(lorem, lorem2, lorem3)
  }
})
