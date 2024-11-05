const mostrarPantalla = (valor) => {
    const pantalla = document.getElementById("pantalla").value += valor;;
    
}

const borrar=()=>{
    document.getElementById('pantalla').value='';
}
//forma simple, tiene el problema de que puedes presionar seguido un operador lo que no deberia
const calcular=()=>{
    const valorPAntalla=document.getElementById('pantalla').value;
    const resultado= eval(valorPAntalla);
    document.getElementById('pantalla').value=resultado;
    

}


