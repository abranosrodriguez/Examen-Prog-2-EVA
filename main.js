function main() {
    $("#piedra").prop("disabled",true)
    $("#papel").prop("disabled",true)
    $("#tijera").prop("disabled",true)
    document.getElementById("aceptar").addEventListener("click",()=>{
        $("#piedra").prop("disabled",false)
        $("#papel").prop("disabled",false)
        $("#tijera").prop("disabled",false)
        $("#aceptar").prop("disabled",true)
        $("#texto").prop("disabled",true)
    })
    jugador()
}
main()