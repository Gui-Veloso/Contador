const valor = document.getElementById("valor");
const botaoAdicionar = document.getElementById("adicionar");
const botaoDiminuir = document.getElementById("diminuir");
const botaoReset = document.getElementById("reset");

let count = 0;
let intervalId = 0;

const atualizarValor = () =>{
    valor.innerHTML =count ;
}

botaoAdicionar.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        atualizarValor();
    }, 100)
});

botaoDiminuir.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        atualizarValor();
    }, 100)
});

botaoReset.addEventListener('click',()=>{
    count = 0;
    atualizarValor();
})
document.addEventListener('mouseup', () => clearInterval(intervalId));
