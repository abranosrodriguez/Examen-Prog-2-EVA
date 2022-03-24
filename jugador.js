function jugador() {
    var player = new Jugador_Clase(0,0,0)
    var bot = new Bot_Clase(0,0,0)

    let piedra = document.getElementById("piedra")
    piedra.addEventListener("click",()=>{
        maquina_piedra_papel_tijera()
        
        console.log("Jugador: Piedra")
        console.log("Maquina: " +resultado_maquina)
        let resultado_jugador = "piedra"
        
        resultado_piedra_jugador(resultado_jugador,resultado_maquina,player,bot)
        
    })

    let papel = document.getElementById("papel")
    papel.addEventListener("click",()=>{
        maquina_piedra_papel_tijera()

        console.log("Jugador: Papel")
        console.log("Maquina: " +resultado_maquina)
        let resultado_jugador = "papel"

        resultado_papel_jugador(resultado_jugador,resultado_maquina,player,bot)   
    })

    let tijera = document.getElementById("tijera")
    tijera.addEventListener("click",()=>{
        maquina_piedra_papel_tijera()

        console.log("Jugador: Tijera")
        console.log("Maquina: " +resultado_maquina)
        let resultado_jugador = "tijera"

        resultado_tijera_jugador(resultado_jugador,resultado_maquina,player,bot) 
    })
}