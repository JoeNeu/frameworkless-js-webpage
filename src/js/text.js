const welcome = () =>
  `The ULTIMATE dog Website!!! Click on 'Dog Selection' to 
  select your dog crew! If you have questions fill out the 
  form in the 'About' section.`

const about = () =>
  // eslint-disable-next-line max-len
  `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`

const info = () =>
  `By clicking the Button you will be offered with two nice doggos. You
        have to chose. Your selection is displayed below. You can remove your
        previously selected dog by clicking on the Picture. Once you reach 8
        sweet doggos you can not undo your selection.`

function getAbout() {
  const lorem = document.createElement('div')
  lorem.textContent = about()
  lorem.setAttribute('class', 'ml-1')
  return lorem
}
module.exports = {
  welcome,
  about,
  info,
  getAbout,
}
