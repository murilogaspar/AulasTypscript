
/* Type pode ser diversos tipos como string e number , 

pode combinar interfaces com tipos primeitivos do javascript  

*/
/*Ajuda a limitar qual tipo de valor eu quero que receba */

    type Input1 = string | number | string[] ;

    function prompt(input: Input1){
    }

    prompt(2);

/* espera um array de strings */
/* prompt(["murilo","joao"]);*/

    /* Um outro exemplo Interface com type */
    
    interface UserWallet{
        coins:number;
        credits?:number;
    }
    interface User {
            name:string,
            createAt: Date;
            wallet?: UserWallet
        }

    type Input = string |  User ;

    function prompt(input: Input){
    
    }
     
    /* passando ou o objeto user ( name createAt) ou o a string )  */

    /*prompt({ name: "Murilo", createAt: new Date() });*/


    /* Um outro exemplo Interface com type */
    
    interface Dog{
        name:string;
        breed:string;
        bark():string;
    }
    interface Cat {
        name:string,
        color: string;
        meow(): string
    }
    interface Bird{
        name:string;
        wingspan:string;
        chirp():string;
    }
    interface Cow {
            name:string,
            weight: number;
            moo(): string;
        }
        
    /* Inserindo a typagem do objeto definido direto no type não recomendado */
    
    type Animal2 = {
        name:string;
        breed:string;
        bark():string;
    } | {

        name:string,
        color: string;
        meow(): string

    } | {
        
        name:string;
        wingspan:string;
        chirp():string;

    } | {
        
        name:string,
        weight: number;
        moo(): string;

    }  
     

    type Animal = Dog | Cat | Bird | Cow ;

    function createAnimal(animal: Animal){

    }

    createAnimal({ name: "Rincko", color:"Laranja", meow() {
        return "Miau"
    },

});


  type UserWallet1 = {
        coins:number;
        credits?:number;
    }
  type User1 = {
            name:string,
            createAt: Date;
            wallet?: UserWallet
        }

  /*  a palavra extends não funciona no type*/
  type Admin1 = User1 & {
        /*name:string,
        createAt: Date;
        wallet?: UserWallet;*/
        ban(user:User1):void;
        kick(user:User1):void;
    }

    /*const admin1: Admin1 = {
        name: "Rincko",
        createAt: new Date(),
        ban(user:User1){
            console.log(user,"foi banido por ", this.name)
        }
    }*/
  