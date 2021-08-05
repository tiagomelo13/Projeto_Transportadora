//Função para mudar fundo do slide e marcar qual esta sendo visto
function mudarBanner1(){
  limpar();
  document.querySelector('.banner').classList.add('banner1');
  document.querySelectorAll('.pointer')[0].classList.add('active');
  }
function mudarBanner2(){
  limpar();
document.querySelector('.banner').classList.add('banner2');
document.querySelectorAll('.pointer')[1].classList.add('active');
}
function mudarBanner3(){
  limpar();
document.querySelector('.banner').classList.add('banner3');
document.querySelectorAll('.pointer')[2].classList.add('active');
}
function limpar(){
  document.querySelector('.banner').classList.remove('banner1');
  document.querySelector('.banner').classList.remove('banner2');
  document.querySelector('.banner').classList.remove('banner3');
  document.querySelectorAll('.pointer')[0].classList.remove('active');
  document.querySelectorAll('.pointer')[1].classList.remove('active');
  document.querySelectorAll('.pointer')[2].classList.remove('active');
}
function abrirMenu(){
var menuEmpresa = document.querySelector('.segundo').style.display='block';
var subMenu1 = document.querySelector('.subMenu').style.display='block';

}
function fecharMenu(){
  var menuEmpresa = document.querySelector('.segundo').style.display='none';
  }
