### type 和 interface 有什么区别？
1. 几乎所有接口的功能都可以在类型中使用
2. 接口是通过继承的方式来扩展，类型别名是通过 & 来扩展。
3. 接口可以自动合并，而类型别名不行
### type本质
type 运算的本质就是类型别名，将 number 这个基本类型别名为 Second ，但是实际 Second 还是 number 类型，理解了这个你就明白为什么 interface 不具有直接定义基本数据类型的能力了，因为接口从本质上讲就跟类型没有关系

### interface
在面向对象编程的理念中，接口其实可以理解为协议，它约束了一类相似的”东西“都应该具有的属性，当然这些属性既包含静态属性（成员变量）也包含动态属性（方法），有了接口协议的约定，实际的实现类只要按照协议去做各自的实现就好了，

### unknown
  * TS 强制我们在进一步确认 unknown 的类型之前无法对其进行任何操作。
  * 通过 typeof instanceof 以及定义的类型断言等方法可以把 unknown 缩小到执行的类型，从而执行合法的操作。
  * 用之前需要强制通过 as等类型转换后再使用
### overload
```javascript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  // type Combinable = string | number;
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}


function sum(a:number,b:number):number;
function sum(a:string,b:string):string;
function sum(a:string|number,b:string|number){
    if(typeof a === 'string'){
        return a + b;
    } else if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    return ''
}
```
### 访问修饰符
 * private 类内部使用，子类、实例不可访问
 * protected 类内部、派生类可见
