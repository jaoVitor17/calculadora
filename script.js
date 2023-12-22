var conjunto1 = "";
var conjunto2 = "";
var conjunto = 1;
var numero = "";
var parts = ["", "", ""];
var conta = "";
const painel = document.getElementById("painel");

document.addEventListener("keydown", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    digito(event.key);
  }
});

function digito(tecla) {
  if (numero.length < 10) {
    numero = numero + tecla;
  }

  if (parts[1] == "") {
    conjunto1 = numero;
    var part = 0;
  } else {
    conjunto2 = numero;
    var part = 2;
  }

  tela(numero, part);
}

function operacao(oper) {
  if (conjunto1 != "") {
    if (conjunto == 1 || conjunto2 == "") {
      conta = oper;
      conjunto = 2;
      numero = "";
      tela("  " + oper + "  ", 1);
    } else {
      igual(oper);
    }
  }
}

function igual(oper) {

  if (conjunto2 != '') {
  if (conta == "+") {
    conjunto1 = parseFloat(conjunto1) + parseFloat(conjunto2);
  }

  if (conta == "-") {
    conjunto1 = parseFloat(conjunto1) - parseFloat(conjunto2);
  }

  if (conta == "/") {
    conjunto1 = parseFloat(conjunto1) / parseFloat(conjunto2);
  }

  if (conta == "*") {
    conjunto1 = parseFloat(conjunto1) * parseFloat(conjunto2);
  }

  parts = ["", "", ""];
  conjunto2 = "";

  numero = parseFloat(conjunto1).toFixed(8);
  numero = parseFloat(numero).toString();
  conjunto1 = numero;

  tela(numero, 0);

  if (oper != null) {
    conta == oper;
    numero = "";
    tela("  " + oper + "  ", 1);
  }
}
}

function tela(inf, part) {
  parts[part] = inf;

  painel.value = "";
  for (let i = 0; i < parts.length; i++) {
    painel.value = painel.value + parts[i];
  }
}

function apagar() {
  parts = ["", "", ""];
  conjunto1 = "";
  conjunto2 = "";
  numero = "";
  conjunto = 1;
  conta = "";
  painel.value = "";
}
