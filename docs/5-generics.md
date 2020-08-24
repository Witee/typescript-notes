## 泛型函数

```ts
// 常规泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string[]>(['a', 'b']);
log(['a', 'b']); // 利用类型推断

// 常规泛型函数的类型别名形式
// 格式相似, 只是把函数名称去掉
type Log = <T>(value: T) => T;
let myLog: Log = log;
```

## 泛型接口

```ts
// 定义泛型接口时, 如果没有指定默认类型, 则在使用时需要指定类型
interface Log<T> {
  (value: T): T;
}

// 在使用泛型接口时需要指定类型 Log<string>
let myLog: Log<string> = (v: string) => {
  return v;
};
```

使用默认类型

```ts
// 指定了默认类型, 则使用时可不指定
interface Log<T = string> {
  (value: T): T;
}

// 在使用泛型接口时可以使用默认类型
let myLog: Log = (v) => {
  return v;
};

myLog('a');
```

## 泛型类

```ts
// 基本使用
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

// 不能约束类的静态成员
class Log1<T> {
  static run(value: T) {
    console.log(value);
    return value;
  }
}
```

指定与不指定类型时的使用

```ts
// 基本使用
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

// 指定类型时
let log1 = new Log<number>();
log1.run(1);

// 不指定类型时, 可以为任意类型
let log2 = new Log();
log2.run({ a: 1 });
```

## 泛型约束

```ts
interface Length {
  length: number;
}
function log<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

// log(1); // 传入的参数必须有 length 属性
log([1]);
log({ length: 1 });
```
