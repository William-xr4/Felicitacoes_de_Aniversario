var canvas = new fabric.Canvas('myCanvas');
var som = document.getElementById("myAudio");
var objeto_da_imagem;

function newImage()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(img){
        objeto_da_imagem = img;
        objeto_da_imagem.scaleToWidth(700);
        objeto_da_imagem.scaleToHeight(510);
        objeto_da_imagem.set({
            top:0,
            left:0
        });
        canvas.add(objeto_da_imagem);
    });
}

function tocar(){
	som.play();
}
