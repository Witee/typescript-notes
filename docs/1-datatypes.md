# TS 基本数据类型

### 原始类型

```ts
let bool: boolean = true;
let num: number | undefined | null = 123;
let str: string = 'abc';
str = 123;
```

### 数组

```ts
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '4'];
```

### 元组

```ts
let tuple: [number, string] = [0, '1'];
```

### 函数

```ts
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;
```

### 对象

```ts
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;
```

### symbol

```ts
let s1: symbol = Symbol();
let s2 = Symbol();
```

### undefined, null

```ts
let un: undefined = undefined;
let nu: null = null;
num = undefined;
num = null;
```

### void

```ts
let nuReturn = () => {};
```

### any

```ts
let x;
x = 1;
x = [];
x = () => {};
```

### never 永远不会有返回值的类型

```ts
let error = () => {
  throw new Error('error');
};
let endless = () => {
  while (true) {}
};
```

### 数字枚举

```ts
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
```

### 字符串枚举

```ts
enum Message {
  Success = '恭喜你, 成功了',
  Fail = '抱歉, 失败了',
}
```

### 异构枚举

```ts
enum Answer {
  N,
  Y = 'yes',
}
```

### 枚举成员分为 常量枚举, 需要被计算枚举成员

```ts
// 常量枚举 会在编译阶段计算出结果, 会以常量形式出现在运行时
// 需要被计算枚举成员, 不会在编辑阶段计算, 在运行阶段计算
enum Char {
  a, // 没有初始值的常量枚举\
  b = Char.a, // 对已有值线上引用的常量枚举
  c = 1 + 3, // 常量表达式的常量枚举
  d = Math.random(),
  e = '123'.length,
}
```

### 常量枚举

```ts
// 在编译阶段会被移除, 当不需要常量, 只需要常量值时使用
const enum Month {
  Jan,
  Feb,
  Mar,
}
let month = [Month.Jan, Month.Feb, Month.Mar];
```

### 枚举类型, 当作类型使用

```ts
enum E {
  a,
  b,
}
enum F {
  a = 0,
  b = 1,
}

enum G {
  a = 'apple',
  b = 'banana',
}
let e: E = 3;
let f: F = 3;
// e === f 不同类型枚举不能进行比较

let e1: E.a = 1;
let e2: E.b;
// e1 === e2
let e3: E.a = 1;
e1 === e3;

let g1: G = G.b;
let g2: G.a = G.a;
```
