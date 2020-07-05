console.log("我是 JS!!")

// DOM 文件物件模式
// 文件.透過 ID 搜尋元素("元素ID 名稱").插入 HTML ="文字訊息",
document.getElementById("box1").innerHTML = "哈嘍~~";

// 變數 variable
// 用於儲存資料
// 資料類型
var a = 10;            // 整數
var b = 1.5;           // 浮點數
var c = "文字";        // 字串
var d = true;          // 布林值 true 是 false 否

console.log(a);

// 運算子
// 數學 加減乘除餘 + - * / %

// 城市內的 = 指定符號
// = 右邊先執行再指定給左邊
a = a % 3;

console.log(a);

// HTML5，CSS3，JS ES6
// ++ 遞增1 --遞減1
var e = 7;
e++;
console.log(e);

// ES6 指數符號 **

var f = 5;
f = f**3
console.log(f);

// 指定運算子，適用於+ - * / % **
var num1 =10;
// num1 = num1 + 5
num1 **= 5;
console.log("指定運算子"+ num1);

// 自訂函式(方式) function、method
// 語法 :
// 函式 函式名稱(參數1，參數2，....) { 程式內容 }
function functionA() {
    console.log("我是函式 A");
}
// 需要呼叫才會執行 functionA 是函式名字
functionA();

function addTen (number) {

    number +=10;

    console.log("加十" + number)
    
}

addTen(7);
addTen(100);

function mul(a, b){
    console.log("數字相乘的結果" + (a * b));
}

mul(999, 7)
mul(155, 10)

// 物件 {物件資料名稱 : 物件資料值}
var car = {
    brand: "BMW",
    cc : 2000,
    color: "gold",
    drive: function() {
        console.log("開車中...")
    }
}

console.log("汽車的牌子:" + car.brand)

car.drive();

// 練習事件

var box2 =document.getElementById("box2");

box2.onclick = () => {
    console.log("滑入!");
}

box2.onmouseenter = () => {
    console.log("滑入!");
}

box2.onmouseleave= () => {
    console.log("滑出!");
}

//  陣列 Array

var numberA = 10;
var numberB = 100;
var numberC = 50;

var numberObject = {
    A: 10,
    B: 100,
    C: 50,
}

// 陣列資料[陣列的編碼 第一筆是從0開始計算]
var numbers = [10, 100, 40, 9]

console.log("陣列第三筆資料:" + numbers[2]);

numbers[0] =999;

console.log("陣列第一筆資料:" + numbers[0]);

console.log("陣列的數量:" + numbers.length); 

// 比較運算子 > < >= <= == !=
var testA = 100;
var testB = 50;

console.log(testA != testB);

//  == 與 === 的差異
var testC = 7;
var testD = "7";

console.log("== 的結果:" +(testC == testD));  //比較值
console.log("=== 的結果:" + (testC === testD));  //比較值與類型

// == 與 === 的差異(練習2)

var test1 = 8;
var test2 = "8";

console.log(test1 == test2);
console.log(test1 === test2)
console.log(test1 != test2)
console.log(test1 > test2)

// 邏輯運算子
var testE = true;

console.log("顛倒:" + !testE);

//  並且&&
// 只要有一個 false 結果就是 false
console.log(true && true)   //true
console.log(true && false)  //false
console.log(false && true)  //false
console.log(false && false) //false

// 或者 ||
// 只要有一個 true 結果就是 true
console.log(true || true)     //true
console.log(true || false)    //true
console.log(false || true)    //true
console.log(false || false)   //false

