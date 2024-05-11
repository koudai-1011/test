'use strict';

{
    // 要素を取得
    const targets = document.querySelectorAll('.fuwa');

    // IntersectionObserver のオプション設定
    const options = {
        threshold: 1,
    };

    // IntersectionObserver のインスタンスを作成
    const observer = new IntersectionObserver((entries) => {
        // 各要素について処理を行う
        entries.forEach((entry) => {
            console.log(entry);

            // 要素が画面内に表示されたら `appear` クラスを追加
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        });
    });

    // 各要素に対して IntersectionObserver を実行 忘れてた
    targets.forEach((target) => {
        observer.observe(target);
    });
}
