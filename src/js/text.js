const welcome = () => 'DOG CREW CREATOR'

const about = () =>
  `Doggo ipsum he made many woofs heck long bois I am bekom fat puggorino, 
  snoot extremely cuuuuuute long water shoob, very taste wow dat tungg tho 
  borking doggo. Long woofer blep doing me a frighten thicc corgo most angery 
  pupper I have ever seen heckin good boys fat boi, porgo long water shoob 
  boofers blop most angery pupper I have ever seen. 
  Super chub very good spot smol 
  shibe corgo, stop it fren big ol pupper borking doggo. Long woofer smol 
  borking doggo with a long snoot for pats 
  doing me a frighten bork snoot, porgo doge.
  Big ol most angery pupper I have ever seen mlem borkf many pats, lotsa pats 
  snoot fat boi, very jealous pupper many pats puggorino. Porgo woofer he made 
  many woofs borkf, very jealous pupper aqua doggo. Doggo heck aqua doggo big 
  ol pupper, extremely cuuuuuute yapper. Thicc mlem very jealous pupper many
  pats bork pupperino many pats, stop it fren ruff super chub 
  very hand that feed shibe aqua doggo. Big ol sub woofer 
  doggorino, shooberino. Wrinkler fat boi very 
  taste wow porgo long water shoob, boof long bois. Long bois blop he made many 
  woofs the neighborhood pupper clouds smol borking doggo with a long snoot 
  for pats, aqua doggo long woofer doggo. Snoot shibe mlem long bois, pupperino.
  Wow such tempt corgo heckin good boys shibe borkdrive, 
  sub woofer heck big ol, noodle horse very jealous pupper waggy wags. 
  puggo length boy. waggy wags. Porgo very hand that feed shibe borkdrive 
  doggo heck smol, bork waggy wags borkdrive extremely cuuuuuute. Doggorino 
  maximum borkdrive pupper, fat boi. Pupper doggo puggorino yapper, clouds 
  blep. Heckin good boys heckin good boys and girls mlem sub woofer heckin 
  angery woofer, much ruin diet boofers most angery pupper I have ever seen. 
  Shoober doggo super chub blep, pupperino corgo. Borkdrive very hand that 
  feed shibe you are doing me the shock waggy wags big ol, woofer dat tungg 
  tho. Pupper he made many woofs long woofer very taste wow stop it fren, 
  long woofer bork. Woofer h*ck such treat stop it fren many pats heckin 
  angery woofer, maximum borkdrive smol extremely cuuuuuute.`

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
