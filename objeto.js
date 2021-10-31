let amigo = {nome: 'Mari',
sexo: 'F',
peso: 55.6,
engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(4.4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)