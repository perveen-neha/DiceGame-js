const diceSection = document.querySelector(".dice__section")
const btn = document.querySelector(".roll__btn")
const result = document.querySelector(".result__section")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")

let dice = [[5],[1,9],[1,5,9],[1,3,7,9], [1,3,5,7,9],[1,3,4,6,7,9]];

btn.addEventListener("click", ()=> {

    let temp;
    let rolls = [rn(), rn()]
    if(rolls[0] == rolls[1])
        temp="It's a Draw";
    else if(rolls[0] > rolls[1])
        temp="Player 1 wins";
    else 
        temp="Player 2 wins";
    
    result.innerHTML = temp;
   
    build(player1,rolls[0]);
    build(player2,rolls[1])
    
    
})

function build(el,dots)
{
    div = document.createElement("div")
    div.setAttribute('class', 'dice__holder')
    let ar = dice[dots-1]
    console.log(ar);
    for(let i=1; i<10; ++i)
    {
        d = document.createElement("div");
        d.setAttribute("class","dots")
        if(ar.includes(i)) d.classList.add("black")
        else d.classList.add("white")
        div.appendChild(d)
    }
    if(el.children[0]) {
        el.children[0].remove();
    }
    el.appendChild(div)
   
}


function rn() {
    return Math.floor((Math.random()*6)+1) 
}
