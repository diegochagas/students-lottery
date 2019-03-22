const defaultStudentImageId = 0;
const students = [
  {id: 1, name: 'claudia yamada', drawnDate: ""},
  {id: 2, name: 'geovanna ribeiro', drawnDate: ""},
  {id: 3, name: 'shirley paz', drawnDate: ""},
  {id: 4, name: 'mirella souza', drawnDate: ""},
  {id: 5, name: 'diogenes rabelo', drawnDate: ""},
  {id: 6, name: 'dowglas barros', drawnDate: ""},
  {id: 7, name: 'claudio shinohara', drawnDate: ""},
  {id: 8, name: 'joao alves', drawnDate: ""},
  {id: 9, name: 'giuseppe matteoni', drawnDate: ""},
  {id: 10, name: 'marli', drawnDate: ""},
  {id: 11, name: 'fellipe arruda', drawnDate: ""},
  {id: 12, name: 'diego chagas', drawnDate: ""},
  {id: 13, name: 'vitor stipanich', drawnDate: ""},
  {id: 14, name: 'guilherme de mello', drawnDate: ""},
  {id: 15, name: 'vinicius ferreira', drawnDate: ""},
  {id: 16, name: 'felipe filgueira', drawnDate: ""},
  {id: 17, name: 'natalia maimoni', drawnDate: ""},
  {id: 18, name: 'patrick passarella', drawnDate: ""},
  {id: 19, name: 'rodrigo monteiro', drawnDate: ""},
  {id: 20, name: 'yanni fraga', drawnDate: ""},
  {id: 21, name: 'priscilla crisafulli', drawnDate: ""},
  {id: 22, name: 'gabriela cardoso', drawnDate: ""},
  {id: 23, name: 'rodrigo figueiredo', drawnDate: ""},
  {id: 24, name: 'matheus pereira', drawnDate: ""},
  {id: 25, name: 'gabriel cheda', drawnDate: ""},
  {id: 26, name: 'rafael reis', drawnDate: ""},
  {id: 27, name: 'fernando santos', drawnDate: ""},
  {id: 28, name: 'jessica gonzales', drawnDate: ""},
  {id: 29, name: 'alyf augusto', drawnDate: ""},
  {id: 30, name: 'bruno ferreira', drawnDate: ""},
  {id: 31, name: 'william rodrigues', drawnDate: ""}
];
const temporaryStudents = students;
const drawnStudents = [];
const randomNum = (min, max) => Math.round(Math.random() * (max-min) + min);

function drawStudent () {
  const drawNumber = randomNum(0, temporaryStudents.length - 1);
  const student = temporaryStudents[drawNumber];
  return student;
}

function updateStudentsLists(student){
  drawnStudents.push(student);
  let studentIndex = 0;
  for(let i = 0; i < temporaryStudents.length; i++){
    if (temporaryStudents[i].id === student.id) {
      studentIndex = i;
      break;
    } 
  }
  temporaryStudents.splice(studentIndex, 1);
}

function showStudent(studentId) {
  document.getElementById('student').innerHTML = `<div id='imgDraw'/>`;
  document.getElementById('imgDraw').style.backgroundImage = style=`url('./src/images/students/${studentId}.jpg')`;
}

function updateListOfDrawnStudents (studentId) {
  const tagImg = `<img class ='image-drawn-students' src='./src/images/students/${studentId}.jpg'/>`;
  document.getElementById('container-drawn-students').innerHTML += tagImg;
}

function loadingStudents(){
  let i = 0;
  do {
    setTimeout(function(){
      const student = drawStudent();
      showStudent(student.id);
      if(i < 5000) {
        i+=300;
      } else if(i < 7000) {
        i += 500;
      } else {
        i += 800;
      }
    }, i);
  } while (i < 10000);
}

function playAudio(){
  const audioElement = `
    <audio autoplay>
      <source src="src/audios/peao.mp3" type="audio/mpeg">
    </audio>
  `;
  document.getElementById('container-audio').innerHTML = audioElement;
}

function stopAudio(){
  document.getElementById('container-audio').innerHTML = "";
}

function disableButton(buttton){
  event.target.disabled = true;
}

function enableButton(button){
  button.disabled = false;
}

document.getElementById('btnDraw').addEventListener('click', (event) => {
  const isLastElement = temporaryStudents.length === 1;
  playAudio();
  if(isLastElement){
    disableButton(event.target);
  }
  loadingStudents()
    .then(() => {
      const student = drawStudent();
      showStudent(student.id);
      updateStudentsLists(student);
      updateListOfDrawnStudents(student.id);
      stopAudio();
      if(!isLastElement) {
        enableButton(event.target);
      }
    }).then(() => 
      resolve
    ).catch(err => {
      stopAudio();
      console.error(`Function loading students doesn't work: ${err}`);
    });
});

showStudent(defaultStudentImageId);