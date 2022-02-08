const meses = [31,28,31,30,31,30,31,31,30,31,30,31]; //Array dos Meses

function calcular(){
    let hoje = new Date();
    let datadoinput = new Date(document.getElementById("datadoinput").value);
    let nivermes,niverdia, niverano;

    let nivertalhes = {
        data:datadoinput.getDate(),
        mes:datadoinput.getMonth() +1,
        ano:datadoinput.getFullYear()
    }
    let currentYear = hoje.getFullYear();
    let currentMonth = hoje.getMonth() +1;
    let currentDate = hoje.getDate();

    leapChecker(currentYear);

    if(nivertalhes.ano > currentYear || 
        (nivertalhes.mes > currentMonth && nivertalhes.ano == currentYear) || 
        (nivertalhes.data > currentDate && nivertalhes.mes == currentMonth && nivertalhes.ano == currentYear))
    {
        alert("Não nasceu ainda");
        displayResult("-","-","-");
        return;
    }

    niverano = currentYear - nivertalhes.ano;

    if(currentMonth >= nivertalhes.mes){
        nivermes = currentMonth - nivertalhes.mes;
    }else{
        niverano--;
        nivermes = 12 + currentMonth - nivertalhes.mes;
    }

    if(currentDate >= nivertalhes.data) {
        niverdia = currentDate - nivertalhes.data;
    }else{
        nivermes--;
        let dias = meses[currentMonth -2];
        niverdia = dias + currentDate - nivertalhes.data;
        if(nivermes < 0){
            nivermes = 11;
            niverano--;
        }
    }
    displayResult(niverdia,nivermes,niverano);
}

function displayResult(ODia,OMes,OAno){
    document.getElementById("ano").textContent = OAno;
    document.getElementById("meses").textContent = OMes;
    document.getElementById("dias").textContent = ODia;
}


function leapChecker(ano){
    if(ano % 4 == 0 || (ano % 100 == 0 && ano % 400 == 0)){
        meses [1] = 29;
    }
    else {
        meses [1] = 28;
    }
}