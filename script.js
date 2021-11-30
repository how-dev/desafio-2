function filtraCores(lista, cor) {
    let listafiltrada = []
    for( let i = 0; i < lista.length; i++){
        if (lista[i] === cor) {
            listafiltrada.push(lista[i])
        }
    }
    return listafiltrada
}