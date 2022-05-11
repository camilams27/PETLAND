const img = document.getElementById('img');
const button = document.getElementById('submit_button');
const input = document.getElementById('image_url');
const result = document.getElementById('prediction');

let model;

button.onclick = () => {
    const url = input.value;
    img.src = url;
    result.innerText = "Loading...";
    console.log('hey');
}

img.onload = () => {
    doPrediction();
}

function doPrediction() {
    if( model ) {
        model.classify(img).then(predictions => {
            showPrediction(predictions);
        });
    } else {
        mobilenet.load().then(_model => {
            model = _model;
            model.classify(img).then(predictions => {
                showPrediction(predictions);
            });
        });
    }
}

function showPrediction(predictions) {
    result.innerText = "Pode ser ... \n" + 
    predictions[0].className + ', \n Probabilidade de: ' + predictions[0].probability +'\n  \n' + 
    predictions[1].className + ', \n Probabilidade de: ' + predictions[1].probability +'\n \n' +  predictions[2].className + ', \n Probabilidade de: ' + predictions[2].probability +'\n ';
}