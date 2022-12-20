let target = document.getElementById('input');
let result = document.getElementById('result');
let drugs = document.getElementById('drugs');

let resource = {};

fetch('./data.txt')//https://celim1962.github.io/PharmacyList
    .then(res => res.text())
    .then(res => {
        let allDrugInfo = res.split(',').map(info => info = info.replace(/(\r\n|\n|\r)/gm, ""));
        let checkUniqueSet = new Set();

        allDrugInfo.map(info => {
            let key = info.split(':')[0]
            checkUniqueSet.add(key);
        });

        if (allDrugInfo.length !== checkUniqueSet.size) {
            let allDuplicateItem = [];

            checkUniqueSet.forEach(item => {
                if (allDrugInfo.filter(element => element.split(':')[0] == item).length > 1)
                    allDuplicateItem.push(item)
            })

            alert('藥品名冊重複! 清單如下');
            alert(allDuplicateItem);
        } else {
            allDrugInfo.map(info => {
                let temp = info.split(':');
                resource[temp[0]] = temp[1]
            });

            for (let i in resource) {
                let option = document.createElement('option');
                option.value = i;
                drugs.appendChild(option)
            }
        }


    })

target.addEventListener('keyup', () => {
    result.innerText = `Area: ${resource[target.value]}`;
});
