// console.log(+true);

// let s = '10';
// console.log(typeof(+s));

let person = {
    name: 'John',
    test: function () {
      return '25';
    },
    demo: function () {
        let name = 'santosh';
      console.log(name);
        return '30';
    },
  };

let n = +person.test()
console.log(n);
console.log(typeof(n));
