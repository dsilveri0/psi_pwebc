var i = 0;
var startCarousel = setInterval(imageCarousel, 2000);
let images = [
    "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/04/CGWd8yk-796x398.jpg",
    "http://media02.hongkiat.com/designers-developers-monthly-03-2016/jstips.jpg",
    "https://dkrn4sk0rn31v.cloudfront.net/2018/03/01133925/javascript.png",
    "https://media.wired.com/photos/5b9c274a9c21992d8a957096/master/pass/How%20did%20JavaScript%20Development%20Get%20So%20Complicated.jpg",
    "http://blog.locaweb.com.br/wp-content/uploads/2017/09/At%C3%A9-onde-vai-o-poder-do-JavaScript.png",
    "https://www.weblink.com.br/blog/wp-content/uploads/2018/04/O-Que-e-JavaScript-e-Como-Funciona.png"
]
window.imageIndex;

function imageCarousel() {
    if (i < 6) {
        $( "#mainImage" ).attr("src", images[i]);
        window.imageIndex = i;
        i++;
    }
    else
        i = 0;

    return window.imageIndex;

}

function stopCarousel() {
    clearInterval(startCarousel);
}

function restartCarousel() {
    startCarousel = setInterval(imageCarousel, 2000);
}

function nextImage() {
    stopCarousel();
    if (window.imageIndex < 5) {
        window.imageIndex++;
        $( "#mainImage" ).attr("src", images[window.imageIndex]);
    }
    else {
        window.imageIndex = 0;
        $( "#mainImage" ).attr("src", images[window.imageIndex]);
    }
}

function previousImage() {
    stopCarousel();
    if (window.imageIndex == 0) {
        window.imageIndex = 5;
        $( "#mainImage" ).attr("src", images[window.imageIndex]);
    }
    else {
        window.imageIndex--;
        $( "#mainImage" ).attr("src", images[window.imageIndex]);
    }
}

$( ".stopButton" ).click(stopCarousel);
$( ".restartButton" ).click(restartCarousel);
$( ".nextButton" ).click(nextImage);
$( ".prevButton" ).click(previousImage);