let createSlideImage = (el,index) => {
    if(!el.querySelector('IMG')){
        let dataImg = el.getAttribute("data-img");
        let slideImage = document.createElement("img");
        slideImage.src = dataImg;
        slideImage.setAttribute("id","slide-image-" + index);
        el.appendChild(slideImage);
    };
};


//ex: createSlideImage(slides[0],0);

