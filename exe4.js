
function imageCarousel() {
    let images = [
        "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/04/CGWd8yk-796x398.jpg",
        "http://media02.hongkiat.com/designers-developers-monthly-03-2016/jstips.jpg",
        "https://dkrn4sk0rn31v.cloudfront.net/2018/03/01133925/javascript.png",
        "https://media.wired.com/photos/5b9c274a9c21992d8a957096/master/pass/How%20did%20JavaScript%20Development%20Get%20So%20Complicated.jpg",
        "http://blog.locaweb.com.br/wp-content/uploads/2017/09/At%C3%A9-onde-vai-o-poder-do-JavaScript.png",
        "https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg"
    ]
      
    let i = 0;
    document.getElementById("mainImage").setAttribute("src", images[i]);
    i++;

    console.log(images[i]);

}

interval = sleep(2000, imageCarousel)

document.querySelector(".stopButton").addEventListener("click", interval);

/*
document.querySelector(".restartButton").addEventListener("click", );
document.querySelector(".nextButton").addEventListener("click", );
document.querySelector(".prevButton").addEventListener("click", );
*/

