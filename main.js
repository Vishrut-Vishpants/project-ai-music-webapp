song1= "";
song2= "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
scoreleftwrist = 0;
Status.song1 = "";
Status.song2 = "";


function preload(){
    song1= loadSound("harrypotter.mp3");    
    song2= loadSound("peterpan.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log('PoseNet is initialized');
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftwristx = " + leftwristx + "leftwristy = " + leftwristy);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("rightwristx = " + rightwristx + "rightwristy = " + rightwristy);
        scoreleftwrist = results[0].pose.keypoints[9].score;
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    Status.song1 = "true";
    if(scoreleftwrist > 0.2){
        circle(leftwristx, leftwristy, 20);
        song2.stop();
        if(Status.song1 = false){
            song1.play();
            document.getElementById("songname").innerHTML = "Harry Potter";
        }
    }
}

function play(){
    song.play();
}