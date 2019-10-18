---
title: 'Javascript Language - Code examples using PrismJS'
date: '2019-03-26 11:21:56'
description: JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification.
category: Javascript
background: '#e58e26'
image: '/assets/img/05.jpg'
---

JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

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

More advanced example:

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

Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.
JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.

As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities. It relies upon the host environment in which it is embedded to provide these features.

Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets.

The terms Vanilla JavaScript and Vanilla JS refer to JavaScript not extended by any frameworks or additional libraries. Scripts written in Vanilla JS are plain JavaScript code.

Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design. JavaScript was influenced by programming languages such as Self and Scheme. The JSON serialization format, used to store data structures in files or transmit them across networks, is based on JavaScript.

[Wikipedia](https://en.wikipedia.org/wiki/JavaScript)
