hash = {
  title: 'Mr',
  author: 'noname',
  release: 1990
}
# => {:title=>"Mr", :author=>"noname", :release=>1990}
# To create hash in this way, all the keys will be symbol (start with ':')
# We use symbol as the key is because key is unique and only take up a single place in memory.
# If we use 'title' string or any other objects as the key, then every key will take up a place in memory.
