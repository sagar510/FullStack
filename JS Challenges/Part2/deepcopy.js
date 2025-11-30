function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    result[key] = deepCopy(obj[key]);
  }

  return result;
}

const orginal = {
    1 : 2,
    3 : 4,
    5 : [6, 7, 8] 
}

const copy = deepCopy(orginal);
console.log(copy);