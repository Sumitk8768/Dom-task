const transactions = [
  {
    id: 1,
    title: "Salary",
    amount: 25000,
    type: "income",
    date: "2026-02-23"
  }
]

const storedData = localStorage.getItem("transactions")
if(storedData){
    transaction = JSON.parse(storedData);
}

console.log(storedData)

function renderTransaction(){

}
function updateSummary(){

}
function saveLocalStorage(){
   localStorage.setItem("transactions",JSON.stringify(transactions));
}
saveLocalStorage()
console.log(storedData);
