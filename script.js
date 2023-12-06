"use strict";

const shareBtn = document.querySelector('.share');
const shareIco = document.querySelector('.share-icons');

shareBtn.addEventListener('click', () => {
    shareIco.classList.toggle('hidden');
});