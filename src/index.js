/**
 * const, let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);


// letは上書き可能だが、再宣言ができない

// let = val2 = "let変数";
// val2 = "上書き";
// console.log(val2);
// let = val2 = "再宣言";

// constはどちらもできない
// const val3 = "上書きも再宣言もできない";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "ジャケ",
//     age: 28,
// };
// val4.name = "jak";
// val4.adress = "Fukushima";
// console.log(val4);

// constで定義したオブジェクトは配列の変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey"); 
// consokle.log(val5); // ["bird", "cat", "monkey"]

/**
 * テンプレート文字列
 */

// const name = "ジャケ";
// const age = 28;

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`

/**
 * アロー関数
 */
// 従来の関数
// function fun1(str){
//     return str;
// }

// const func1 = function(str) {
//     return str;
// }
// console.log(func1("func1です"));

// アロー関数 処理が1行の場合returnを省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//     return num1 + num2;
// }
// 以下でもOK
// const func4 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分解代入
 */
// const myProfile = {
//     name: "ジャケ",
//     age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile1 = ['ジャケ', 28];

// const message3 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}歳です。`;

// const { name, age } = myProfile1;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;

/**
 * デフォルト値、引数など
 */
// (name = 'ゲスト')でゲスト値を設定、関数呼び出しの引数で上書き設定可能
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは!${name}さん！`);
// sayHello("ジャケ");

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1); // [1, 2]　配列
console.log(...arr1); // 1 2 配列ではなく、実際の１と２として表示される

const sumFunc = (num1, num2) => console.log(num1 + num2); // 3
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1); // 3 順番に処理する

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [3, 4, 5]

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6); // [100, 20]
console.log(arr4); // [10, 20]

const arr7 = [...arr4, ...arr5];
console.log(arr7); // [10, 20, 30, 40]

// =でコピーしてしまうと同じとこを参照するので、参照元の配列も影響でてしまう
const arr8 = arr4;
console.log(arr8); // [10, 20]
arr8[0] = 100; // [100, 20]
console.log(arr4); // [100, 20]
