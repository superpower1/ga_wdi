### Primitives
1. null
2. undefined
3. boolean
4. number
5. string
6. symbol (ES6)

### Server
1. Start the built-in python server (Linux and Mac)
```
$ python -m SimpleHTTPServer
```

### DOM
dir(DOM object) prints out the object

### Consistency of css naming
use dash, for example: div-container

### Ruby basic code
1. `number.to_s`
2. `string.to_i`
3. `arr.join('')`
4. `number.odd?`
5. `number.even?`
6. `rand(n)` returns an integer between 0(inclusive) and n(exclusive)
7. `rand(n..m)` returns an integer between n(inclusive) and m(inclusive)
8. `array.sample` returns a random item in the array
9. `array.first` returns the first element
10. `array.last` returns the last element
11. `string.sub(' ', '-')` replaces the first space with dash
12. `string.gsub(' ', '-')` replaces all spaces with dash
13. `string.downcase` changes all the letters to lower case
14. `string.upcase` changes all the letters to upper case

### Pry
repl stands for Read-Eval-Print Loop which means a eviroment that you can type in commands and see the result (like irb and pry for ruby and browser console for js)
pry is a colorful ruby console (irb)
```
require 'pry'
...some code
binding.pry
...some code
```
Allows you to pulse the program in the binding line, use `exit` to continue the program, if there are multiple bindings then the program will stop again at the next binding line
