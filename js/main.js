var format = document.querySelector(".format")
var total = document.querySelector(".total")
var desconto = document.querySelector(".desconto")

var precoAnterior = document.querySelector(".preco-anterior")
var precoAtual = document.querySelector(".preco-atual")
var parcelas = document.querySelector(".parcelas")
var text1 = document.querySelector(".text-js-1")
var text2 = document.querySelector(".text-js-2")
var textParcelas = document.querySelector(".parcelas")

//Primeiro desconto
var precoDesconto = 18.32
var percentual_B = 5.40 / 100.00
var descontoFinal = precoDesconto - (percentual_B * precoDesconto)

//Segundo Desconto
var p_Anterior = 30.00
var percentual_A = 38.93 / 100.0
var p_Atual = p_Anterior - (percentual_A * p_Anterior)
var calcParcelas = p_Atual / 3.0


//Valor inicial
desconto.value = new Intl.NumberFormat('pt-BR', { style: 'percent' }).format(- percentual_B)
total.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(descontoFinal)
precoAnterior.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(p_Anterior)
precoAtual.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(p_Atual)
parcelas.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(calcParcelas)


function mais() {

  format.value = parseInt(format.value) + 1;
  total.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(descontoFinal * format.value)
  precoAtual.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p_Atual * format.value)
  parcelas.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(calcParcelas * format.value)

  if (format.value == 2) {
    precoAnterior.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "none";
  }

  if (format.value > 1) {
    textParcelas.style.width = " 14%";
  } 

  if (format.value > 16){
    textParcelas.style.width = " 16%";
  }
  
}

function menos() {

  if (format.value > 1) {

    format.value = parseInt(format.value) - 1;
    total.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(descontoFinal * format.value)
    precoAtual.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p_Atual * format.value)
    parcelas.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(calcParcelas * format.value)

  }

  if (format.value == 1) {
    precoAnterior.style.display = "";
    text1.style.display = "";
    text2.style.display = "";
  }

  if (format.value == 16) {
    textParcelas.style.width = " 14%";
  }

}

//container-btn
function selectOnlyThis(id) {
  for (var i = 1; i <= 4; i++) {
    document.getElementById("Check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

//Carrousel-Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});