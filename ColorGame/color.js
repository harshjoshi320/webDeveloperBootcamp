colors = [
    'rgb(255, 64, 64)',
    'rgb(64, 255, 64)',
    'rgb(64, 64, 255)',
    'rgb(255, 255, 64)',
    'rgb(64, 255, 255)',
    'rgb(255, 64, 255)',
    'rgb(127, 127, 64)',
    'rgb(64, 127, 127)',
    'rgb(127, 64, 127)'
];

var bgColor = 'rgb(31, 27, 16)';
var headerBG = 'rgb(65, 130, 192)';

var colorDisplay = document.getElementById('colordisplay');

var newGameBTN = document.querySelector('#newgame');
var easyBTN = document.querySelector('#easy');
var hardBTN = document.querySelector('#hard');

var difficulty = 0;

newGameBTN.addEventListener('click', function() {
    newGame(difficulty);
});

easyBTN.addEventListener('click', function() {
    difficulty = 0;
    btnRedecorate();
    newGame(difficulty);
});

hardBTN.addEventListener('click', function() {
    difficulty = 1;
    btnRedecorate();
    newGame(difficulty);
});

document.onload = newGame(difficulty);

function newGame(difficulty) {
    cleanUp();
    btnRedecorate();
    
    blocks = getBlocks(difficulty);
    prepedColors = randomizeColors(colors, blocks.length);
    selColor = pickColor(prepedColors);
    colorDisplay.innerText = String(selColor).toUpperCase();
    
    //Make blocks visible and set BG color
    redrawBlocks(blocks, prepedColors);
    
    //Adding click event to blocks
    // addBlkEvents(blocks, selColor);
    for(var i = 0; i<blocks.length; i++) {
        blocks[i].addEventListener('click',function(){
            if(this.style.backgroundColor === selColor){
                win(blocks, selColor);
            }
            else{
                this.style.backgroundColor = bgColor;
            }
        });
    }
}

function getBlocks(difficulty) {
    if(difficulty === 0){
        return document.getElementById('row1').getElementsByClassName('blocks');
    }
    else if(difficulty === 1){
        return document.querySelectorAll('.blocks');
    }
}

function addBlkEvents(blocks, selColor) {
    
}

function cleanUp(){
    var blocks = document.querySelectorAll('.blocks');
    document.getElementById('banner').innerText = '';
    document.getElementById('header').style.backgroundColor = headerBG;
    newGameBTN.textContent = 'New Colors';
    for(var i = 0; i < blocks.length; i++){
        blocks[i].classList.add('d-none');
    }
}

function pickColor(colorsArray) {
    //returns a random color from passed color array
    return colorsArray[getRandomIntInclusive(0, colorsArray.length-1)];
}

function randomizeColors(colors, length) {
    //Prepares randomized color array of specified length
    var rndColors = [];
    var colorsArray = colors.slice();
    for(var i = 0; i < length; i++) {
        index = getRandomIntInclusive(0, colorsArray.length-1);
        rndColors[i] = colorsArray[index];
        colorsArray.splice(index, 1);
    }
    return rndColors;
}

function redrawBlocks(blocks, colorsArray) {
    //Make blocks visible and set BG color
    for(var i = 0; i<blocks.length; i++) {
        blocks[i].classList.remove('d-none');
        blocks[i].style.backgroundColor = colorsArray[i];
    }
}

function win(blocks, color) {
    // invoked at correct guess
    // changes bg of all blocks and header to correct color
    document.getElementById('banner').innerText = 'Correct!!';
    document.getElementById('header').style.backgroundColor = color;
    newGameBTN.textContent = 'Play Again?';
    for(var i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = color;
    }
}

function btnRedecorate(){
    if(difficulty === 0){
        easyBTN.classList.add('selected');
        hardBTN.classList.remove('selected');
    }
    else if(difficulty === 1){
        hardBTN.classList.add('selected');
        easyBTN.classList.remove('selected');
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}