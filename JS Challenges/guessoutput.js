const obj = {
  value: 10,
  getVal: function() {
    return this.value;
  }
};

const getValue = obj.getVal;
console.log(getValue());


/*

Key Concept: “Method loses its this when extracted.”

obj.getVal is a method, so when you call obj.getVal(),
→ this refers to obj.

But when you assign:

const getValue = obj.getVal;


You are copying the function, not the object reference.

*/