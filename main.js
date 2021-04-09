Webcam.set({
    height : 300,
    width : 300,
    image_format : "png",
    png_quality : 90
})
Webcam.attach("#camera")

function capture(){
    Webcam.snap(
    function (img) {
            document.getElementById("snapshot").innerHTML=`<img src=${img} id="selfie">`
    }
    )
}
console.log("ml5version= ".ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1Lg1h6bgt/model.json",modelLoaded)

function modelLoaded(){
    console.log("Ethan your model is loaded successfully!")
}

function identify(){
    img=document.getElementById("selfie")
    classifier.classify(img,getResult)
}

function getResult(error,results) {
    if (error) {
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("obj-result").innerHTML=results[0].label
        document.getElementById("accu-result").innerHTML=results[0].confidence.toFixed(3)
    }
}