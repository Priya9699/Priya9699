 alert("Admission Enquiry Form 2025-26(Click to Open Link for form filling) Our Distinguished Alumni Tentative Shedule of CET A.Y.2025-2026 Click Here");
 let body = document.querySelector("body");
 let btn = document.querySelector("button");
 btn.onclick = ()=>{
    // console.log("you are tying to change mode");
    let currmode = "light";
    if (currmode == "dark") {
        currmode = "light";
        // console.log("light");
        body.style.backgroundColor="white";
     } else if(currmode == "light") {
        currmode = "dark";
        // console.log("dark");
        body.style.backgroundColor="black";
     }
     console.log(currmode);
 };
 