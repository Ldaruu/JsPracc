const customer = {
    name: 'Bob Bobby',
    speak: function() {
        return 'My name is '+ this.name;
    },
    address: {
        street: '123 Main Street',
        city: 'Denver',
        state: 'CO'
    }
}
console.log(customer.speak());
customer.address.country = 'US';
console.log(customer.address);

function Person(name, age, city){
this.name = name;
this.age = age;
this.city = city;

this.info = function(){
    return 'My name is '+ this.name + ', I am '+ this.age + ' and I live in ' + this.city;
 }  
 
}

let adam = new Person('Adam Smith', 28, 'London');
console.log(adam.info());

