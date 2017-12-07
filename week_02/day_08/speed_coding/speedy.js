console.log("hello");

let favorDish = {
  title: "Steam Egg",
  serving: 2,
  ingredients: [
    "egg",
    "water",
    "soy sauce"
  ]
};

let favorBooks = [
  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    isRead: false
  },
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
    isRead: true
  }
];

for (var i = 0; i < favorBooks.length; i++) {
  if (favorBooks[i].isRead) {
    console.log(`You have already read ${favorBooks[i].name} by ${favorBooks[i].author}`);
  } else {
    console.log(`You haven't read ${favorBooks[i].name} by ${favorBooks[i].author}`);
  }
}

let favorMovie = {
  title: "Matrix",
  duration: 125,
  stars: [
    "a",
    "b",
    "c",
    "d"
  ]
}

const printMovie = (favorMovie) => {
  console.log(`${favorMovie.title} lasts for ${favorMovie.duration} minutes. Stars: ${favorMovie.stars.join(", ")}`);
}

printMovie(favorMovie);
