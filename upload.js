
import { getStorage, ref as sRef, uploadBytes } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-storage.js";
import { getDatabase, ref as baseRef, set } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

let btn = document.querySelector("button");
var AnId;
var storageRef;
//const db = getDatabase();


btn.addEventListener('click', (e) => {
    let input = document.querySelector("input[type=file]").files[0]
    let level = document.querySelector("select[name=level]").value;
    var checkBox = document.querySelectorAll("input[type=checkbox]")
    let inputTitle = document.querySelector("input[type=text]")
    const ttile = inputTitle.value
    

    const storage = getStorage();
    

    checkBox.forEach(element =>{
        if(element.checked == true){
            AnId = element.attributes[2].nodeValue
        }
    })
    
    switch(level){
        case "TD":
            switch(AnId){
                case "isCourse":
                    storageRef = sRef(storage, "classes/TleD/cours/"+ttile)
                    uploadBytes(storageRef, input).then((snapshot) => {
                        console.log('Uploaded a blob or file!');
                    });
                    break;
                case "isExercise":
                    storageRef = sRef(storage, "classes/TleD/exercices/"+ttile)
                    uploadBytes(storageRef, input).then((snapshot) => {
                        console.log('Uploaded a blob or file!');
                    });
                    break;
                case "isExam":
                    storageRef = sRef(storage, "classes/TleD/sujets/"+ttile)
                    uploadBytes(storageRef, input).then((snapshot) => {
                        console.log('Uploaded a blob or file!');
                    });
                    break;
            }
        break;
    }


})

function GetFileName(data){
    var temp = data.name.split('.')
    var fname = temp.slice(0,-1).join('.')
    return fname
}

