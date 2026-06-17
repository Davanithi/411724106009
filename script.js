console.log("hello")

const first = 1;
const second = 2;
console.log(first);
const str ="Davanithi";
console.log(str)
const fruits =["apple", "banana", "grapes"]
console.log(fruits[0])
fruits[1] = "orange"
console.log(fruits[1])
const arr = [1, "name", false, 2.4]
console.log(arr)
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
const fourth = document.getElementById("ptag")
fourth.innerHTML = "this is my fourth class"

function newfunction(){
    console.log("I am drawing")
}

const input = document.getElementById("eventListener")
const output = document.getElementById("Ptag")
input.addEventListener("input", ()=>{
    output.textContent = input.value 
})

const newvar = document.createElement("p");
newvar.textContent = "New Paragraph";
document.body.appendChild(newvar);