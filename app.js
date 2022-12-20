let target = document.getElementById('input');
let result = document.getElementById('result');
let drugs = document.getElementById('drugs');

let resource = {};

fetch('https://celim1962.github.io/PharmacyList/data.txt')//https://celim1962.github.io/PharmacyList
    .then(res => res.text())
    .then(res => {
        let allDrugInfo = res.split(',').map(info => info = info.replace(/(\r\n|\n|\r)/gm, ""));

        allDrugInfo.map(info => {
            let temp = info.split(':');
            resource[temp[0]] = temp[1]
        });

        for (let i in resource) {
            let option = document.createElement('option');
            option.value = i;
            drugs.appendChild(option)
        }
    })

target.addEventListener('keyup', () => {
    result.innerText = `Area: ${resource[target.value]}`;
});
