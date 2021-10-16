class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  handleMousePressed(){

    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var msg = "Hello ${this.input.value()} </br> Waiting for the other Player to join"
      this.greeting.html(msg);
    });

  }
  
}
