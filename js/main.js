class Aluno {
    constructor(num, nome) {
        this.num = num;
        this.nome = nome;
    }
}
const ALUNOS = [
    new Aluno(1, 'claudia yamada'),
    new Aluno(2, 'geovanna ribeiro'),
    new Aluno(3, 'shirley paz'),
    new Aluno(4, 'mirella souza'),
    new Aluno(5, 'diogenes rabelo'),
    new Aluno(6, 'dowglas barros'),
    new Aluno(7, 'claudio shinohara'),
    new Aluno(8, 'joao alves'), 
    new Aluno(9, 'giuseppe matteoni'),
    new Aluno(10, 'marli'),
    new Aluno(11, 'fellipe arruda'),
    new Aluno(12, 'diego chagas'),
    new Aluno(13, 'vitor stipanich'),
    new Aluno(14, 'guilherme de mello'),
    new Aluno(15, 'vinicius ferreira'),
    new Aluno(16, 'felipe filgueira'),
    new Aluno(17, 'natalia maimoni'),
    new Aluno(18, 'patrick passarella'),
    new Aluno(19, 'rodrigo monteiro'),
    new Aluno(20, 'yanni fraga'),
    new Aluno(21, 'priscilla crisafulli'),
    new Aluno(22, 'gabriela cardoso'),
    new Aluno(23, 'rodrigo figueiredo'),
    new Aluno(24, 'matheus pereira'),
    new Aluno(25, 'gabriel cheda'),
    new Aluno(26, 'rafael reis'),
    new Aluno(27, 'fernando santos'),
    new Aluno(28, 'jessica gonzales'),
    new Aluno(29, 'alyf augusto'),
    new Aluno(30, 'bruno ferreira'),
    new Aluno(31, 'william rodrigues')
];

const JA_SORTEADO = new Set([Number]);

const getFormattedDate = function () {
    const curr = new Date(); 
    return curr.getDate() + "/"
           + (curr.getMonth()+1)  + "/" 
           +  curr.getFullYear() + " "  
           +  curr.getHours() + ":"  
           +  curr.getMinutes() + ":" 
           +  curr.getSeconds();    
}

const randomNum = function(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

const sortear = function () {
    JA_SORTEADO.add(randomNum(1, ALUNOS.length));
    return Array.from(JA_SORTEADO).pop();
}

const buildSorteado = function(sorteado) {
    const divSorteado = document.getElementsByClassName('sorteado')[0];
    /* HTML sendo representado no DOM */
    divSorteado.innerHTML = "<img alt='sorteado' class='imgsorteado' src='alunos/"+sorteado+".jpg' />";
}

const sortearSemRepetir = function() {
    var sorteado = 0;
    do { 
        sorteado = sortear();
    } while(!JA_SORTEADO.has(sorteado));
    return sorteado;
}

document.getElementById('btnSortear')
        .addEventListener('click', () => {
            //document.getElementById("btnSortear").style.display = 'none';
            let i=0;
            while(i<10000){
                setTimeout(function(){
                    //console.logdocument.getElementById("lista-alunos").childNodes("input").value;
                    var sorteado = sortearSemRepetir();
                    buildSorteado(sorteado);
                }, i);
                if(i<5000)
                    i+=300;
                else if(i<7000)
                    i+=500;
                else
                    i+=800;
            }
            //document.getElementById("btnSortear").style.display = "block";
        });


ALUNOS.forEach(function(aluno){
    let divListaAlunos = document.getElementById("lista-alunos");
    let input = `<label class="aluno-input"><input type="checkbox" name="aluno-${aluno.num}" value="${aluno.nome}" checked>${aluno.nome}</label>`;
    divListaAlunos.insertAdjacentHTML("beforeend", input);
});



retirar = new Array('vitor stipanich', 'diego chagas');
console.log(JA_SORTEADO);
console.log(ALUNOS);
console.log(ALUNOS.filter(elem => !retirar.includes(elem.nome)));

const limparSorteados = function() {
    JA_SORTEADO.clear();
}

document.getElementById('btnLimpar')
        .addEventListener('click', () => {
            limparSorteados();        
    });

buildSorteado(sortearSemRepetir());