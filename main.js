var tintcolour = "";
function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 350);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tintcolour);
}
function takesnapshot(){
    save("Your picture.png");
}
function filtertint(){
    tintcolour = document.getElementById("colourinput").value;
}