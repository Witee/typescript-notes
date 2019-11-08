// ts 基本数据类型

// 原始类型
let bool: boolean = true;
let num: number | undefined | null = 123;
let str: string = 'abc';
// str = 123

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '4'];

// 元组
let tuple: [number, string] = [0, '1'];

// 函数
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();

// undefined, null
let un: undefined = undefined;
let nu: null = null;
num = undefined;
num = null;

// void
let nuReturn = () => {};

// any
let x;
x = 1;
x = [];
x = () => {};

// never 永远不会有返回值的类型
let error = () => {
  throw new Error('error');
};
let endless = () => {
  while (true) {}
};
