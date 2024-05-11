'use strict';
{
    document.addEventListener("DOMContentLoaded", function () {
        const watchButtons = document.querySelectorAll(".watch"); // 「近くで見る」ボタン
        const modal = document.getElementById("modal"); // モーダル要素
        const mask = document.getElementById("mask"); // マスク要素
        const closeButton = modal.querySelector(".close"); // 閉じるボタン

        // モーダル内に画像を挿入するためのimgタグを生成
        const modalImage = document.createElement("img");
        modal.appendChild(modalImage); // モーダルにimgタグを追加

        watchButtons.forEach(button => {
            button.addEventListener("click", function () {
                // ボタンに応じた画像のパスを取得
                const imageNumber = button.classList[1]; // b-1, b-2, ... のクラスを取得
                const image = document.querySelector(`.w-${imageNumber.slice(-1)}[src]`); // 対応する画像を取得

                // モーダルに画像を設定
                modalImage.src = image.src;
                modalImage.alt = image.alt;
                modalImage.classList.add("modal-image");

                // モーダルとマスクを表示
                modal.classList.remove("hidden");
                mask.classList.remove("hidden");
                modal.style.position = "fixed";
            });
        });

        // 閉じるボタンのクリックイベント
        closeButton.addEventListener("click", function () {
            modal.classList.add("hidden");
            mask.classList.add("hidden");
        });

        // マスクをクリックした時もモーダルを閉じる
        mask.addEventListener("click", function () {
            modal.classList.add("hidden");
            mask.classList.add("hidden");
        });
    });


}
