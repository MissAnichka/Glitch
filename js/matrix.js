function MatrixEffect() {
    let canvas = document.getElementById("matrixCanvas");
    let ctx = canvas.getContext("2d");
    //making the canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //russian characters - taken from the unicode charset
    let russian = "ъяшертыуиопющэасдфгчйкльжзхцвбнм";
    // let chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑" // saving jic want to add later
    //converting the string into an array of single characters
    russian = russian.split("");

    let font_size = 18;
    let columns = windowW / font_size; //number of columns for the rain
    //an array of drops - one per column
    let drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    //drawing the characters
    function matrixDraw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, windowW, windowH);

        ctx.fillStyle = "#0F0"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (let i = 0; i < drops.length; i++) {
            //a random russian character to print
            let text = russian[Math.floor(Math.random() * russian.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > windowH && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }
    setInterval(matrixDraw, 33)
}
// begins after 7 seconds
setTimeout(MatrixEffect, 7000);


// credits: http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript