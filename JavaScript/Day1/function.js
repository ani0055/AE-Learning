var x = 1

a()
b()
console.log(x)

function a(){
    var x = 36
    console.log(x) // This x will be the local x in the a's context execution
}

function b(){
    var x = 81
    console.log(x)
}

/* 
             JAVASCRIPT STARTS
                    │
                    ▼
        ┌──────────────────────┐
        │ Global Execution     │
        │ Context created      │
        └──────────────────────┘
                    │
                    ▼
             Creation Phase
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      x → undefined
      a → function
      b → function
                    │
                    ▼
             Execution Phase
                    │
                    ▼
              var x = 1
                    │
                    ▼
                x → 1
                    │
                    ▼
                  a()
                    │
                    ▼
        ┌──────────────────────┐
        │ a() Execution        │
        │ Context              │
        ├──────────────────────┤
        │ x → undefined        │
        │ x → 36               │
        │ console.log(x)       │
        └──────────────────────┘
                    │
                    ▼
                   36
                    │
                    ▼
             a() destroyed
                    │
                    ▼
                  b()
                    │
                    ▼
        ┌──────────────────────┐
        │ b() Execution        │
        │ Context              │
        ├──────────────────────┤
        │ x → undefined        │
        │ x → 81               │
        │ console.log(x)       │
        └──────────────────────┘
                    │
                    ▼
                   81
                    │
                    ▼
             b() destroyed
                    │
                    ▼
             console.log(x)
                    │
                    ▼
              Global x = 1
                    │
                    ▼
                    1
*/