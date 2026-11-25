/* primeiro pálavra chave (ex const), depois o nome da variavel Myname , operador de atribuilção  = , depois o valor
    const Myname = "Murilo"
*/

/*import { create } from "node:domain"*/

/* Porem posso anotar o tipo da variaravel antes de atibuir o valor 
    const myname: number = 1
    Como foi definido é do tipo numbre ou seja apenas numeros 
    const myname: number = "Murilo"
    const Myvar: any = 1 ;tipo universal de atributo , porém não é recomendado pois tira o sentido função , tipo , classe
*/


/* Nem sempre vamos está recebendo dados concretos , seja de input , resquisição da api ou geração de um codigo 
    const Myname2: null = null
    const Myname3: undefined = undefined 
*/

/* tipos mais avançados
    const Myname4: symbol = kakalklalkam
    const Myname5: bigint = aaaaaaa
*/

/* Criado uma função em que vai somar dois valores lembrando que a do tipo number e b também do tipo number ,
   retorno da função tipo number

    function sum(a : number , b: number ):number {
        return a + b 
    }
*/


/* outro tipo de função esse parâmetro é o age? que é opcional , removendo o ? vai se tornar obrigatório  
    argumentos opcionais só pode definir se for os ultimos 
    
    function greet(name:string ,age?:number ) {
    }
    
    inferência de tipos
    const animal = {
        name:"Gato"
        age:5,
    }
*/
  
/* mostra o tipo se for age mostra o metodos de numero 
    
    animal.age.toString
    
    mostra os metodos de texto
    
    animal.name.charAt
*/


/* Função de flexa recebe o primeiro valor do tipo number e vai retornar um boleano 
    const filter = (value: number) => value < 0;
    const numbers = [1,2,3,-1,-4,-5];
    numbers.filter(filter)
*/

/* não tem como comparar  se a string é menor que 0, maior ou menor só funciona com números
    const filter = (value: string) => value < 0;
    const numbers = [1,2,3,-1,-4,-5];
    numbers.filter(filter) 
*/

