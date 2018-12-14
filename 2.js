// task 1
FirstTask();

function FirstTask() {
    var task_1 = prompt("Тест", '');
    if (task_1 > 0) {
        alert('1');
    }
    else if (task_1 < 0) {
        alert('-1');
    }
    else if (task_1 == 0) {
        alert('0');
    }
}
//task 2
SecondTask();

function SecondTask() {
    var login = prompt('Who is there?','');
   
    if (login == 'Admin') {
        alert('Password?');
    } else if (login != 'Admin')  {
        alert('I don"t know you');
    }

    var password = prompt('Password?','');
    if (login == 'Admin' && password == 'TheMaster') {
        alert('Welcome!');
    }else if (login == 'Admin' && password !== 'TheMaster') {
        alert('Wrong password');
    } 
}

//Maximum
Maximum();
function Maximum() {
    login = prompt('Who is there?','');
  
    switch(login) {

        case 'Admin': {
            alert('Password?');
            break;
        }

        default: {
            alert('U don"t know you');
        }
    }
    var password = prompt('Password?','');
    switch(login && password) {

        case 'Admin' && 'TheMaster': {
            alert('Welcome!');
            break;
        }

        default: {
            alert('Wrong password');
        }
    }
}
