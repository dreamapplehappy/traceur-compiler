class Greeter{
    constructor(_message){
        this.message = _message;
    }

    greet(){
        var ele = document.querySelector('#message');
        ele.innerHTML = this.message;
    }
}

var greeter = new Greeter('Hello, World');
greeter.greet();