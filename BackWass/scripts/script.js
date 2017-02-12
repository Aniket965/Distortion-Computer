
var threshold = 17;
function setup() {
createCanvas(277,182);
var babySafe = loadImage('assets/safe.jpg');
var defectBaby = loadImage('assets/123.jpg'); 
background(255);
}

function draw() {
  var destination = createImage(babySafe.width, babySafe.height, RGB);
var destination2 = createImage(defectBaby.width, defectBaby.height, RGB);
loadPixels();
babySafe.loadPixels();
destination.loadPixels();
defectBaby.loadPixels();

for(var i = 0 ;i < babySafe.width-1 ; i++){
  for(var j=0;j < babySafe.height;j++){
    var loc = i+j*babySafe.width;
    var loc1 = (i+1) +j*babySafe.width;
    var b1 = brightness(babySafe.pixels[loc]);
    var b2 = brightness(babySafe.pixels[loc1]); 
    var b12= brightness(defectBaby.pixels[loc]);
    var b22 = brightness(defectBaby.pixels[loc1]);
    var diff = abs(b1-b2);
    var diff2 = abs(b12-b22);
    if(diff2>threshold){
      destination2.pixels[loc] = color(0);
    }
    if( diff > threshold){
      destination.pixels[loc]  = color(0);
    }
    else if(diff2<=threshold){
    destination2.pixels[loc1] = color(255);
    
  }
    else if( diff <= threshold){
      destination.pixels[loc1]  = color(255);
        }
       }
}
destination =  NoiceCancel(destination);
destination2 = NoiceCancel(destination2);
updatePixels();
image(destination,0,0);

}

function NoiceCancel(img ){
for(var i = 0 ;i < img.width-1 ; i++){
  for(var j=0;j < img.height;j++){
    var loc = i+j*img.width;
    var loc1 = (i+1) +j*img.width;
    var locleft = (i-1) + j*img.width;
    var locUp = i+ (j-1)*img.width;
    var locdown = i +(j+1)*img.width;
    var locupleft = i-1+(j-1)*img.width;
    var locupright = i+1 +(j-1)*img.width;
    var locdownleft = i-1+(j+1)*imgwidth;
    var locdownright = i+1 +(j+1)*img.width;
    var b1 = brightness(img.pixels[loc]);
    var b2 = brightness(img.pixels[loc1]);
    var b3 = brightness(img.pixels[locleft]);
    var b4 = brightness(img.pixels[locUp]);
    var b5 = brightness(img.pixels[locdown]);
    var b6 = brightness(img.pixels[locupleft]);
    var b7 = brightness(img.pixels[locupright]);
    var b8 = brightness(img.pixels[locdownleft]);
    var b9 = brightness(img.pixels[locdownright]);
     if(b3>threshold&& b2>threshold&& b4>threshold&& b5>threshold&& b6>threshold&& b7>threshold&& b8>threshold&&b9>threshold){
    
    img.pixels[loc] = 255;
    
    
    }
 
  }
}
   return img;
}