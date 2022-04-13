console.log(document)
var buttons = document.querySelectorAll('button')
console.log(buttons)

function sum(){
    var prices = document.querySelectorAll('.price')
    var totalTag = document.getElementById('total')
    var total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].innerHTML)
        console.log(total)
    }
    totalTag.innerHTML=total
}

function calculate(event){
    var t = event.target;
    var div = t.parentElement
    var p = div.querySelector('p')
    var quantity = Number(p.innerHTML)
    console.log(quantity)
    if(t.innerHTML=="+"){
        quantity++
    }else if (t.innerHTML=="-" && quantity > 0){
        quantity--
    }
    p.innerHTML = quantity
    var tr = div.parentElement.parentElement
    console.log(tr)
    var unitPrice = tr.querySelector('.unitPrice')
    var up = Number(unitPrice.innerHTML)
    var price = tr.querySelector('.price')
    price.innerHTML= up*quantity
    console.log(up)
    sum()
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',calculate)  
}

var likeBtns = document.querySelectorAll('.like')

function changeColor(e){
    var btn = e.target
    if(btn.style.color!="red"){
        btn.style.color="red"
    }else if(btn.style.color=="red"){
        btn.style.color=""
    }
}


for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener('click',changeColor)  
    
    
}

var deleteBtns = document.getElementsByClassName('delete')
console.log(deleteBtns)

function delete_row(e){
    var del = e.target
    var tr= del.parentElement.parentElement.parentElement.parentElement
    console.log(tr)
    tr.remove()
    sum()
}


for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click',delete_row)  

    
}