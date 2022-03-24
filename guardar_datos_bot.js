function guardar_datos_bot(bot_piedra,bot_papel,bot_tijera) {
    var victoria_bot_piedra = bot_piedra
    var victoria_bot_papel = bot_papel
    var victoria_bot_tijera = bot_tijera
    localStorage.setItem("Vic Bot Piedra",victoria_bot_piedra)
    localStorage.setItem("Vic Bot Papel",victoria_bot_papel)
    localStorage.setItem("Vic Bot Tijera",victoria_bot_tijera)
    console.log(victoria_bot_piedra,bot_papel,bot_tijera)
}