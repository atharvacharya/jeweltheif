var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7e563bce-6a3b-4096-a5fa-44a02b769162","bcdc03c7-2f74-4686-a02c-46db09004ed7"],"propsByKey":{"7e563bce-6a3b-4096-a5fa-44a02b769162":{"name":"theif","sourceUrl":null,"frameSize":{"x":448,"y":512},"frameCount":1,"looping":true,"frameDelay":3,"version":"vsVCoxhSss4cSw2staRc9K6hROVs6w9X","loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":512},"rootRelativePath":"assets/7e563bce-6a3b-4096-a5fa-44a02b769162.png"},"bcdc03c7-2f74-4686-a02c-46db09004ed7":{"name":"diamond","sourceUrl":null,"frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":12,"version":"zrQJbqCFW17dqDYOUrKbpdg5HJYu3Dgf","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/bcdc03c7-2f74-4686-a02c-46db09004ed7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var level = 0;
var level1 = createSprite(250, 375);
level1.scale = 0.5;
var level2 = createSprite(120, 375);
level2.scale = 0.5;
var laser1 = createSprite(200, 270,350,20);
laser1.shapeColor="red";
var laser2 = createSprite(150, 250,300,20);
laser2.shapeColor="red";
var laser3 = createSprite(255, 330,300,20);
laser3.shapeColor="red";
var laser4 = createSprite(150, 150,300,20);
laser4.shapeColor="red";
var laseru1 = createSprite(200, 200,20,150);
laseru1.shapeColor="red";
var laseru2 = createSprite(250, 150,20,150);
laseru2.shapeColor="red";
var laseru3 = createSprite(300, 150,20,150);
laseru3.shapeColor="red";
var laseru4 = createSprite(150, 150,20,150);
laseru4.shapeColor="red";
var stop1 = createSprite(50, 200,110,20);
stop1.shapeColor="red";
var stop2 = createSprite(350, 150,110,20);
stop2.shapeColor="red";
var stop3 = createSprite(350, 250,110,20);
stop3.shapeColor="red";
var stop4 = createSprite(315, 70,110,20);
stop4.shapeColor="red";

var theif = createSprite(15, 385,10,10);
theif.setAnimation("theif");
theif.scale = 0.065;
var diamond = createSprite(364,44,20,20);
diamond.setAnimation("diamond");
diamond.scale = 0.1;

   laser1.velocityX=1;
  laser1.velocityY=0;
  laser2.velocityX=5;
  laser2.velocityY=0;
  laser3.velocityX=7;
  laser3.velocityY=0;
  laser4.velocityX=8;
  laser4.velocityY=0;
  laseru1.velocityY=9;
  laseru2.velocityY=6;
  laseru3.velocityY=4;
laseru4.velocityY=5;
  
 
  
function draw(){
  background("grey");
  if (mousePressedOver(level2)) {
    level = 2;
  }
  if (mousePressedOver(level1)) {
    level = 1;
  }
  if (level == 1) {
    background("pink");
    textSize(30);
    text("level 2", 150, 380);
    
  }
  createEdgeSprites();
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  laseru1.bounceOff(edges);
  laseru2.bounceOff(edges);
  laseru3.bounceOff(edges); 
  laseru4.bounceOff(edges);
  theif.bounceOff(edges);
  
  theif.velocityX=0;
  theif.velocityY=0;
  
  if (keyDown(UP_ARROW)) {
  theif.velocityX=0;
  theif.velocityY=-7;
  }
  if (keyDown(DOWN_ARROW)) {
  theif.velocityX=0;
  theif.velocityY=7;
  }
  if (keyDown(LEFT_ARROW)) {
  theif.velocityX=-7;
  theif.velocityY=0;
  }
  if (keyDown(RIGHT_ARROW)) {
  theif.velocityX=7;
  theif.velocityY=0;
  }
  
  if (theif.isTouching(laser1)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(laser2)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(laser3)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(laser4)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(laseru1)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(laseru2)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(laseru3)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(laseru4)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(stop1)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(stop2)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(stop3)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
  if (theif.isTouching(stop4)) {
  text("YOU LOSE", 200, 200);
 theif.x=15;
 theif.y=385;
  }
 if (theif.isTouching(diamond)) {
laser1.velocityX=0;
laser2.velocityX=0;
laser3.velocityX=0;
laser4.velocityX=0;
laseru1.velocityY=0;
laseru2.velocityY=0;
laseru3.velocityY=0;
laseru4.velocityY=0;
diamond.destroy();
  }
  if (laseru4.velocityY===0) {
  text("YOU WIN", 0, 15);
  textSize(45);  
  }
  drawSprites();
    }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
