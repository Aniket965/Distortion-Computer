PImage babySafe;
PImage defectBaby;
int threshold=17;
void setup(){
size(277,182);
babySafe = loadImage("safe baby.jpg");
defectBaby = loadImage("similar.jpg"); 
background(255);
}

void draw(){
PImage destination = createImage(babySafe.width, babySafe.height, RGB);
PImage destination2 = createImage(defectBaby.width, defectBaby.height, RGB);
loadPixels();
babySafe.loadPixels();
destination.loadPixels();
defectBaby.loadPixels();

for(int i = 0 ;i < width-1 ; i++){
  for(int j=0;j < height;j++){
    int loc = i+j*width;
    int loc1 = (i+1) +j*width;
    float b1 = brightness(babySafe.pixels[loc]);
    float b2 = brightness(babySafe.pixels[loc1]); 
    float b12= brightness(defectBaby.pixels[loc]);
    float b22 = brightness(defectBaby.pixels[loc1]);
    float diff = abs(b1-b2);
    float diff2 = abs(b12-b22);
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
int k=0;
for(int i = 0 ;i < width-1 ; i++){
  for(int j=0;j < height;j++){
    int loc = i+j*width;


if(    destination.pixels[loc]!=destination2.pixels[loc]){

k++;

}
    
  

}}


if(k > 46802){
fill(255,0,0);}
else{
fill(0,255,0);
}

image(destination,0,0);
image(destination2,0,0);




ellipse(width-20,height-20,15,15);
}

PImage NoiceCancel(PImage img ){
for(int i = 1 ;i < width-1 ; i++){
  for(int j=1;j < height-1;j++){
    int loc = i+j*width;
    int loc1 = (i+1) +j*width;
    int locleft = (i-1) + j*width;
    int locUp = i+ (j-1)*width;
    int locdown = i +(j+1)*width;
    int locupleft = i-1+(j-1)*width;
    int locupright = i+1 +(j-1)*width;
    int locdownleft = i-1+(j+1)*width;
    int locdownright = i+1 +(j+1)*width;
    float b1 = brightness(img.pixels[loc]);
    float b2 = brightness(img.pixels[loc1]);
    float b3 = brightness(img.pixels[locleft]);
    float b4 = brightness(img.pixels[locUp]);
    float b5 = brightness(img.pixels[locdown]);
    float b6 = brightness(img.pixels[locupleft]);
    float b7 = brightness(img.pixels[locupright]);
    float b8 = brightness(img.pixels[locdownleft]);
    float b9 = brightness(img.pixels[locdownright]);
     if(b3>threshold&& b2>threshold&& b4>threshold&& b5>threshold&& b6>threshold&& b7>threshold&& b8>threshold&&b9>threshold){
    
    img.pixels[loc] = 255;
    
    
    }
 
  }
}
  return img;
}