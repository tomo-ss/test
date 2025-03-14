// 定数PIを定義（円周率）
const PI=3.14;

// 半径を受け取り、円の面積の計算を定義
function menseki(hankei) {
    // 面積を計算
    return "面積は" + hankei * hankei * PI + " です。 ";
}
// 半径5cmの円の面積結果を表示
document.write(menseki(5));
document.write("<br>");
// 半径7cmの円の面積結果を表示
document.write(menseki(7));
document.write("<br>");
// 半径10cmの円の面積結果を表示
document.write(menseki(10));