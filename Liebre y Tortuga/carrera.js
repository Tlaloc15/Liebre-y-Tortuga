class Carrera{
    constructor(){
    }
    ganador(){
        if(pasoLiembre > 90 && pasoTortuga < 90) {
            console.log('Liebre gana la carrera');
        }
        if(pasoLiembre < 90 && pasoTortuga > 90) {
            console.log('La tortuga gana la carrera');
        }
        else {
            console.log('Empate');
        }
        }


}

var carrera = new Carrera;
pasoLiembre = 0; 0
pasoTortuga = 0;
while (i <= 90) {

}

class Dado{
    constructor() {

    }
    lanzar(){
        return Math.trunc(Math.random() * probabilidadLT + 1);
    }
}


class Liebre{
    constructor(probabilidadLT = 0){
        this._posicion = pos[0];
        this._probabilidad = probabilidadLT;

    }
    
    get posicion(){
        return this._posicion;
    }
    get probabilidad(){
        return this._probabilidad;
    }

    probabilidadLT = 20;
    d1 = new Dado;

    avance(pasoLiembre){
        var pasoLiembre = d1.lanzar(probabilidadLT);
        if (pasoLiembre == 1 || pasoLiembre == 2) { //10%
            pos[0] += -12;
        } else if (pasoLiembre == 3 || pasoLiembre == 4 || pasoLiembre == 5) { //15%
            pos[0] += -2;
        } else if (pasoLiembre == 6 || pasoLiembre == 7 || pasoLiembre == 8 || pasoLiembre == 9) { //20%
            pos[0] += 0;
        } else if (pasoLiembre == 10 || pasoLiembre == 11 || pasoLiembre == 12 || pasoLiembre == 13) { //20%
            pasoLiembre += 9;
        } else {  //35%
            pos[0] += 1;
    }
        }
}

class Tortuga extends Liebre{
    constructor(){
        super(this._posicion, this._probabilidadLT)

    }
    probabilidadLT = 10;

    avance(pasoTortuga){
        if (pasoTortuga == 1 || pasoTortuga == 2) { //20%
            pasoTortuga += -6;
        } else if (pasoTortuga == 3 || pasoTortuga == 4 || pasoTortuga == 5) { //30%
            pasoTortuga += 1;
        } else {  //50%
            pasoTortuga += 3;
        }
        }
}