let h1 = document.querySelector('.text')
let btns = document.querySelectorAll('button')

btns.forEach(btn => {
    let key = btn.getAttribute('data-btn')
    btn.onclick = () => {
        if(key === "plus"){
            h1.innerHTML++
        } else if(key === "minus"){
            h1.innerHTML--
            if(h1.innerHTML <= 0){
                h1.innerHTML = 0
            }
        } else if(key === 'random'){
            h1.innerHTML = Math.round(Math.random() * 100)
        } else if(key === 'reset'){
            h1.innerHTML = 0
        }
    }
})
