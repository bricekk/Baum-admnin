var levelBtn = document.querySelector("select[name=level]")
const fileBtn = document.querySelector("input[type=file]")
var courseList;
var courseNone;
var checkBox = document.querySelectorAll("input[type=checkbox]")

fileBtn.onchange = event =>{
    let file = document.querySelector("input[type=file]").files[0]
    if (file.name.length != 0) {
        const fileName = document.getElementById("courseFile")
        fileName.style.color = "inherit"
    }
}

checkBox.forEach(element =>{
    element.onchange = event =>{

        if(element.checked==true){
            checkBox.forEach(elem =>{
                elem.disabled = true;
            })
        }else{
            checkBox.forEach(elem =>{
                elem.disabled = false;
            })
        }

        element.disabled = false;
    }
})

levelBtn.onchange = event => {
    var level = document.querySelector("select[name=level]").value;

    console.log(level)

    switch (level) {
        case "3eme":
            courseList = document.getElementById("course3eme");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "2ndA":
            courseList = document.getElementById("course2ndA");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "2ndC":
            courseList = document.getElementById("course2ndC");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "PA":
            courseList = document.getElementById("coursePA");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "PD":
            courseList = document.getElementById("coursePD");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "PC":
            courseList = document.getElementById("coursePC");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "TA":
            courseList = document.getElementById("courseTA");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "TD":
            courseList = document.getElementById("courseTD");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;
        case "TC":
            courseList = document.getElementById("courseTC");
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            courseList.style.display = "block";
            break;

        default:
            courseNone = document.querySelectorAll(".course");
            courseNone.forEach(element => {
                element.style.display = "none"
            });
            break;
    }
}
