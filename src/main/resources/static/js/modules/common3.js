import Common4 from './common4'
import Common5 from './common5'

class Common3 {
    constructor(who, common6){
        this.x = 'Common3 by ' + who;
        console.log('new Instance loaded ' + this.x);
        let common4 = new Common4(this.x); 
        let common5 = new Common5(this.x);
        common4.toString(this.x);
        common5.toString(this.x);
        common6.toString(this.x);
    }
    toString(who){
        console.log(this.x + ' toString() call! by ' + who);
    }
}

export default Common3;