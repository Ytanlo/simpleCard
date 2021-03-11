const $btn_lft = document.querySelector('.slider-left');
const $btn_rgt = document.querySelector('.slider-right');
const $samuel = document.getElementById('samuel');
const $brayan = document.getElementById('brayan');
const $leo = document.getElementById('leo');
const $cards = document.querySelectorAll('.card');

$btn_lft.addEventListener('click', changeCardLft);
$btn_rgt.addEventListener('click', changeCardRgt);
document.addEventListener('DOMContentLoaded',getActive);

function getActive() {
  let index;
  let activa;
  for(let i = 0; i<$cards.length; i++) {
    if($cards[i].classList.contains('activa')){
      activa = $cards[i]
    }
  }
  console.log(activa);
}

function changeCardLft (e) {

  const $btnL = e.target.parentElement;
  if($btnL) {
    if($samuel.classList.contains('activa')){
      $samuel.classList.remove('activa')
      $samuel.classList.add('desactivada')
      $brayan.classList.add('activa')
    } else if ($brayan.classList.contains('activa')){
      $brayan.classList.remove('activa')
      $brayan.classList.add('desactivada')
      $leo.classList.add('activa')
    } 
}
}

function changeCardRgt (e) {
  const $btnR = e.target.parentElement;
  if($btnR) {
    if($brayan.classList.contains('activa')) {
    $brayan.classList.remove('activa')
    $samuel.classList.remove('desactivada')
    $samuel.classList.add('activa');
    } else if ($leo.classList.contains('activa')){
      $leo.classList.remove('activa')
      $brayan.classList.remove('desactivada')
      $brayan.classList.add('activa')
    }
}
}
