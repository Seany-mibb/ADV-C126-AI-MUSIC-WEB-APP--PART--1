function setup()
{
    canvas = createCanvas(600, 600)
    canvas.position(1000, 280)
    video = createCapture(VIDEO)
    video.hide()
}

function draw()
{
    image(video, 0, 0, 600, 600)
}