// Brandon Eich created the JS engine spiderMonkey whioch is used in firefox
// 
/*
the Engin executes the code as:
code -> parsing(converts the code into AST[abstract syntax tree]) -> compilation -> execution

JIT (just in time) compiler
initially the JS was Interpreter language
now it depends on the browser what to use(interpret or compile) that is JIT

In execution we have callSatck and MemoryHeap(in sync with the garbage collector(Uses mark and swipe algo for collection) and callstack)

*/