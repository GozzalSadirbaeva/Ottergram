var Detaile_image_selector = '[data-image-role="target"]';
var Detaile_title_selector = '[data-image-role="title"]';
var Detaile_frame_selector = '[data-image-role="frame"]'
var Thumbnail_link_selector = '[data-image-role="trigger"]';
var Hidden_detail_class = 'hidden-detail';
var Tiny_effect_class = 'is-tiny';
var ESC_KEY = 27;

// var otterOneImage = 'images/1.jpeg';
// var otterOneTitle = 'Stayin\'Alive';
// setDetails(otterOneImage, otterOneTitle);

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(Detaile_image_selector);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(Detaile_title_selector);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}
function titleFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
    'use strict';
   setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
    'use strict';
    thumb.addEventListener('click', function (event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(Thumbnail_link_selector);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails(){
    'use strict';
    document.body.classList.add(Hidden_detail_class);
}

function showDetails(){
    'use strict';
    var frame = document.querySelector(Detaile_frame_selector);
    document.body.classList.remove(Hidden_detail_class);
    frame.classList.add(Tiny_effect_class);
    frame.classList.remove(Tiny_effect_class);
    setTimeout(function(){
        frame.classList.remove(Tiny_effect_class);
    }, 50);
}

function addKeyPressHandler(){
    'use strict';
    document.body.addEventListener('keyup', function (event){
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY){
            hideDetails();
        }
    });
}
function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
    console.log(thumbnails);
}
initializeEvents();
