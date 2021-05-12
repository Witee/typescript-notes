# interface

## 对象类型接口

```ts
interface List {
  id: number;
  name: string;
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
  });
}

// 增加 sex 可以通过类型检查
let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' },
  ],
};

render(result);
```

如果直接传入对象字面量, ts 则会对额外的字段进行类型检查

```ts
render({
  data: [
    { id: 1, name: 'A', sex: 'male' }, // sex: "male" 处会报错
    { id: 2, name: 'B' },
  ],
});
```

绕过类型检查的方法有三种

1. 将值赋值给一个变量(上面的方法)
2. 增加类型断言

```ts
render({
  data: [
    { id: 1, name: 'A', sex: 'male' }, // sex: "male" 处会报错
    { id: 2, name: 'B' },
  ],
} as Result);

// 等价于, 但不推荐, 因为在 react 中有歧义
render(<Result>{
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' },
  ],
});
```

3. 使用字符串索引签名, 使 list 可以支持多个属性

```ts
interface List {
  id: number;
  name: string;
  [x: string]: any; // 使用任意的字符串去索引 list, 可以得到任意结果
}
```
