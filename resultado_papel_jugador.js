function resultado_papel_jugador(resultado_jugador,resultado_maquina,player,bot) {
    if(resultado_maquina == "papel"){
        
        let ganador="Empate"
        console.log("Empate")
        actualizar_datos(resultado_jugador,resultado_maquina,ganador)
        guardar_datos_jugador(player.piedra,player.papel,player.tijera)
        guardar_datos_bot(bot.piedra,bot.papel,bot.tijera)
    }else if(resultado_maquina == "tijera"){
        maquina_piedra_papel_tijera()
        console.log("Gana la maquina")
        
        let ganador="Maquina"
        actualizar_datos(resultado_jugador,resultado_maquina,ganador)
        bot.tijera = bot.sumarTijera()
        $("#maquina_victoria_tijera").html(bot.tijera)
        guardar_datos_jugador(player.piedra,player.papel,player.tijera)
        guardar_datos_bot(bot.piedra,bot.papel,bot.tijera)
    }else if(resultado_maquina == "piedra"){
        maquina_piedra_papel_tijera()
        console.log("Gana el jugador")

        let ganador ="Jugador"
        actualizar_datos(resultado_jugador,resultado_maquina,ganador)
        player.papel = player.sumarPapel()
        $("#jugador_victoria_papel").html(player.papel)
        guardar_datos_jugador(player.piedra,player.papel,player.tijera)
        guardar_datos_bot(bot.piedra,bot.papel,bot.tijera)
    }
    
}