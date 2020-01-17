// JavaScript基本语法展示
var x;  // 声明一个变量

x = 0;  // 为变量 x 赋值
console.log('x: ', x)   // 输出变量的值

// JavaScript数据类型示例

// 1、数字类型
x = 1;
x = 0.01;

// 2、字符串类型
x = 'Hello World';
x = "JavaScript";

// 3、布尔类型
x = true;
x = false;

// 4、特殊值
x = undefined;
x = null;

// 5、对象
// 对象是由键值对组成的集合， 使用 {} 括起来
var user = {
    name: 'JavaScript',
    age: 15,
    type: 'FE',
};

// 通过 「.」或者 「[]」来获取对象属性值，或者给对象添加新的属性值
var name = user.name;
var age = user[age];
user.brith = '1996';
user['grade'] = 98;
console.log('user: ', user)

// 6、数组
// 数组通过索引取值， 索引从 0 开始
var emptyArray = [];     // 创建一个空数组
var array = [1, 3, 5, 7, 9];
console.log('array: ', array, array.length)
console.log('array ele: ', array[0], array[1], array[5])

// 数组和对象中都可以包含另一个数组或对象

// 7、函数示例
function Point(x, y) {
    this.x = x;
    this.y = y;
}
var p = new Point(3, 4);
// 
Point.prototype.run = function () {
    return Math.sqrt(
        this.x * this.x + this.y * this.y
    );
}
console.log('p.run: ', p.run())