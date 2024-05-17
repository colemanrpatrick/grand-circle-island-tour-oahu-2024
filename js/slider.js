let createSlideImage = (el) => {
    if(!el.querySelector('IMG')){
        let dataImg = el.getAttribute("data-img");
        let slideImage = document.createElement("img");
        slideImage.src = dataImg;
        el.appendChild(slideImage);
    };
};
let lazyimg = ($id) => {
  let el = document.getElementById("" + $id + "");
  createSlideImage(el);
} 

lazyimg("tour-slide-1");

//ex: createSlideImage(slides[0],0);

