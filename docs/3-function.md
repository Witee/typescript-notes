# function

## 函数定义

#### 可选属性

```ts
interface List {
  id: number;
  name: string;
  age?: number;
}
```

#### 只读属性

```ts
interface List {
  readonly id: number;
  name: string;
  age?: number;
}
```

#### 当不确定一个接口中有多少个接口时, 可以使用 "可索引类型接口"

支持 数字 或 字符串 类型的索引

- 数字

```ts
interface StringArray {
  [i: number]: string;
}

let chars: StringArray = ['a', 'b', 'c'];
```

- 字符串 及 混合

```ts
interface Names {
  [x: string]: string;
  // y: number;
  [z: number]: string;
}
```

## 函数类型接口

#### 定义函数类型

```ts
// 1. 实现函数时直接定义
function add(x: number, y: number) {
  return x + y;
}
// 或只声明
function add(x: number, y: number): number;

// 2. 变量定义函数
let add: (x: number, y: number) => number;

// 3. 接口定义函数
interface Add1 {
  (x: number, y: number): number;
}

// 4. 类型别名定义函数
type Add2 = (x: number, y: number) => number;
```

除第 1 种外, 其它 3 种并未实现函数

#### 混合接口定义类库

```ts
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {};

  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();

let lib2 = getLib();
```

#### 函数可选参数

可选参数必须位于必选参数之后

```ts
function add5(x: number, y?: number) {
  return y ? x + y : x;
}

add5(1);
```

#### 函数默认参数

```ts
function add6(x: number, y = 0, z: number, q = 0) {
  return x + y + z + q;
}
add6(1, undefined, 3);
```

`y` 位于 必选参数 `z` 之前, 所以必须传递 `undefined` 才能使用默认值

#### 函数可变参数

```ts
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
add7(1, 2, 3, 4, 5);
```

#### 函数重载

定义: 函数名称相同, 但函数参数个数或参数类型不同

好处: 不需要为相似功能的函数选用不同的函数名称, 增强可读性

ts 的函数重载要求先定义一系列函数声明

```ts
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  let first = rest[0];

  if (typeof first === 'string') return rest.join('');

  if (typeof first === 'number') return rest.reduce((pre, cur) => pre + cur);

  return rest;
}

console.log(add8(1, 2, 3)); // 6
console.log(add8('a', 'b', 'c')); // abc
// console.log(add8(true)); // No overload matches this call.
```

函数重载需要在类型最宽泛的版本中实现重载, 所以 `add8(...rest: any[]): any`
