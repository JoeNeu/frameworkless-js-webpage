function download() {
  document.getElementById('picture1').innerHTML = ''
  document.getElementById('picture2').innerHTML = ''
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText)
      if (response.status === 'success') {
        const img1 = document.createElement('img')
        img1.src = response.message[0]
        document.getElementById('picture1').appendChild(img1)
        const img2 = document.createElement('img')
        img2.src = response.message[1]
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
