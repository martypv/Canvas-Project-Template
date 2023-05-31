/**
 * Created by Martin on 2/5/18.
 */
/**
 * Created by Martin on 1/25/18.
 */

//Execute the eventWindowLoaded function
window.addEventListener("load",eventWindowLoaded, false);

//Called when the window has been loaded it then calls the canvasapp()
function eventWindowLoaded() {
    canvasApp();
}


//Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
}


//The function where ALL our canvas code will go
function canvasApp() {


    if (!canvasSupport()) {
        return;
    }


    //Set up the canvas object
    var theCanvas = document.getElementById("myCanvas");
    var context = theCanvas.getContext("2d");

    //Canvas dimensions
    var canvasHeight = theCanvas.height;
    var canvasWidth = theCanvas.width;

    //Set canvas color
    var canvasColor = "gray";

    var images = [];
    var imagesSource = [""];

    // load all the images
    function loadImages( images, imagesSource, callback ) {
        var loadedImages = 0;

        // for each imageSource
        for ( var src = 0; src < imagesSource.length; src++ ) {
            //create a new image object
            images[src] = new Image();

            //load the image
            images[src].onload = function() {
                if( ++loadedImages >= imagesSource.length ) {
                    callback( images );
                };
            }
            //set the image source
            images[src].src = imagesSource[src];
        }
    }

    //draw the canvas
    function drawCanvas() {

        //clear the canvas
        clearCanvas( canvasColor );
        
        //CODE GOES HERE



    }


    // clear canvas
    function clearCanvas( ) {

        //Set fill style
        context.fillStyle = canvasColor;

        //Fill canvas with color
        context.fillRect(0, 0, canvasWidth , canvasHeight);

    }


    var frameCounter = 0;

    function loop() {
        requestAnimationFrame(loop);
        frameCounter++;
        drawCanvas();
    }

    //load the images
    loadImages( images, imagesSource, function(images) {
        // draw the canvas
        loop();
    });



}