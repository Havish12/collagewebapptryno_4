setTimeout(function ()
{
    img_id = "result1";
    take_snapshot();
    speak_data = "Taking your next selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function ()
{
    img_id = "result2";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 10000);

setTimeout(function ()
{
    img_id = "result3";
    take_snapshot();
    speak_data = "Taking your next selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 15000);

function take_snapshot()
{
    console.log(selfie1);

    Webcam.snap(function(data_uri)
    {
        if(img_id=="result1")
        {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src"'+data_uri+'"/>';
        }

        if(img_id=="result2")
        {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src"'+data_uri+'"/>';
        }

        if(img_id=="result")
        {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src"'+data_uri+'"/>';
        }
    })
}

function start()
{
    
}