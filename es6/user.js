export default class User { // มีการเติมคำว่า default ไป หลัง export

    constructor(name) {
        this.name = name;
    }

    sayHi(){
        console.log('Hi '+ this.name)
    }

}