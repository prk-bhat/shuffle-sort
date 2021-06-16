const arr = [
    {
        value: '1',
        color: '#6F98A8'
    },
    {
        value: '2',
        color: '#2B8EAD'
    },
    {
        value: '3',
        color: '#2F454E'
    },
    {
        value: '7',
        color: '#BFBFBF'
    },
    {
        value: '8',
        color: '#6F98A8'
    },
    {
        value: '9',
        color: '#2F454E'
    },
    {
        value: '4',
        color: '#2B8EAD'
    },
    {
        value: '5',
        color: '#2F454E'
    },
    {
        value: '6',
        color: '#BFBFBF'
    },
]

let addElements = () => {
    const data_grid = document.getElementById("main_grid");
    for (ele of arr) {
        let newElement = document.createElement("div");
        newElement.id = "ele" + ele.value;
        newElement.className = "data_col";
        newElement.innerHTML = ele.value;
        newElement.style.backgroundColor = ele.color;
        newElement.style.borderLeftWidth = "10px";
        newElement.style.borderLeftStyle = "solid";
        newElement.style.borderLeftColor = ele.color;
        data_grid.appendChild(newElement);
    }
}

let removeAll = () => {
    for (ele of arr) {
        const removeEle = document.getElementById("ele" + ele.value);
        if (removeEle.parentNode)
            removeEle.parentNode.removeChild(removeEle)
    }
}

(function init() {
    addElements();

    document.getElementById('sort').addEventListener('click', () => {
        this.sort();
    });
    document.getElementById('shuffle').addEventListener('click', () => {
        this.shuffle();
    });
})();


async function shuffle() {
    await removeAll();
    arr.sort((a, b) => { return a.value < (Math.floor(Math.random() * 10)) ? 1 : -1 });
    addElements();
}

async function sort() {
    await removeAll();
    arr.sort((a, b) => { return (a.value > b.value) ? 1 : -1 });
    addElements();
}



