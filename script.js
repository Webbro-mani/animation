gsap.from(".container",{
    y:90,
    duration:1,
    stagger:1,
});

document.addEventListener("mouseover", parallax);

function parallax(e){
    let height= window.innerHeight/2;
    let width=window.innerWidth/2;

    let x = (e.clientX - width) / width;
    let y = (e.clientY - height) / height;

    document.querySelectorAll(".thumbnail-box").forEach((move)=>{
        let moving = move.querySelector(".object").getAttribute("data-value");
        let movex = x*moving*10;
        let movey = y*moving*10;

        move.style.transform = `translateX(${movex}px) translateY(${movey}px)`;
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let thumbnails = document.querySelectorAll(".thumbnail-box");

    thumbnails.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            gsap.to(thumbnails, { opacity: 0, duration: 0.3 });

            gsap.to(box, { opacity: 1, duration: 0.3 });
        });

        box.addEventListener("mouseleave", () => {
            
            gsap.to(thumbnails, { opacity: 1, duration: 0.3 });
        });
    });
});
