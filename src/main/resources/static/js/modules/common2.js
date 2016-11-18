import Common5 from './common5'

class Common2 {
    constructor(who, common6){
        this.x = 'Common2 by ' + who;
        console.log('new Instance loaded ' + this.x);
        let common5 = new Common5(this.x);
        common5.toString(this.x);
        common6.toString(this.x);
    }
    toString(who){
        console.log(this.x + ' toString() call! by ' + who);
    }
}

export default Common2;