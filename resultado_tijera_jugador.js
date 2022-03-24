function resultado_tijera_jugador(resultado_jugador,resultado_maquina,player,bot) {
    if(resultado_maquina == "tijera"){
        
        let ganador="Empate"
        console.log("Empate")
        actualizar_datos(resultado_jugador,resultado_maquina,ganador)
        guardar_datos_jugador(player.piedra,player.papel,player.tijera)
        guardar_datos_bot(bot.piedra,bot.papel,bot.tijera)
    }else if(resultado_maquina == "piedra"){
        maquina_piedra_papel_tijera()
        console.log("Gana la maquina")
        
        let ganador="Maquina"
        actualizar_datos(resultado_jugador,resultado_maquina,ganador)
        bot.piedra = bot.sumarPiedra()
        $("#maquina_victoria_piedra").html(bot.piedra)
        guardar_datos_jugador(player.piedra,player.papel,player.tijera)
        guardar_datos_bot(bot.piedra,bot.papel,bot.tijera)
    }else if(resultado_maquina == "papel"){
        maquina_piedra_papel_tijera()
        console.log("Gana el jugador")

        let ganador ="Jugador"
        actualizar_datos(resultado_jugador,resultado_maquina,ganador)
        player.tijera = player.sumarTijera()
        $("#jugador_victoria_tijera").html(player.tijera)
        guardar_datos_jugador(player.piedra,player.papel,player.tijera)
        guardar_datos_bot(bot.piedra,bot.papel,bot.tijera)
    }
    
}