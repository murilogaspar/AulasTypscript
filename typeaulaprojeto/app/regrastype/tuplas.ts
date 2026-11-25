/** Tupla */
type NameList = string[]; 

/** estrutura de uma tupla basicamente uma caixa que vai determinados itens em posições específicas */
//type CalendaDate = [number, string, number];


/** pode ser feito também inserindo o nome */
type CalendaDate = [day:number, month:string, year:number]


const list:NameList = [];

list.push("Murilo");

/** não pode ser vazio , pois é uma tupla e requer três elementos como estabelecido  */
//const date: CalendaDate = [];


/** não pode ser também somente dois elementos, pois precisa ter três elementos como estabelecido no type  */
//const date: CalendaDate = [1,"2"];

/** não pode ser também somente mais de três elementos */
//const date: CalendaDate = [1,"2",3,4];


/** precisa passar como está no type number , string , number  */
const date: CalendaDate = [2024, "6", 16];


/**neste exemplo foi espalhado os elementos dessa tupla então day:number, month:string, year:number passou a ser argumentos da função */
function createDate(...date: CalendaDate){

/** ao inves de passar somente um parâmetro, passamos os três elementos da tupla  */
    const[day, month, year] = date;
}

createDate(12, "6", 2024);


/** Outro exemplo de Tupla  */

type NameList1 = string[]

type CalendaDate1 = [day:number, month:number, year:number]

const list1:NameList1 = [];

list1.push("Murilo");

/** Quando foi criado , não foi inserindo nenhuma anotação de tipo , o proprio typscript inferiu automaticamente como um number array  */
/** por isso precisamos anotar o tipo */
const date1: CalendaDate1 = [ 30 , 11, 202]

function createDate1(date1: CalendaDate1){

    const[day, month, year] = date1;
}

/** a função espera que passe um parâmetro do tipo Tupla */
createDate1(date1)


/**desestruturação de tuplas na tipagem do typescript */
//function createDate(date: CalendaDate){

/**posso extrair os tres valores,caso queira quatro elementos não é possivel o typescript avisa  */
  // const[day, month, year] = date;
//}

/** aqui eu vou inserir os elementos */
//createDate([2024, "6", 16]);
