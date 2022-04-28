let formula = document.querySelector('.formula')
let answer = document.querySelector('.answer')
formula.addEventListener('keyup',async ()=>{
    if(!formula.value) {answer.innerHTML = '=';return}
    try{
    answer.innerHTML = "=&nbsp" + (await(await fetch('/calc?eq=' + encodeURIComponent(formula.value))).text())
    // answer.innerHTML = "=&nbsp" + eval(formula.value)
    } catch(e){
    answer.innerHTML = '= err'
    }
})