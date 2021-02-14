function bounceOff(mr1, mr2 ) {


    if (mr1.x - mr2.x < mr1.width/2 + mr2.width/2
      && mr2.x - mr1.x < mr2.width/2 + mr1.width/2) {
    mr1.velocityX = mr1.velocityX * (-1);
    mr2.velocityX = mr2.velocityX * (-1);
  }
  if (mr1.y - mr2.y < mr1.heigth/2 + mr2.heigth/2
    && mr2.y - mr1.y < mr2.heigth/2 + mr1.heigth/2) {
  mr1.velocityY = mr1.velocityY * (-1);
  mr2.velocityY = mr2.velocityY * (-1);
  }
  
  
  
  
  
  
  
  }
  
  
  
  
  