let a = {};
let b = {key: "b"};
let c = {key: "a"};

a[b] = 123;
b[c] = 456;

console.log(a[b]);



let obj1 = { key: "value"};
let obj2 = obj1;  // { key: "value"};
let obj3 = obj2;  // { key: "value"}; 

obj1.key = "new val";   // {new val: value}
obj2 = {key: "another val"}; // { another val: "value"};

console.log(obj1.key, obj2.key, obj3.key); //new val , another , new val


const obj = {
    a: "foo",
    b: function () {
        console.log(this.a);
    },
};

const z = obj.b;
obj.b();
z();