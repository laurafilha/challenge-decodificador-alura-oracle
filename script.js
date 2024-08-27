var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output-texto");

function criptografar() {
  var texto = document.getElementById("input-texto");

  var result1 = texto.value.replace(/e/g, "xfl");
  var result2 = result1.replace(/i/g, "spn");
  var result3 = result2.replace(/a/g, "zwy");
  var result4 = result3.replace(/o/g, "twb");
  var result5 = result4.replace(/u/g, "hwv");

  var element = document.getElementById("output-texto");
  element.innerHTML =
    '<textarea class="textarea-output" readonly id="output-textarea">' +
    result5 +
    "</textarea>" +
    '<button class="principal__botoes__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
  var texto = document.getElementById("input-texto");

  var result1 = texto.value.replace(/xfl/g, "e");
  var result2 = result1.replace(/spn/g, "i");
  var result3 = result2.replace(/zwy/g, "a");
  var result4 = result3.replace(/twb/g, "o");
  var result5 = result4.replace(/hwv/g, "u");

  var element = document.getElementById("output-texto");
  element.innerHTML =
    '<textarea class="textarea-output" readonly id="output-textarea">' +
    result5 +
    "</textarea>" +
    '<button class="principal__botoes__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  var textoCop = document.getElementById("output-textarea");

  navigator.clipboard.writeText(textoCop.textContent).then(
    function () {
      alert("Texto copiado para área de transferência.");
    },
    function (err) {
      console.error("Erro ao copiar texto: ", err);
    }
  );
}
