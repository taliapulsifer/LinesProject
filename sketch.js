let lineWeight = 5;
let z = 0.01 // Setting up z as a global variable
let increment = 0.03;
let red = 171;
let fade = 0;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  moveLines();
}
function moveLines(){
  angleMode(DEGREES);
  strokeWeight(lineWeight);
  fade += 0.001;
  let step = 0.001;
  z+= 0.0005; // Increment z inside the function moveLines, but
  // outside the loop so that z only gets incremented once for every function call
  for(let y=0; y<=height; y+=20){
    
    for(let x=0; x<=width; x+=20){
      
      let noiseValue = noise(x*step, y*step, z);
      let angle = map(noiseValue,0,1,-360,360); 
    
      push(); // pushes the values written above it. There is one status in the stack.
      translate(x,y);
      rotate(angle);
      let color = noise(x*increment, y*increment, z); // noise returns an int
      // between 0 and 1
      let colorShiftG = color * 255 // multiply the noise value by 255 (ex: 0.2 * 255 = 51)
      let colorShiftB = color * 255

      stroke(lerp(red, 0, fade), (lerp(colorShiftG, 0, fade)), (lerp(colorShiftB, 0, fade))); // use the color shifts in place of
      // g and b values. Use lerp (a mathmatical function) that interpolates between tw numbers
      line(-10,0,10,0);
      
      pop(); // Pops the stack back to no status
    }
  }
}
// use lerp between z and 0 to slowly stop rotating and they will slow down and do nothing
// eventually. :)


