'use strict';

{
    // ランダム画像
    document.querySelector("#rundom").addEventListener("click", () => {
        const pic1 = document.querySelector(".good");
        const pic2 = document.querySelector(".tooth");
        const pic3 = document.querySelector(".battle");
        const pic4 = document.querySelector(".punch");
        const pic5 = document.querySelector(".betabeta");

        for (let i = 0; i < 1; i++) {
            const n = Math.floor(Math.random() * 100) + 1;
            console.log(n);
            if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5 ||
                n === 6 || n === 7 || n === 8 || n === 9 || n === 10 ||
                n === 41 || n === 42 || n === 43 || n === 44 || n === 45 ||
                n === 46 || n === 47 || n === 48 || n === 49 || n === 50 ||
                n === 81 || n === 82 || n === 83 || n === 84 || n === 85) {
                pic1.style.display = "block";
                pic2.style.display = "none";
                pic3.style.display = "none";
                pic4.style.display = "none";
                pic5.style.display = "none";
            } else if (n === 11 || n === 12 || n === 13 || n === 14 || n === 15 ||
                n === 16 || n === 17 || n === 18 || n === 19 || n === 20 ||
                n === 51 || n === 52 || n === 53 || n === 54 || n === 55 ||
                n === 56 || n === 57 || n === 58 || n === 59 || n === 60 ||
                n === 86 || n === 87 || n === 88 || n === 89 || n === 90) {
                pic1.style.display = "none";
                pic2.style.display = "block";
                pic3.style.display = "none";
                pic4.style.display = "none";
                pic5.style.display = "none";
            } else if (n === 21 || n === 22 || n === 23 || n === 24 || n === 25 ||
                n === 26 || n === 27 || n === 28 || n === 29 || n === 30 ||
                n === 61 || n === 62 || n === 63 || n === 64 || n === 65 ||
                n === 66 || n === 67 || n === 68 || n === 69 || n === 70 ||
                n === 91 || n === 92 || n === 93 || n === 94 || n === 95) {
                pic1.style.display = "none";
                pic2.style.display = "none";
                pic3.style.display = "block";
                pic4.style.display = "none";
                pic5.style.display = "none";
            } else if (n === 31 || n === 32 || n === 33 || n === 34 || n === 35 ||
                n === 36 || n === 37 || n === 38 || n === 39 || n === 40 ||
                n === 71 || n === 72 || n === 73 || n === 74 || n === 75 ||
                n === 76 || n === 77 || n === 78 || n === 79 || n === 80
                || n === 96 || n === 97 || n === 98 || n === 99) {
                pic1.style.display = "none";
                pic2.style.display = "none";
                pic3.style.display = "none";
                pic4.style.display = "block";
                pic5.style.display = "none";
            } else {
                pic1.style.display = "none";
                pic2.style.display = "none";
                pic3.style.display = "none";
                pic4.style.display = "none";
                pic5.style.display = "block";
                alert("おめでとう!あなたは100分の1を引き当てました!次に表示される画像はべたべたわたなべです！")
            }
        }
    });

}

