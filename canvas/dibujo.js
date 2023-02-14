var d       = document.getElementById('dibujito');
var lienzo  = d.getContext("2d");
var lineas  = 30;
var l       = 0;
var yi, xf, xi, yf;
var colorcito= "#FAA";

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = 0;
  yf = 300;
  dibujarlineas(colorcito, xi, yi, xf, yf);
  console.log("lineas " + l);
}

//Bordes de la caja canvas
dibujarlineas(colorcito  , 1, 1, 1, 299);
dibujarlineas(colorcito  , 1, 299, 299, 299);
dibujarlineas(colorcito  , 299, 1, 1, 1);
dibujarlineas(colorcito  , 299, 299, 299, 1);


function dibujarlineas(color, xinical, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinical, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}
