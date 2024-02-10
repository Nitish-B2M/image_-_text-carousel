var data = {
    "carousel": [
        {
            "image": "./photos/IMG20240210110239.jpg",
            "title": "A unknown introvert",
            "text": "Strangers think I’m quiet, my friends think I’m out-going, and only my best friends know I’m completely insane!"
        },
        {
            "image": "./photos/IMG20240210110242.jpg",
            "title": "Just a little bit of everything",
            "text": "I’m not shy, I’m just really good at figuring out who’s worth talking to."
        },
        {
            "image": "./photos/IMG20240210110250.jpg",
            "title": "The introvert’s dilemma",
            "text": "I’m an introvert… I love being by myself, love being outdoors, love taking a long walk with my dogs and looking at the trees, flowers, the sky."
        },
        {
            "image": "./photos/IMG20240210110301.jpg",
            "title": "The introvert’s dilemma",
            "text": "I’m an introvert… I love being by myself, love being outdoors, love taking a long walk with my dogs and looking at the trees, flowers, the sky."
        },
        {
            "image": "./photos/IMG20240210110313.jpg",
            "title": "The introvert’s dilemma",
            "text": "I’m an introvert… I love being by myself, love being outdoors, love taking a long walk with my dogs and looking at the trees, flowers, the sky."
        },
        {
            "image": "./photos/IMG20240210110335.jpg",
            "title": "The introvert’s dilemma",
            "text": "I’m an introvert… I love being by myself, love being outdoors, love taking a long walk with my dogs and looking at the trees, flowers, the sky."
        },
        {
            "image": "./photos/IMG20240210110358.jpg",
            "title": "The introvert’s dilemma",
            "text": "I’m an introvert… I love being by myself, love being outdoors, love taking a long walk with my dogs and looking at the trees, flowers, the sky."
        },
        {
            "image": "./photos/IMG20240210110342.jpg",
            "title": "The introvert’s dilemma",
            "text": "I’m an introvert… I love being by myself, love being outdoors, love taking a long walk with my dogs and looking at the trees, flowers, the sky."
        }
    ]
};

const carousel = document.querySelector('.carousel-items');

for (let i = 0; i < data.carousel.length; i++) {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    var img = document.createElement('img');
    // on click of image, display title and text
    img.onclick = next;
    img.src = data.carousel[i].image;
    img.alt = "image";
    img.height = "310";
    img.width = "240";
    item.appendChild(img);
    var title = document.createElement('input');
    title.classList.add('title');
    title.type = "text";
    title.value = data.carousel[i].title;
    title.style.display = "none";
    item.appendChild(title);

    var text = document.createElement('input');
    text.classList.add('text');
    text.type = "text";
    text.value = data.carousel[i].text;
    text.style.display = "none";
    item.appendChild(text);
    carousel.appendChild(item);
}

function defaultImage() {
    var img = carousel.lastElementChild.querySelector('img');

    var container = document.querySelector('.container');
    container.style.backgroundImage = "url(" + img.src + ")";

    var title = carousel.lastElementChild.querySelector('.title').value;
    var text = carousel.lastElementChild.querySelector('.text').value;

    var titleText = document.querySelector('.title');
    titleText.innerHTML = title;

    var textText = document.querySelector('.text');
    textText.innerHTML = text;
}

defaultImage();

function next() {
    carousel.appendChild(carousel.firstElementChild);

    // fetch next image
    var prevImg = carousel.firstElementChild.querySelector('img');
    var container = document.querySelector('.container');
    container.style.backgroundImage = "url(" + prevImg.src + ")";

    document.querySelector('.title').innerHTML = carousel.firstElementChild.querySelector('.title').value;
    document.querySelector('.text').innerHTML = carousel.firstElementChild.querySelector('.text').value;
}

function prev() {
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);

    // fetch previous image
    var prevImg = carousel.lastElementChild.querySelector('img');
    var container = document.querySelector('.container');
    container.style.backgroundImage = "url(" + prevImg.src + ")";

    document.querySelector('.title').innerHTML = carousel.firstElementChild.querySelector('.title').value;
    document.querySelector('.text').innerHTML = carousel.firstElementChild.querySelector('.text').value;

}
