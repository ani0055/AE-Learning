function greet(name: String): String{ // Means we want input to be string and output to be string
    return `Hello ${name}`;
}

console.log(greet("Animesh"));
// console.log(greet(42));

// TypeScript includes Types(Data Types) which JS lack's

// Problems in JS:                // Pros of TS
// Freedom                        // TypeScript never runs it needs Process after the process we get JS
// Loose Docs                     // Typed Checker
// Developer Tooling              // Consistency


// Working
// TS Code --> lexer(Tokenization) --> parser(Build AST) --> Binder(Makes Special Symbol Tables, Parent Pointers, Flow Nodes) --> Checker(Strict Checking of Syntax) --> Emitter(Generate File like .js) --> .js, .d.ts, .map