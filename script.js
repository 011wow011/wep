const nembersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

const lottoNumbers = []
const colors = ["#fbc400", "#69c8f2", "#ff7272", "#aaaaaa", "#b0d840"]

function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.classList.add('eachnum')
    eachNumDiv.style.backgroundColor =  colors[colorIndex]
    eachNumDiv.textContent = number
    nembersDiv.appendChild(eachNumDiv)
}

drawButton.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let ran = Math.floor(Math.random() * 45) + 1
        if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
            paintNumber(ran)
        }
    }
    // console.log(lottoNumbers)
})

resetButton.addEventListener("click", function(){
    lottoNumbers.splice(0, 6) //0 부터 6번 인자까지 지움
    nembersDiv.innerHTML = ""
})