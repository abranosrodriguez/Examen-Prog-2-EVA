class Jugador_Clase extends Clase{
    sumarPiedra(){
        this.piedra = this.piedra + 1
        return this.piedra
    }

    sumarPapel(){
        this.papel = this.papel +1
        return this.papel
    }

    sumarTijera(){
        this.tijera = this.tijera +1
        return this.tijera
    }
}