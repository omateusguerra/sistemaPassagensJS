console.log(`Trabalhando com Listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 19;
const acompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade, venda AUTORIZADA!");
//     listaDeDestinos.splice(1, 1);
// } else if (acompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Venda não permitida para menores de 18 anos!");
// };
                        //ou
if (idadeComprador >= 18 || acompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Venda não permitida para menores de 18 anos!");
};
console.log(listaDeDestinos);

console.log("Hora de embarcar! \n");
console.log("Embarque:");

                               //e
if (temPassagemComprada == true && idadeComprador >= 18 || acompanhada == true){
    console.log("Autorizado!");
}else{
    console.log("Negado!");
};