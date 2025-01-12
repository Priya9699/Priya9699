let userscore = 0;
let computorscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computorscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
   const options = ["Stone","Paper","Scissor"];
  const randIdx =  Math.floor(Math.random() * 3);
  return options[randIdx];
}
const showwinner = (userwin, userchoice, computorchoice) => {
   if(userwin) {
      userscore++;
      userscorepara.innerText = userscore;
      msg.innerText = "you win !!";
      msg.style.backgroundColor = "green";
   }else {
      computorscore++;
      computorscorepara.innerText = computorscore;
      console.log("you loose");
      msg.innerText = "you lost !!";
      msg.style.backgroundColor = "red";
   };
};

const drawgame = () => {
   msg.innerText = "game was draw.";
   msg.style.backgroundColor = "blue";
}
const playgame = (userchoice) => {
   console.log("user choice = ", userchoice);
   const computorchoice = gencompchoice();
   console.log("computor choice = " ,computorchoice);

   if (userchoice === computorchoice) {
      drawgame();
   } else {
      let userwin = true;
      if (userchoice === "Stone") {
         //scissors,paper
         userwin = computorchoice === "Paper" ? false : true;
      } else if (userchoice === "Paper"){
         userwin = computorchoice === "Scissor" ? false : true;
      } else {
         userwin = computorchoice === "Stone" ? false : true;
      }
showwinner(userwin, userchoice,computorchoice);
      };
   };

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playgame(userchoice);
   });
});
   


