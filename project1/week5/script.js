
let frog = [];

document.querySelectorAll(".thumbnail").forEach((f, idx) => {
    frog.push(f)
    frog[idx].addEventListener("click", FrogToggle);

    function FrogToggle() {
        frogMain.src = frog[idx].src
        frogMain.alt = frog[idx].alt
    }
})




let frogMain = document.getElementById("frogMain")



// function FrogToggle() {
//     frogMain.src = 



//     // if (f.alt == "frog1") {
//     //     f.src = frogMain.src;
//     //     f.alt = frogMain.alt;
//     //     frogMain.src = frog[idx].src;
//     //     frogMain.alt = frog[idx].alt;
//     // }
//     // else if (f.alt == "frog2") {
//     //     f.src = frogMain.src;
//     //     f.alt = frogMain.alt;
//     //     frogMain.src = "./imgs/frog2.jpg";
//     //     frogMain.alt = "frog2";
//     // }

//     // else {
//     //     f.src = "./imgs/frog1.jpg";
//     //     f.alt = "frog1";
//     //     frogMain.src = "./imgs/frog5.jpg";
//     //     frogMain.alt = "frog5";
//     // }

//     // })


// }