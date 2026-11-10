/** type intersection operador & para combinar tipos 

interface Robot{    
    material: string;
    fuel: string;
}

interface Human{    
    name: string;
    age: number;
}

type Cyborg = Robot & Human;

const cyborg: Cyborg = {
    material: "metal",
    fuel: "electricity",
    name: "John",
    age: 30
};

const cyborg1: Human = {
    name: "John",
    age: 30
};
*/


/** printInput?: boolean;
    printTime?: boolean; passou a ser opcional */

/**interface MyfetchOptions {
    printInput?: boolean;
    printTime?: boolean;
}

type RequestOptions = MyfetchOptions & RequestInit;

export function myFetch  (input:string, options?:RequestOptions) { 

    if (options?.printInput) {
        console.log("input",input);
    }   

    if (options?.printTime) {
        console.log("time", new Date().toDateString());
    }
    return fetch(input, options);

}

myFetch("http://localhost:8080/auth" ,  {
    /** todas as propriedades de MyfetchOptions são requeridas 
    printTime: true,
    printInput: true,
    */

    // agora passou a ser opcional printInput??

   // method: "POST",
//})


/** não pode fazer a tipagem  */

//type CustomString = string & number  & boolean; // não pode fazer a tipagem

//const custom : CustomString = true
