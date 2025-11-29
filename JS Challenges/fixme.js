const user = {
  name: "Sagar",
  show: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};
user.show();

/* Soultion : 
const user = {
  name: "Sagar",
  show: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
user.show();
*/