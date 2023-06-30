const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const total = document.getElementById('total');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');

const resumen = () => {
    if(total.innerText !== "Total a Pagar: $"){
        total.innerText = "Total a Pagar: $";
    }
    total.innerText += " " + Math.round(( (cantidad.value * 200) * ( 1 - ( Number(categoria.value) / 100 )) ) );
}

const borrar = () => {
    total.innerText = "Total a Pagar: $";
    cantidad.value = "";
    categoria.value = "";
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
}