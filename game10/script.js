window.onload = function() {

	var cnv = document.getElementById("canvas");
	cnv.width = Crafty.window.width;
	cnv.height = Crafty.window.height;
	Crafty.init(50);
	Crafty.canvas(cnv);

	Crafty.sprite(64, "images/sprite.png", {
		player: [0,0,1,1]
		
	});
	
	var player = Crafty.e("2D, canvas, player");


};