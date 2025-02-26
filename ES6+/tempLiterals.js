// Template Literals (``) - used for string interpolation.

const obj = {
  name: "aish",
  age: 25,
  price: 44,
  funcObj: function () {
    const func = () => {
       // Template Literals (``)
      console.log(
        `Hello ${this.name}, happy ${this.age}, This is the total amount $${this.price}.`
      );
    };
    func();
  },
};

obj.funcObj();
