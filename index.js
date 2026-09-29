let anser
let q
let q1 = `what 1+1`
let q2
let q3
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

h1.textContent = q1

document.getElementById("b1").onclick = function(){
    anser = document.getElementById("input1").value

    if(anser == `2`){
        h1.textContent = "what the capital of greece"
        h2.textContent = `RIGHT`
    }
    
    else if(anser == `Athens` ){
        h1.textContent = "what year do we have"
        h2.textContent = `RIGHT`
    }

    else if(anser == `2026` ){
    h1.textContent = "you won the quez"
    h2.textContent = `RIGHT`
    }

    else{
        h2.textContent = `FALSE`
    }
}