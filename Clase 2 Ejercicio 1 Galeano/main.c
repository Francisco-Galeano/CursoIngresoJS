#include <stdio.h>
#include <stdlib.h>
#define CANTIDAD 3

int main()
{
    int numero;
    float promedio;
    int algo;
    int suma = 0;

    for(algo = 0; algo < CANTIDAD; algo++){

     //   printf("Ingrese un numero \n");
     //   scanf("%d", &numero);

     //    while(numero <= 0){
            do{
            printf("Ingrese un numero \n");
            scanf("%d", &numero);

            }while(numero <= 0);


         //   }

             suma = suma + numero;


        }




    promedio = (float)suma / CANTIDAD;

    printf("El promedio es : %.2f \n", promedio);



    return 0;
}
