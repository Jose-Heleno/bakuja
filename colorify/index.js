function paint (color) {
console.log(color);
const circle = document.getElementById('circleID');
circle.style = `background-color:${color}`;
console.log(circle);
}

/*function random(color, opacity = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgba (${r}, ${g}, ${b}, ${opacity})`;

    criar botão "random" no html
    criar funçao no botão  para quando cliente apertar apareça i cor aleatória.
    deve reutilizar função randomque ja foi visto no index.js.

}*/