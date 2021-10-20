const TIPOS:number[]= [19, 24, 30, 37, 45];
const TOPES:number[]= [0, 12450, 20200, 35200, 60000]
const TOPE_DESGRAVACION:number = 2000;

const readline = require('readline');

var capitalBruto:number = 0;
var capitalPensiones:number = 0;

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question("Introduzca sus ingresos anuales: ", (answer:number) => {
    capitalBruto = answer;    

    console.log("Ha indicado que tiene unos ingresos brutos anuales de : ", answer);

    rl.question("Introduzca sus aportaciones anuales a su plan de pensiones: ", (answer:number) => {
        capitalPensiones = answer;    

        console.log("Ha indicado que ha realizado aportaciones a su plan de pensiones este año en un total de : ", answer);
        rl.close();
        let percentage:number = 0;
        for (let i =0; i<TOPES.length; i++){
            if (i == TOPES.length-1){
                if(capitalBruto >= TOPES[i]){
                    percentage = TIPOS[i];
                }
            }else if(capitalBruto >= TOPES[i] && capitalBruto < TOPES[i+1]){
                percentage = TIPOS[i];
            }
        }
        let capitalDesgravacion:number = 0;
        if(capitalPensiones > TOPE_DESGRAVACION){
            capitalDesgravacion = TOPE_DESGRAVACION;
        }else{
            capitalDesgravacion = capitalPensiones;
        }
        let desgravado:number = capitalDesgravacion * (percentage / 100);

        console.log("Porcentaje correspondiente: " + percentage);
        console.log("Desgrava " + desgravado + "€")
    });
});


