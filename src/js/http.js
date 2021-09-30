function updateCounter() {
  document.getElementById('count').innerHTML =
    'Selection: ' + document.getElementById('list').childElementCount
}

function addPictureToList(_img) {
  document.getElementById('picture1').innerHTML = ''
  document.getElementById('picture2').innerHTML = ''

  const img = document.createElement('img')
  img.src = _img.src
  img.id = img.src
  img.addEventListener('click', () => {
    document.getElementById(img.id).remove()
    updateCounter()
  })
  document.getElementById('list').appendChild(img)

  if (document.getElementById('list').childElementCount === 8) {
    document.getElementById('downloadButton').remove()
    const lorem3 = document.createElement('a')
    lorem3.textContent = 'YOU MADE YOUR CHOICE'
    const doneText = document.querySelector('#download')
    doneText.append(lorem3)
  }
  updateCounter()
}

function download() {
  document.getElementById('picture1').innerHTML = ''
  document.getElementById('picture2').innerHTML = ''
  const xhttp = new XMLHttpRequest()
  // eslint-disable-next-line func-names
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText)
      if (response.status === 'success') {
        const img1 = document.createElement('img')
        img1.src = response.message[0]
        img1.addEventListener('click', () => {
          addPictureToList(img1)
        })
        document.getElementById('picture1').appendChild(img1)
        const img2 = document.createElement('img')
        img2.src = response.message[1]
        img2.addEventListener('click', () => {
          addPictureToList(img2)
        })
        document.getElementById('picture2').appendChild(img2)
      }
    }
  }
  xhttp.open('GET', 'https://dog.ceo/api/breeds/image/random/2', false)
  xhttp.send()
}

module.exports = {
  download,
}
