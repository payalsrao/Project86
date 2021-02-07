var canvas = new fabric.Canvas('myCanvas');
block_image_width=50;
block_image_height=50;
player_x=150;
player_y=150;
var player_object="";

function player_update(){
    fabric.Image.fromURL("download.jpg", function(Img)
    {
player_object=Img;
player_object.scaleToWidth(250);
player_object.scaleToHeight(300);
player_object.set({
    top:player_y, left: player_x
});
canvas.add(player_object);

    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y, left: player_x
});
canvas.add(block_image_object);

    });
}
player_update();