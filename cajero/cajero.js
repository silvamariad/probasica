class billete{
    constructor(v, c){
        
        this.valor      = v;
        this.cantidad   = c;
        this.imagen     = new Image();
        this.imagen.src = imagenes[this.valor];

    }
}

var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"]  = "50.png";
imagenes["20"]  = "20.png";
imagenes["5"]   = "5.png";
imagenes["1"]   = "1.png";

var caja=[];
caja.push(new billete(100   , 5) );
caja.push(new billete(50    , 10) );
caja.push(new billete(20    , 30) );
caja.push(new billete(5     , 20) );
caja.push(new billete(1     , 10) );

var entregado= [];


var dinero  = 0;
var div     = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");

b.addEventListener("click", entregardinero);

function entregardinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            //console.log(div);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push(new billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles); 
        }
    }
    if (dinero > 0)
    {
       
        resultado.innerHTML = "No Dispongo del Efectivo Ahora:(";
    }
    else
    {
        resultado.innerHTML = "<h2>.::Retirado con Existo::.</h2>";
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                for(var bi = 1; bi <= e.cantidad; bi++)
                {
                    resultado.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br /><hr />";
                    resultado.innerHTML += "<img src=" + '"' + e.imagen.src + '"' + "/>" + "<br /><hr />";
                    //console.log("estoy aqui");
                }
            } 
        }
    }
    console.log(entregado);
}