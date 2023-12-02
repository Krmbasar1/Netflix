    window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0 );
})

const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickcounter = 0;
    const imgItem = movieList[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function (){
        clickcounter++;
        if(imgItem - (13 + clickcounter) >= 0)
        {
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 96.5}%)`;
        }
        else
        {
            movieList[i].style.transform = "translateX(0)";
            clickcounter = 0;
        }
    });
});

