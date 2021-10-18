const mem1 = {
    name: 'mem1',
    imgSrc: 'assets/images/1.jpg',
    text : 'Find motivation, or one day it will find you.'
}

const mem2 = {
    name: 'mem2',
    imgSrc: "assets/images/2.jpg",
    text: 'Do not limit yourself.'
}

const mem3 = {
    name: 'mem3',
    imgSrc: "assets/images/3.jpg",
    text: 'Beleive in yourself.'
}

const mem4 = {
    name: 'mem4',
    imgSrc: "assets/images/4.jpg",
    text: 'Try to do a little bit more every day.'
}

const mem5 = {
    name: 'mem5',
    imgSrc: "assets/images/5.jpg",
    text: 'Stay strong and u can do it.'
}

const pages = document.querySelector('.pagination-container');

pages.onclick = function showMem(event) {
    let target = event.target;
    chooseMem(target);
} 

function chooseMem(element)  {
    const memes = [mem1, mem2, mem3, mem4, mem5];
    let mem = memes.find(el => el.name === 'mem' + element.id);
    let image = document.querySelector(".meme");
    let message = document.querySelector(".text");
    image.src = mem.imgSrc;
    message.textContent = mem.text;
};

