var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('Beautiful-Cake-.jpg', function (Img) {
        Block_image_object = Img;

        Block_image_object.scaleToWidth(1024)
        Block_image_object.scaleToHeight(683)
        Block_image_object.set({
	    top:0,
        left:0,   
        });
        canvas.add(Block_image_object)
        });
    }

function play() {
x.play()

}