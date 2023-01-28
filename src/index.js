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

