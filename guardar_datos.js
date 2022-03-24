function guardar_datos_jugador(player_piedra,player_papel,player_tijera) {
    var victoria_jugador_piedra = player_piedra
    var victoria_jugador_papel = player_papel
    var victoria_jugador_tijera = player_tijera
    localStorage.setItem("Vic Jug Piedra",victoria_jugador_piedra)
    localStorage.setItem("Vic Jug Papel",victoria_jugador_papel)
    localStorage.setItem("Vic Jug Tijera",victoria_jugador_tijera)
    console.log(victoria_jugador_piedra,player_papel,player_tijera)
}