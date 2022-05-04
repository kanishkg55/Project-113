function setup()
{
    canvas = createCanvas(640,580);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,400,330);
    rect(0,0,400,330);
    circle(330,450,40);
    ellipse(320,470,50,20);
}

function take_snapshot()
{
    save('photo.png');
}