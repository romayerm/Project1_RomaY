const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const background = new Image();
background.src = 'images/beach.jpg';

background.onload = () => {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

const foreground1 = new Image();
foreground1.src = 'images/seagull.png';

const foreground2 = new Image();
foreground2.src = 'images/shell.png';

const foreground3 = new Image();
foreground3.src = 'images/seagull2.png';

foreground1.onload = () => {
    ctx.drawImage(foreground1, 90, 70, 150, 100); 
};

foreground2.onload = () => {
    ctx.drawImage(foreground2, 200, 350, 80, 60); 
};

foreground3.onload = () => {
    ctx.drawImage(foreground3, 450, 350, 400, 400); 
};

ctx.font = '30px Impact';
ctx.fillStyle = '#6699cc';
ctx.fillText('Roma Y. - A Beach Sunset', 450, 30);
    
};

