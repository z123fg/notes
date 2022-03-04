function foo() {
    console.log("Hello World2");
    let a: string;
    let b: boolean;
    b = true;
    //b="123"
    let c: number;
    c = 123;
    //c = "123" 
    let d: any;
    d = "123";
    d = true;
    d = 123;
    let f: string[];
    f = ["1", "2"];
    //f = [1,2]
    let g: any[];
    g = [1, "1"];
    //tuple
    let h: [string, number];
    h = ["1", 1];
    //h=["1",1,2]
    //h = [1,"1"]
    //let i: unknown;
    //i = "1" ;
    /* function fn(num: number):string {
        return num
    } */

    //const fn = (num:number):number => num;

    type Fntype = (num: number) => number;
    const fn: Fntype = (num) => num;
    let result: number;
    result = fn(123);

    //undefined
    let j = {};
    type Fn2Type = () => undefined
    const fn2: Fn2Type = () => {
        return undefined
    }

    type Fn3Type = () => null;
    const fn3: Fn3Type = () => {
        return undefined
    }

    //interface
    interface Person {
        name?: string;
        age: number;
        eat: (food: string) => void;
    }
    const person: Person = {
        eat: (food) => { console.log("eating") },
        age: 8
    }

    type Person2 = { name?: string, age: number, eat: (food: string) => void }
    const person2: Person2 = {
        eat: (food) => { console.log("eating") },
        age: 8
    }

    class Person3 {
        age: 8;
        eat(food: string) {
            console.log("eating")
        }

    }



    class Person4 extends Person3 {

    }

    const person4 = new Person4();
    console.log(person4.eat)


    interface Human {
        race: string
    }

    type People = Human & Person;

    const people: People = {
        age: 8,
        race: "asian",
        eat: (food) => { }

    }

    type Fn4 = (cb: (arg: string) => void) => void

    const fn4: Fn4 = (cb) => {
        cb("1");
    }

    const enum PrintMedia {
        Newspaper,
        Newsletter,
        Magazine,
        Book
    };

    console.log(PrintMedia.Newspaper, PrintMedia.Newsletter)
    let printMedia: PrintMedia;
    printMedia = PrintMedia.Newsletter

    /* type PrintMedia = "NewsPaper" | "Newsletter" | "Magazine" | "Book";

    let printMedia: PrintMedia;
    printMedia = "NewsPaper" */

    // function toArray<T, R>(x: T, y: R): [T, R, T, R] {
    //     return [x, y, x, y];
    // }
    // console.log(toArray<number, number>(4, 5));
    // console.log(toArray<string, string>("1", "2"));
    // console.log(toArray<number, string>(1, "2"));
    // interface Queue<T> {
    //     enqueue(item: T): void;
    //     dequeue(): T;
    //     getqueue(): T[];
    // }
    // class MyQueue<T> implements Queue<T> {
    //     queue: T[];
    //     constructor(queue: T[]) {
    //         this.queue = queue;
    //     }
    //     enqueue(item: T): void {}
    //     dequeue(): T {
    //         return;
    //     }
    //     getqueue(): T[] {
    //         return;
    //     }
    // }



}

foo()

