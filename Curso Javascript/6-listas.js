console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

//Adicionar itens na lista de forma dinâmica
listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

//Como excluir um item da lista por posição (começando do 0)
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//Como selecionar os itens da lista que devem ser apresentados
console.log(listaDeDestinos [2]);
console.log(listaDeDestinos [2], listaDeDestinos[0]);