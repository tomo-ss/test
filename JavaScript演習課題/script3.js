// 大人と子供の人数を受け取り、合計金額の計算を定義
function kingaku(otona,kodomo){
    // 大人1人500円、子供1人200円で合計金額を計算
    return 500*otona+200*kodomo+"円です。";
}

// Aグループの合計金額を表示
document.write("Aグループは"+kingaku(2,4));
document.write("<br>");
// Bグループの合計金額を表示
document.write("Bグループは"+kingaku(1,5));
document.write("<br>");
// Cグループの合計金額を表示
document.write("Cグループは"+kingaku(3,7));