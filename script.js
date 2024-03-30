
function myFunc(event) {
    let val = event.target.value;
    console.log(val);
    let img = document.querySelector("#bg_img");
    let v = document.querySelector(".video");
    let vd = document.querySelector(".main-video");

    if (val == "144p") {
        vd.style.visibility = "hidden";
        vd.pause();
        vd.currentTime = 0;
        img.src = "src/moon1.jpeg";
        img.style.visibility = "visible";
        v.style.visibility = "hidden";
        v.pause();
        v.currentTime = 0;
    }
    else if (val == "360p") {
        vd.style.visibility = "hidden";
        vd.pause();
        vd.currentTime = 0;
        img.src = "src/moon4.jpeg";
        img.style.visibility = "visible";
        v.style.visibility = "hidden";
        v.pause();
        v.currentTime = 0;
    }
    else if (val == "720p") {
        vd.style.visibility = "hidden";
        vd.pause();
        vd.currentTime = 0;
        img.src = "src/moon3.jpeg";
        img.style.visibility = "visible";
        v.style.visibility = "hidden";
        v.pause();
        v.currentTime = 0;
    }
    else if (val == "1080p") {
        
        vd.style.visibility = "hidden";
        vd.pause();
        vd.currentTime = 0;
        img.src = "src/moon2.jpeg";
        img.style.visibility = "visible";
        v.style.visibility = "hidden";
        v.pause();
        v.currentTime = 0;
    }
    else {
        let fr = document.querySelector(".frame");
        let form = document.querySelector(".form");
        fr.style.backgroundColor = "black";
        form.style.backgroundColor = "#ccc";
        img.style.visibility = "hidden";
        vd.style.visibility = "visible";
        vd.play();
        v.style.visibility = "visible";
        v.play();
    }
    // vd.remove();
}