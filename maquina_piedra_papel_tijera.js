function maquina_piedra_papel_tijera() {
    lista = ["piedra","papel","tijera"]
    for(i=0;i<lista.length;i++){
        aleatorio =  Math.round(Math.random() * (i - 0))
    }
    resultado_maquina = (lista[aleatorio])
    return resultado_maquina
}
