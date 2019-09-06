class Corredor {
    constructor(nombre, posicionLT) {
        this._nombre = nombre;
        this._posicionLT = posicionLT;
    }

    get nombre(){
        return this
    }

    get posicion(){
        return this._posicionLT;
    }

    set posicion(posicionLT = 0){
        this._posicionLT = posicionLT;

    }
}



class Dado{
    constructor() {

    }
    lanzar(){
        return Math.trunc(Math.random() * probabilidadLT + 1);
        
    }
}


class Liebre extends Corredor{
    constructor(posicionLT, probabilidadLT){
        super(posicionLT);
        this._probabilidad = probabilidadLT;

    }

    avanceLiebre(pasoLiembre){
        probabilidadLT = 20;
        var pasoLiembre = d1.lanzar(probabilidadLT);
        if (l == 1 || pasoLiembre == 2) { //10%
            posicionLT += -12;
        } else if (pasoLiembre == 3 || pasoLiembre == 4 || pasoLiembre == 5) { //15%
            posicionLT += -2;
        } else if (pasoLiembre == 6 || pasoLiembre == 7 || pasoLiembre == 8 || pasoLiembre == 9) { //20%
            posicionLT += 0;
        } else if (pasoLiembre == 10 || pasoLiembre == 11 || pasoLiembre == 12 || pasoLiembre == 13) { //20%
            posicionLT += 9;
        } else {  //35%
            posicionLT += 1;
    }
        }
}

class Tortuga extends Corredor{
    constructor(){
        super(posicionLT)

    }
    probabilidadLT = 10;

    avanceTortuga(pasoTortuga){
        this.probabilidadLT = 10;
        var pasoTortuga = d1.lanzar(this.probabilidadLT);
        if (pasoTortuga == 1 || pasoTortuga == 2) { //20%
            posicionLT += -6;
        } else if (pasoTortuga == 3 || pasoTortuga == 4 || pasoTortuga == 5) { //30%
            posicionLT += 1;
        } else {  //50%
            posicionLT += 3;
        }
        }
}

class Carrera{
    constructor(){
    }
    ganador(){
        var liebre = new Liebre();
        var tortuga = new Tortuga();
        
        while(tortuga.posicionLT < 90 && liebre.posicionLT < 90){
            tortuga.avanceTortuga();
            liebre.avanceLiebre();
            console.log('posicion Tortuga ' + tortuga.posicionLT);
            console.log('posicion Liebre ' + liebre.posicionLT);
        }
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

d1 = new Dado;
var ganar = new Carrera();
console.log(ganar.ganador());