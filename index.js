const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.body,
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', onColorSwitch);
refs.stop.addEventListener('click', stopColorSwitcher);

let id = null;

function onColorSwitch() {
    refs.start.disabled = true;
    id = setInterval(() => {
        const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[randomIndex];     
     }, 1000); 
}

function stopColorSwitcher() {
    clearInterval(id);
    refs.start.disabled = false;
}