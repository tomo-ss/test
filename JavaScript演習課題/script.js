// 初期値1。5まで★を1つずつ表示。
document.write("■■■問1■■■");
document.write("<br>");
for(var star = 1; star <= 5; star++) {
    document.write("★");
}
document.write("<br>");

// 初期値1。2行にわたって3まで★を１つずつ表示する。
document.write("■■■問2■■■");
document.write("<br>");
for(var a = 1; a <= 2; a++) {
    for(var star = 1; star <= 3; star++) {
        document.write("★"); 
    }
    document.write("<br>");
}

// 初期値1。2行にわたって5まで☆を１つずつ表示する。
document.write("■■■問3■■■");
document.write("<br>");
for(var a = 1; a <= 2; a++){
    for(var star = 1; star <= 5; star++) {
       document.write("☆");
    }
    document.write("<br>");
}
// 初期値1。4行にわたって5まで★を１つずつ表示する。
document.write("■■■問4■■■");
document.write("<br>");
for(var a= 1; a <= 4; a++){
    for(var star= 1; star <= 5; star++) {
        document.write("★");
    }
    document.write("<br>");
}
// 初期値1。4行にわたって3まで★を１つずつ表示する。
document.write("■■■問5■■■");
document.write("<br>");
for(var a = 1; a <= 4; a++){
    for(var star= 1; star <= 3; star++) {
       document.write("★");
    } 
    document.write("<br>");
}

// 初期値0。3×3で偶数列に★、奇数列に☆を交互に1つずつ表示する。
document.write("■■■問6■■■");
document.write("<br>");
for(var a = 0; a <= 2; a++) {
    for(var star= 0; star <= 2; star++) {
        if(star%2==0) {
            // ココから
            document.write("★");
        } else {
            // ココから
            document.write("☆");
        }
    }
    document.write("<br>");
}

// 初期値0。4×5で偶数列に★、奇数列に☆を交互に1つずつ表示する。
document.write("■■■問7■■■");
document.write("<br>");
for(var a= 0; a <= 3; a++) {
    for(var star= 0; star <= 4; star++) {
        if(star%2==1) {
            document.write("★");
        } else {
            document.write("☆");
        }
    }
    document.write("<br>");
}

// 初期値0。★を階段状に1つずつ増やして表示する。
document.write("■■■問8■■■");
document.write("<br>");
for(var line= 0; line < 5; line++) {
    for(var star= 0; star <= line; star++ ) {
        document.write("★");    
    }
    document.write("<br>");
}