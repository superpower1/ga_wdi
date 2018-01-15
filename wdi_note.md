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
15. `string.end_with?('?')`  checks the last character of the string if it is '?'
16. `string.include?('?')` checks if '?' exsist in the string
17. `string.chomp` returns a new string with the given record separator removed from the end (if present)
18. `string.strip` returns a copy of string with leading and trailing whitespace removed
19. `string.to_sym` converts string to symbol
20. `array.shuffle` randomize the contents of array
21. `array.min` returns the minimum number of the array
22.  `array.select` returns a new array containing all elements of the array for which given block returns true

p, puts, print
puts will convert things to string, p (short for print) will print out details

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

### Sinatra
* `gem install sinatra`
.erb stands for embeded ruby (HTML)
<% some ruby code which do not need to output strings %>
<%= some ruby code with output strings %>
* `gem install sinatra-reloader` and put `require 'sinatra/reloader'` in server.rb
* query strings
some_url?num=0&name="me"
* `gem install sinatra_genertator`
To create an sinatra app `sinatra new name_of_project -va`
To start the server `ruby main.rb`
In views folder we can create layout.erb as a template, sinatra will automatically look for layout.erb, if we don't want the layout in a particular page, in main.rb
* `gem install httparty` let you pass url and make request in ruby
*  Get current route in Sinatra
```
request.path_info   # => '/hello-world'
request.fullpath    # => '/hello-world?foo=bar'
request.url         # => 'http://example.com/hello-world?foo=bar'
```

### Git
1. `git checkout filename` to roll back any unstaged(git add but not commit) changes of file
2. `git reset HEAD filename` to roll back any commited changes

### Class in Ruby
* Class name in ruby should be Camel case starts with Capital
* @instance_variable
* @@class_variable

### PostgreSQL
* Support slash command and SQL command
* `\l` to list all the databases
* `\c database_name` to connect to database
* `\?` to see all the slash command
* `\dt` stands for 'describe table' to show all the tables
* `\q` to quit the CLI
* Create table
```
CREATE TABLE contacts (
id SERIAL PRIMARY KEY,
email VARCHAR(255)
);
```
* Go into the database directly from terminal, `psql database_name` (You should have your database created already)
* Install PG `gem install pg` to allow you get data from database (PG is a gem design for using PostgreSQL)
use `conn = PG.connect(dbname: 'database_name')` to connect
use `result = conn.exec("SQL QUERY")` will return a hash
* `$ psql -d library < seed.sql` to automatically run all the sql command in the file

### Http Method
* get is a method for getting data from server (Should not have any side effect on server side)
* post is a method to make changes to server data

### Object relational mapping (ORM)
Each table is an class and each record is a object
* `gem install activerecord` and in ruby file `require 'active_record'`
1. Create 'models' folder and create a ruby file that match the name of your table
2. In the ruby file
```
class Dishes < ActiveRecord::Base
end
```
3. In the main ruby file
```
require 'active_record'
require_relative 'models/dishes'

options = {
adapter: 'postgresql',
database: 'database_name',
username: 'superpower1'
}

ActiveRecord::Base.establish_connection(options)
```
4. ActiveRecord methods:
    * `ClassName.first` returns the first object (record)
    * `ClassName.count` returns the number of records
    * Add a new record to database
        `d1 = ClassName.new` create a new object
        `d1.name = some_name`
        `d1.save` save the new record to database
        OR `ClassName.create(name:'some_name')`
    * Delete a record
        `d1 = ClassName.last`
        `d1.delete`
    * Reading from database
        `ClassName.find(id)` find record by id
        `ClassName.find_by(name: 'some_name')` find a singel record by name (returns a single object)
        `ClassName.all` returns an array of all objects
    * Translate to sql command
        `ClassName.any_method.to_sql`
