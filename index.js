import { criarPilha, inserirPilha, retirarPilha, verificaExistencia} from './pilha.js'

let alunos = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]
console.log('Pilha')
const pilha = criarPilha
console.log('pilha')

inserirItem(pilha, {
    titulo: "Dom Casmurro",
    paginas: 300,
    genero: "clássico",
})

export function retirarPilha(pilha){
    if(pilha.lenght === 0){
        console.log('A pilha está vazia')
        return null;
    }

    const itemRemovido = pilha.pop();
    console.log(`item removido:`, itemRemovido)
}
   