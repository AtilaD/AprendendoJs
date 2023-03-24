# AprendendoJs
 
# Introducao

Para imprimir valores no console

```jsx
console.log('O que sera impresso');
```

Sempre utilize o ponto e virgula depois do codigo, por mais que seja necessario na maioria das vezes, pegar esse costume ajuda em funcoes que precisam.

### Comentarios

Existem duas formas de comentarios em JS, // e /* */

```jsx
// serve para comentarios em 1 linha
/* serve para 
comentarios em mais de uma linha*/
```

### Tipos de dados

Existem 7 tipos de dados: Numero, String, Boolean, Nulo, Indefinido, Simbolo, Objeto.

### Operadores Aritmeticos

1. Adicionar:`+`
2. Subtrair:``
3. Multiplicar:``
4. Dividir:`/`
5. Restante:`%`

### Concatencacao de Strings

Quando + é usado entre duas strings, ele anexa uma a outra

### Propriedades

Todos os tipos de dados tem propriedades especificas. Ex: toda string tem length que armazena o numero de caracteres nessa string. Voce pode anexar essa propriedade a string usando ‘.’

```jsx
console.log('Hello'.length);
```

### Metodos

Metodos sao ACOES que podemos executar. Os tipos de dados tem acesso a metodos especificos. Chamamos e usamos esses metodos anexando uma instancia com:

- um ponto (o operador ponto)
- o nome do método
- abrindo e fechando parênteses

```jsx
'example string'.methodName()
```

### Objetos Imbutidos

Gerar numero aleatorio com um objeto que tem metodos, so ousar math.random(), para decidir ate qnt, basta multiplicas pelo numero maximo

```jsx
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
```

# Variaveis

### **Var, Let, Const**

A var é uma abreviacao de variavel, uma palavra chave para criar uma nova variavel. Todos os nomes de variaveis diferenciam maiusculo por minusculo.

A let sinaliza que uma variavel pode receber um valor diferente, e tambem como var, podemos criar uma variavel sem valor (undefined)

A const sinaliza que a variavel é constante, ou seja, nao muda. Devem receber um valor assim que atribuida.

### **Operadores de atribuicao matematica**

Podemos utilizar operadores de atribuicao matematica em variaveis, 

```jsx
let w = 4;
w = w + 1;
 
console.log(w); // Output: 5
```

Outra maneira é usar operadore de atribuicao matematica w integrados como +=

```jsx
let w = 4;
w += 1;
 
console.log(w); // Output: 5
```

### O operador de incremento e Decremento

++ ou - -

++ ira aumentar ou incrementar o valor da variavel em 1 ou mais(caso escolha mais vezes)

-- ira diminuir ou decrementar o valor da variavel em 1 ou mais (caso escolha mais vezes)

```jsx
let a = 10;
a++;
console.log(a); // Output: 11
```

### Concatenacao de Strings com variaveis

o operador + pode ser usado para combinar dois valores.

```jsx
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'
```

### Interpolacao de String

Podemos inserir ou interpolar variaveis em strings usando literais de modelo ${ }

- deve ser envolvidos por acento grave ``.

```jsx
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```

### Tipo de Operador

comando typeof verifica o tipo de operador

```jsx
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
```

# Declaracoes Condicionais

### If Declaracao

Se o parametro acontecer, faca o bloco de instrucao

```jsx
if (true) {
  console.log('This message will print!'); 
}
```

- A `if()`*bloco de códigoinstrução de bloco*`{}` palavra-chave seguida por um conjunto de parênteses que é seguido por um ou, indicado por um conjunto de chaves.
- Dentro dos parênteses `()truefalse`, é fornecida uma condição avaliada como ou.
- Se a condição for avaliada como `true{}`*será executado*, o código dentro das chaves será executado ou.
- Se a condição for avaliada como `false`, o bloco não será executado.