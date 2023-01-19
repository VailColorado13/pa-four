let rows = document.querySelectorAll("table tr")

let arrayOfRows = Array.from(rows)


let arrOfVals = arrayOfRows.map(row => row.innerText)
arrOfVals = arrOfVals.filter(val => val !== '\t' && val !== 'ISCI\tTitle')
arrOfVals = arrOfVals.map(val => val.split('\t'))


console.log(arrOfVals)