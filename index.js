const start=document.getElementsByClassName('start')[0];
const container_start=document.getElementsByClassName('container')[0];
const pushable_start=document.getElementsByClassName('pushable')[0];
const container2=document.getElementsByClassName('container-2')[0];
const rock_btn=document.getElementById('rock');
const paper_btn=document.getElementById('paper');
const scissor_btn=document.getElementById('scissor');
const computerImg=document.getElementsByClassName("computerImg")[0];
const cOption=document.getElementsByClassName('cOption')[0];
const Choose= document.getElementsByClassName('Choose')[0];
let Cscore=document.getElementById('computerScore');
let Uscore=document.getElementById('userScore');

start.addEventListener('click',()=>{
   container_start.classList.add('remove');
   setTimeout(()=>{
      container_start.style.display="none"
   },1000);
   setTimeout(()=>{
      container2.classList.remove('displaynone');
     },1000);
})


function autoremoveTied(){
   scoreC=Number(Cscore.innerText);
   scoreU=Number(Uscore.innerText);
   setTimeout(()=>{
      Cscore.innerText= scoreC;
      Uscore.innerText= scoreU;
   },1000);
   Cscore.innerText="Tied!!";
   Uscore.innerText="Tied!!";
}


function uwin(){
  document.getElementsByClassName('n-result')[1].classList.add('remove');
  setTimeout(()=>{
   document.getElementsByClassName('uwin')[0].classList.remove('displaynone');
   document.getElementsByClassName('n-result')[1].style.display="none";
   },1000);
}
function cwin(){
   document.getElementsByClassName('n-result')[1].classList.add('remove');
   setTimeout(()=>{
    document.getElementsByClassName('cwin')[0].classList.remove('displaynone');
    document.getElementsByClassName('n-result')[1].style.display="none";
    },1000);
}





rock_btn.addEventListener('click',()=>{
   var options=['rock','paper','scissor'];
   var item = options[Math.floor(Math.random()*options.length)];
   computerImg.src="images/"+String(item)+".png";
   computerImg.classList.remove('gestureAnimation');
   Choose.innerText=" "+item;
   cOption.innerText=" (...wait 1s,thinking what to throw next)";
   setTimeout(()=>{
      computerImg.classList.add('gestureAnimation');
      computerImg.src="images/rock.png";
      cOption.innerText="Ready!!";
      Choose.innerText="";
   },1000)
   if(item=='scissor'){
      score=Number(Uscore.innerText);
      score=score+1;
      Uscore.innerText=score;
      if(score==5){
         uwin();
      }
   }
   else if(item=='rock'){
     autoremoveTied();
   }
   else{
      score=Number(Cscore.innerText);
      score=score+1;
      Cscore.innerText=score;
      if(score==5){
         cwin();
      }
   }
})



paper_btn.addEventListener('click',()=>{
   var options=['rock','paper','scissor'];
   var item = options[Math.floor(Math.random()*options.length)];
   computerImg.src="images/"+String(item)+".png";
   computerImg.classList.remove('gestureAnimation');
   Choose.innerText=" "+item;
   cOption.innerText=" (...wait 1s,thinking what to throw next)";
   setTimeout(()=>{
      computerImg.classList.add('gestureAnimation');
      computerImg.src="images/rock.png";
      cOption.innerText="Ready!!";
      Choose.innerText="";
   },1000)
   if(item=='scissor'){
      score=Number(Uscore.innerText);
      score=score+1;
      Uscore.innerText=score;
      if(score==5){
         uwin();
      }
   }
   else if(item=='paper'){
     autoremoveTied();
   }
   else{
      score=Number(Cscore.innerText);
      score=score+1;
      Cscore.innerText=score;
      if(score==5){
         cwin();
      }
   }
})



scissor_btn.addEventListener('click',()=>{
   var options=['rock','paper','scissor'];
   var item = options[Math.floor(Math.random()*options.length)];
   computerImg.src="images/"+String(item)+".png";
   computerImg.classList.remove('gestureAnimation');
   Choose.innerText=" "+item;
   cOption.innerText=" (...wait 1s,thinking what to throw next)";
   setTimeout(()=>{
      computerImg.classList.add('gestureAnimation');
      computerImg.src="images/rock.png";
      cOption.innerText="Ready!!";
      Choose.innerText="";
   },1000)
   if(item=='rock'){
      score=Number(Uscore.innerText);
      score=score+1;
      Uscore.innerText=score;
      if(score==5){
         uwin();
      }
   }
   else if(item=='scissor'){
     autoremoveTied();
   }
   else{
      score=Number(Cscore.innerText);
      score=score+1;
      Cscore.innerText=score;
      if(score==5){
         cwin();
      }
   }
})