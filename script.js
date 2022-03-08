let master = {
    control : 0,
    fM: firstMatrix = [""],
    sM: secondMatrix = [""],
    fV: firstValue = 0,
    sV: secondValue = 0,
    para: document.querySelector(".screen>p"),
    operation: 0,
    concatOp: false
}

function sum (a,b){
    return a+b;
}
function minus (a,b){
    return a-b;
}
function div (a,b){
    return a/b
}
function mult (a,b){
    return a*b
}
function expo(a,b){
    const initial = a
    if(b==0){return 1}
    if(b<0){
        if (a< 0){
            for (i = b; i< -1; i++){   
                a = Math.abs(a) * Math.abs(initial)
            } 
            return -1/a;        
        } else {
            for (i = b; i< -1; i++){   
                a = a*initial
            } 
            return 1/a;
        }
    }else{
        if (a > 0){
            for (i = 1; i< b; i++){   
                a = a*initial
            }
            return a;
        } else {
            for (i = 1; i< b; i++){   
                a = Math.abs(a) * Math.abs(initial)
            }
            return -a;
        } 
    }
}
function square(a){
    return Math.sqrt(a)
}
function compDot(){
    if (master.control === 0){
        return master.fM.some((element)=> element === ".")
    } else{
        return master.sM.some((element)=> element === ".")
    }
}
function changeSign(master) {
    if(master.control == 0){
        if (master.fM[0] == "-"){
            return master.fM[0] = ""
        } else{
            return master.fM[0] = "-"
        }
    } else{
        if (master.sM[0] == "-"){
            return master.sM[0] = ""
        } else{
            return master.sM[0] = "-"
        }
    }
}

function CE () {
    master.fM.splice(0,master.fM.length);
    master.sM.splice(0,master.sM.length);
    master.fM = [""];
    master.sM = [""];
    master.control = 0;
    master.concatOp = false
}

function rmv(master) {
    if (master.control === 0){
        master.fM.length >1? master.fM.splice(-1):null;
    }else{
        master.sM.length >1? master.sM.splice(-1):null;
    }
}

function putInput(input) {
    if (master.control === 0) {
       master.fM[master.fM.length] = input;
    }else{
       master.sM[master.sM.length] = input;
    }
}
function screen (){
    if(master.control === 0){
        console.log(master.control)
        master.para.textContent= (master.fM.join("")).substring(0,50)
    }
    else if (master.control === 1){
        if(master.sM.length == 1){
            master.para.textContent= (master.fM.join("")).substring(0,50)
        }else{
            master.para.textContent= (master.sM.join("")).substring(0,50)
        }
    }
}


function changeControl () {
    if ((!master.fM.length== false && master.control === 0) || (!master.sM.length== false && master.control === 1) && master.concatOp == false){
        master.control == 0? master.control = 1:master.control = 0;
    }
}

function compute(master) {
    if (master.control == 1){
        let tempo = calculate(master.operation,master)
        master.fM.splice(0,master.fM.length);
        master.sM.splice(0,master.sM.length);
        console.log(String(tempo))
        master.fM = Array.from(String(tempo));
        master.concatOp = true
        if(master.fM[0] != "-"){
            master.fM.unshift("");
        }
        master.sM.unshift("");
        console.log(master.fM)
    }
}

function selector (input, master){
    master.operation = input;
    if (master.sM.length != 1 || master.control ==0){
        compute(master, master.operation);
    }
    changeControl();
}

function calculate (input, master){
    master.fV= +master.fM.join("");
    console.log(master.fV+ ": este es el fv")
    master.sV= +master.sM.join("");
    console.log(master.sV+ ": este es el sv")

    let value = 0;
    switch(input){
        case 1: 
            return value = sum(master.fV,master.sV);
        case 2: 
            return value = minus(master.fV,master.sV);
        case 3: 
            return value = div(master.fV,master.sV);
        case 4: 
            return value = mult(master.fV,master.sV);
        case 5: 
            return value = expo(master.fV,master.sV);
        case 6: 
            return value = square(master.fV)
        default: break;
    }
    return value;
}

function listeners (master) {
    addEventListener("keydown", element => {
        if(element.key==1){
            putInput('1');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==2){
            putInput('2');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==3){
            putInput('3');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==4){
            putInput('4');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==5){
            putInput('5');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==6){
            putInput('6');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==7){
            putInput('7');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==8){
            putInput('8');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==9){
            putInput('9');
        }
    })
    addEventListener("keydown", element => {
        if(element.key==0){
            putInput('0');
        }
    })    
    addEventListener("keydown", element => {
        if(element.key=="."){
            if(compDot() != true) {putInput('.')}
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="+"){
            selector(1,master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="-"){
            selector(2,master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="/"){
            selector(3,master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="*"){
            selector(4,master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="^"){
            selector(5,master)
        }
    })
    addEventListener("keydown", (element) => {
        if(element.key=="s"){
            console.log(master)
            master.control = 1;
            putInput('')
            selector(6,master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="Backspace"){
            rmv(master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="Delete"){
            CE(master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="="){
            compute(master)
        }
    })
    addEventListener("keydown", element => {
        if(element.key=="Enter"){
            compute(master)
        }
    })
}
window.onload = function(){setInterval(()=> {
    screen()
},50);
listeners(master)
}

