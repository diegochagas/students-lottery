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
  const drawNumber = randomNum(1, temporaryStudents.length);
  const student = temporaryStudents.find(temporaryStudent => temporaryStudent.id === drawNumber);
  return student;
}

function updateStudentsLists(student){
  drawnStudents.push(student);
  temporaryStudents.splice(temporaryStudents.indexOf(drawStudent), 1);
}

function showStudent(studentId) {
  document.getElementById('student').innerHTML = `<div id='imgDraw'/>`;
  document.getElementById('imgDraw').style.backgroundImage = style=`url('./src/images/students/${studentId}.jpg')`;
}

function updateListOfDrawnStudents (studentId) {
  const tagImg = `<img class ='drawn-students' src='./src/images/students/${studentId}.jpg'/>`;
  document.getElementById('drawn-students').appendChild(tagImg);
}


/*
function loadingStudents(){
  let i = 0;
  while(i < 10000){
    setTimeout(function(){
      showStudent(randomNum(1, temporaryStudents.length))
    }, i);
    if(i<5000) {
      i+=300;
    } else if(i<7000) {
      i+=500;
    } else {
      i+=800;
    }
  }
  return true;
}
*/

document.getElementById('btnDraw').addEventListener('click', () => {
  // loadingStudents();
  const student = drawStudent();
  showStudent(student.id);
  updateStudentsLists(student);
});

showStudent(defaultStudentImageId);