/*Implementa una función que determine si un número es mayor a otro.

Sigue los pasos a continuación para que completes el programa:

Retornar el numero mayor entre A, B y C
Input: A = 10, B = 30, C = 5 Output: 30*/

function mayorQue (A, B, C){ 
    
    if(A>=B && A>=C){ // se condiciona si A es mayor que B y C
    console.log(A);

	}else if(B>=A && B>=C){ //se condiciona si B es mayor que A y C
    console.log(B);
    
    }else{ 
    console.log(C); //si ninguna de las 2 condiciones es verdadera, C es mayor
    }

}

mayorQue(10,30,5);// se invoca la funcion se espera 30 sea el num mayor