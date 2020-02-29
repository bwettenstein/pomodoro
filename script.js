const tensMin = document.getElementById('tens-minute');
const addTensMin = document.getElementById('tens-min-add');
const subTensMin = document.getElementById('tens-min-sub');

addTensMin.addEventListener('click', () => {
    tensMin.innerHTML = parseInt(tensMin.innerHTML, 10) + 1;
})

subTensMin.addEventListener('click', () => {
    tensMin.innerHTML = parseInt(tensMin.innerHTML) - 1;
})
