/**
 * Enums ele faz a numeração 
 * neste exemplo a direção norte é 1, sul é 2, leste é 3 e oeste é 4
 
enum Direction {
     Norte = 1,
    Sul ,
    Leste ,
    Oeste ,
}
const pos = { 
    x:100,
    y:200,
    direction: Direction.Sul
}
*/
/**
 * Define um enum para representar os tamanhos de roupas, onde cada tamanho é associado a uma string específica
 enum ClothingSize {
    ExtraSmall = "PP",
    Small = "P" ,
    Medium = "M" ,
    Large = "G" ,
    ExtraLarge = "GG" ,
}
*/

/** Quando o botão é clicado pode ser verde , azul, vermelho ou cinza */
enum ButtonStyle {
    Green,
    Blue,
    Red,
    Gray
}

interface BUtton  { 
    label: string;
    emoji: string;
    style: ButtonStyle
}

/** Basta selecionar o numero ou a cor  */
const button1: BUtton = {
    label: "Enviar",
    emoji: "📤",
    style: ButtonStyle.Green
}

