var dog = 0;
var koala = 0;
var elephant = 0;
var cheetah = 0;



function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gtVgXtkYs/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_b + "," + random_number_g + ")";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_b + "," + random_number_g + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_b + "," + random_number_g + ")";    

        img = document.getElementById("noise");

        if (results[0].label == "Dogs Barking"){
            img.src = 'dog.jpeg';
            dog = dog + 1;
            document.getElementById("count").innerHTML = dog;
        }
        else if (results[0].label == "Koala sounds"){
            img.src = 'koala.jpeg';
            koala = koala + 1;
            document.getElementById("count").innerHTML = koala;
        }

        else if (results[0].label == "Cheetah calling"){
            img.src = 'cheetah.jpeg';
            cheetah = cheetah + 1;
            document.getElementById("count").innerHTML = cheetah;
        }

        else if (results[0].label == "Elephant noises"){
            img.src = 'elephant.jpeg';
            elephant = elephant + 1;
            document.getElementById("count").innerHTML = elephant;
        }
        else{
            img.src = 'download.jpeg';
         
        } 
    }
}