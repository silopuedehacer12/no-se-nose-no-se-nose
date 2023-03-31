noseX=0;
noseY=0;

function preload() {
    polandball=loadImage("imagen polaca");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    image(video,0,0,300,300);
    image(polandball,noseX,noseY,30,30);
}

function take_snapshot() {
    save('myFilterImage.png')
}