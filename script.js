

let guestnumber = document.querySelector('#guest')
let dialougeBx =document.querySelector('.dialougeBx')
let close =document.querySelector('#close')
let showTime = document.querySelector('#time')
let showscore = document.querySelector('#score')
let bubbleBX = document.querySelector('.bubbleBX')
let randomNumber = Math.floor(Math.random() * 10)



guestnumber.innerHTML = randomNumber

let time = 15

showTime.innerHTML = time

let score = 0

showscore.innerHTML = score



setInterval(()=>{
  if(time>0){
    time = time - 1
    showTime.innerHTML =  time
  }else{
    dialougeBx.style.display = 'flex'
    bubbleBX.innerHTML = ''
  }

},1000)


close.addEventListener('click',()=>{
  dialougeBx.style.display = 'none'
  bubbleBX.innerHTML = ''
  createBbl();
  time = 15
})


bubbleBX.addEventListener('click',(e)=>{
 if(e.target.id=='number'){
  if(e.target.innerHTML==guestnumber.innerHTML){
     score = score + 10
    showscore.innerHTML = score
    guestnumber.innerHTML = Math.floor(Math.random() * 10)
    }

 }
})



const createBbl =()=>{
  for (let i = 0; i<= 59; i++) {
    let bubleNumber = Math.floor(Math.random() * 10)
    bubbleBX.innerHTML += `<div class="bbl">
    <img src="./pngegg.png" alt="">
    <h2 id="number" >${bubleNumber}</h2>
    </div>`
  }
}


createBbl();