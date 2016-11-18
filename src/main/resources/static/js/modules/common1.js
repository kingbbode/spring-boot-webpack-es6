import Common4 from './common4'

class Common1 {
    constructor(who, common6){
        this.x = 'Common1 by ' + who;
        console.log('new Instance loaded ' + this.x);
        let common4 = new Common4(this.x);
        common4.toString(this.x);
        common6.toString(this.x);
    }
    toString(who){
        console.log(this.x + ' toString() call! by ' + who);;
    }
}

export default Common1;