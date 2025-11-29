const obj = {
    name : "sagar"
}

function greet(msg) {
  console.log(msg + " " + this.name);
}

greet.call(obj, "Hello");
greet.apply(obj, ["Hello"]);
const greetsagar = greet.bind(obj);
greetsagar("hello");