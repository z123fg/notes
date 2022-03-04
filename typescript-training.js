function foo() {
    console.log("Hello World2");
    let a;
    let b;
    b = true;
    let c;
    c = 123;
    let d;
    d = "123";
    d = true;
    d = 123;
    let f;
    f = ["1", "2"];
    let g;
    g = [1, "1"];
    let h;
    h = ["1", 1];
    const fn = (num) => num;
    let result;
    result = fn(123);
    let j = {};
    const fn2 = () => {
        return undefined;
    };
    const fn3 = () => {
        return undefined;
    };
    const person = {
        eat: (food) => { console.log("eating"); },
        age: 8
    };
    const person2 = {
        eat: (food) => { console.log("eating"); },
        age: 8
    };
    class Person3 {
        eat(food) {
            console.log("eating");
        }
    }
    class Person4 extends Person3 {
    }
    const person4 = new Person4();
    console.log(person4.eat);
    const people = {
        age: 8,
        race: "asian",
        eat: (food) => { }
    };
    const fn4 = (cb) => {
        cb("1");
    };
    ;
    console.log(0, 1);
    let printMedia;
    printMedia = 1;
}
foo();
//# sourceMappingURL=typescript-training.js.map