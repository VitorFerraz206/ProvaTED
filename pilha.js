export function criarPilha(tamanhoDaPilha = 10)
{

}


export function criarPilha (pilha,item){
    
}


export function inserirPilha (pilha,item){
    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition=== -1){
        console.log('não possui espaço')
    }
    
}


export function retirarPilha(pilha){
if(pilha[0]=== undefined){
    console.log('foi retirado da pilha')
}

}


export function procurarPilha(pilha,item){
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i].titulo === item.titulo){
            console.log('Achamos o livro'+ item.titulo)
        }
        return;
    }
}

