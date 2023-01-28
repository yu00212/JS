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
// const sayHello = (name) => console.log(`こんにちは!${name}さん！`);
// sayHello();

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "又吉"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index}番目は${nameArr[index]}です`); // 0番目は田中です
//     console.log(`${index + 1}番目は${nameArr[index]}です`); // 1番目は田中です
// }

// // nameArrのnameが順番に入って新しい配列として生成される
// // ①returnされた結果に基づいて新しい配列を生成する使い方
// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2); // ["田中", "山田", "又吉"]

// // ②配列をループで処理するだけのやり方もある
// nameArr.map((name) => console.log(name));

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`)); // 1番目は田中です

// // filter:return文に書いた条件式に当てはまる値を新しく取得できる
// // 配列の中にある値に対してある条件に当てはまる値だけを取り出したい時に使える
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr); // [1, 3, 5]

// const newNameArr = nameArr.map((name) => {
//     if (name === "又吉") {
//         return name
//     } else {
//         return `${name}さん`
//     }
// })
// console.log(newNameArr); // ["田中さん", "山田さん", "又吉"]

/**
 * 三項演算子
 */
// ある条件？　条件がtrueの時：条件がfalseの時
const val1 = 1 > 0 ? 'trueです' : 'falseです';
console.log(val1); // falseです

// 数値に対してのみ3桁区切りにしてくれる
const num = 1300;
console.log(num.toLocaleString()); // 1,300

const num1 = "1300";
const formattedNum = typeof num1 === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum); //  数値を入力してください

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
}
console.log(checkSum(50, 40)); // 許容範囲内です




