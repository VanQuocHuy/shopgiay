const IMG_WIDTH = -150;
const sileContainer = document.querySelector('.slides')

let index = 0;

document.querySelector('.btn-next').onclick = () => {
    if(index < 4 ) {
        index ++;
        sileContainer.style.transition = '0.5s ease-in'
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
    else {
        index=0;
        sileContainer.style.transition = '0.3s ease-in'
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
}

document.querySelector('.btn-prev').onclick = () => {
    if(index>0) {
        index--;
        sileContainer.style.transition = `0.5s ease-in`;
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
    else {
        index = 4;
        sileContainer.style.transition = `0.3s ease-in`;
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
}

//hover imgs
var items = document.querySelectorAll('.container-row-item>.container-row-item-lightbox')
var item = document.querySelector('.container-row-item-lightbox')

for (let j = 0; j < items.length; j++) {
    items[j].onmouseover = function(e) {
        e.preventDefault();
        
        for (let z = 0; z < items.length; z++) {
            items[z].classList.remove('active')            
        }

        this.classList.add('active')
        
        var imgs = document.querySelectorAll(".active>.container-row-item-colors>img");
        for(let i = 0; i < imgs.length; i++) {
            imgs[i].onmouseover = function(e) {
                e.preventDefault();
                var maining = document.querySelector('.container-row-item-lightbox.active>img');
                maining.src = this.src;  
            }    
        }
    }
}