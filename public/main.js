//grab data from the DOM and store it in a 2D array (arrOfVals) with the format [[ISCI, title]]
let rows = document.querySelectorAll("table tr")
let arrayOfRows = Array.from(rows)


let arrOfVals = arrayOfRows.map(row => row.innerText)
arrOfVals = arrOfVals.filter(val => val !== '\t' && val !== 'ISCI\tTitle')
arrOfVals = arrOfVals.map(val => val.split('\t'))


let ISCIs = arrOfVals.map(pair => pair[0])
let titles = arrOfVals.map(pair => pair[1])


let cleanedVals = [[null , null]]

for (let i = 0; i < titles.length; i++) {
    if (titles[i] != cleanedVals[cleanedVals.length -1][1]) {
        cleanedVals.push([ISCIs[i], titles[i]])
    }
}

cleanedVals.shift()

console.log(cleanedVals)