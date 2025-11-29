const student = {
  name: "Sagar",
  show: function () {
    const logName = () => console.log(this.name);
    logName();
  }
};

student.show();