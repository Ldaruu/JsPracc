function Animal(){
    this.name ='Animal';

    this.toString = function(){
        return 'My name is '+ this.name;
    };
}
function Junior(){
    this.name = 'Junior';
}
function Rabbit(){
    this.name = 'Rabbit';
}
Junior.prototype = new Animal();
Rabbit.prototype =  new Junior();

Junior.prototype.consturcor = Junior;
Rabbit.prototype.consturcor = Rabbit;

let miniLoop =  new Rabbit();

console.log(miniLoop.toString());
console.log('MiniLoop instance of Animal: '+ miniLoop instanceof Animal);

function Vehicle(name){
    this.name = "Vehicle";
}
Vehicle.prototype = {
    drive: function(){
        return this.name + " drive forward";
    },
    stop: function(){
        return this.name + " stops";
    }
}
function Truck(name){
    this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.consturcor = Truck;

Truck.prototype.drive = function(){
    let driveMsg = Vehicle.prototype.drive.apply(this);

    return driveMsg += " through everything";
}

const jeep = new Truck("Jeep");
console.log(jeep.drive());
console.log(jeep.stop());