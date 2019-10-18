---
title: 'Linguagem JavaScript - Exemplos de códigos usando PrismJS'
date: '2019-03-26 11:21:56'
description: JavaScript, frequentemente abreviado como JS, é uma linguagem de script interpretada de alto nível que está em conformidade com a especificação ECMAScript.
category: Javascript
background: '#e58e26'
image: '/assets/img/05.jpg'
---

JavaScript (/ ˈdʒɑːvəˌskrɪpt /), geralmente abreviado como JS, é uma linguagem de script interpretada de alto nível que está em conformidade com a especificação ECMAScript. O JavaScript possui sintaxe entre colchetes, digitação dinâmica, orientação a objetos com base em protótipo e funções de primeira classe.

Hello World:

```JS
console.log("Hello World!");
```

A simple recursive function:

```JS
function factorial(n) {
    if (n === 0)
        return 1; // 0! = 1
    return n * factorial(n - 1);
}

factorial(3); // returns 6
```

Examplo mais avançado:

```JS
/* Finds the lowest common multiple (LCM) of two numbers */
function LCMCalculator(x, y) { // constructor function
    let checkInt = function(x) { // inner function
        if (x % 1 !== 0)
            throw new TypeError(x + "is not an integer"); // var a =  mouseX

        return x;
    };

    this.a = checkInt(x)
    //   semicolons   ^^^^  are optional, a newline is enough
    this.b = checkInt(y);
}
// The prototype of object instances created by a constructor is
// that constructor's "prototype" property.
LCMCalculator.prototype = { // object literal
    constructor: LCMCalculator, // when reassigning a prototype, set the constructor property appropriately
    gcd: function() { // method that calculates the greatest common divisor
        // Euclidean algorithm:
        let a = Math.abs(this.a), b = Math.abs(this.b), t;

        if (a < b) {
            // swap variables
            // t = b; b = a; a = t;
            [a, b] = [b, a]; // swap using destructuring assignment (ES6)
        }

        while (b !== 0) {
            t = b;
            b = a % b;
            a = t;
        }

        // Only need to calculate GCD once, so "redefine" this method.
        // (Actually not redefinition—it's defined on the instance itself,
        // so that this.gcd refers to this "redefinition" instead of LCMCalculator.prototype.gcd.
        // Note that this leads to a wrong result if the LCMCalculator object members "a" and/or "b" are altered afterwards.)
        // Also, 'gcd' === "gcd", this['gcd'] === this.gcd
        this['gcd'] = function() {
            return a;
        };

        return a;
    },

    // Object property names can be specified by strings delimited by double (") or single (') quotes.
    lcm: function() {
        // Variable names do not collide with object properties, e.g., |lcm| is not |this.lcm|.
        // not using |this.a*this.b| to avoid FP precision issues
        let lcm = this.a / this.gcd() * this.b;

        // Only need to calculate lcm once, so "redefine" this method.
        this.lcm = function() {
            return lcm;
        };

        return lcm;
    },

    toString: function() {
        return "LCMCalculator: a = " + this.a + ", b = " + this.b;
    }
};

// Define generic output function; this implementation only works for Web browsers
function output(x) {
    document.body.appendChild(document.createTextNode(x));
    document.body.appendChild(document.createElement('br'));
}

// Note: Array's map() and forEach() are defined in JavaScript 1.6.
// They are used here to demonstrate JavaScript's inherent functional nature.
[
    [25, 55],
    [21, 56],
    [22, 58],
    [28, 56]
].map(function(pair) { // array literal + mapping function
    return new LCMCalculator(pair[0], pair[1]);
}).sort((a, b) => a.lcm() - b.lcm()) // sort with this comparative function; => is a shorthand form of a function, called "arrow function"
    .forEach(printResult);

function printResult(obj) {
    output(obj + ", gcd = " + obj.gcd() + ", lcm = " + obj.lcm());
}
```

Juntamente com HTML e CSS, o JavaScript é uma das principais tecnologias da World Wide Web.
O JavaScript ativa páginas da web interativas e é uma parte essencial dos aplicativos da web. A grande maioria dos sites o utiliza e os principais navegadores da Web possuem um mecanismo JavaScript dedicado para executá-lo.

Como uma linguagem de múltiplos paradigmas, o JavaScript suporta estilos de programação orientados a eventos, funcionais e imperativos (incluindo orientação a objetos e protótipo). Possui APIs para trabalhar com texto, matrizes, datas, expressões regulares e o DOM, mas o próprio idioma não inclui nenhuma E / S, como recursos de rede, armazenamento ou elementos gráficos. Ele se baseia no ambiente host em que está incorporado para fornecer esses recursos.

Inicialmente implementado apenas no lado do cliente em navegadores da Web, os mecanismos JavaScript agora estão incorporados em muitos outros tipos de software host, incluindo o lado do servidor em servidores e bancos de dados da Web e em programas não na Web, como processadores de texto e software PDF, e em tempo de execução ambientes que disponibilizam o JavaScript para gravar aplicativos móveis e de desktop, incluindo widgets de desktop.

Os termos Vanilla JavaScript e Vanilla JS referem-se ao JavaScript não estendido por nenhuma estrutura ou biblioteca adicional. Os scripts escritos em Vanilla JS são um código JavaScript simples.

Embora existam semelhanças entre JavaScript e Java, incluindo nome de idioma, sintaxe e respectivas bibliotecas padrão, os dois idiomas são distintos e diferem bastante no design. O JavaScript foi influenciado por linguagens de programação como Self e Scheme. O formato de serialização JSON, usado para armazenar estruturas de dados em arquivos ou transmiti-los pelas redes, é baseado em JavaScript.

[Wikipedia](https://en.wikipedia.org/wiki/JavaScript)
