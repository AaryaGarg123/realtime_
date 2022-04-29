noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(700, 120);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    document.getElementById("length").innerHTML = difference;
    background('#FFFF00');
    fill('#00FF00');
    stroke('#9ACD32');
    square(noseX, noseY, difference);
}

function modelLoded(){
    console.log('PoseNet is Initialized ');
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX+" noseY =" +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}