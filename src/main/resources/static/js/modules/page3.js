import Common1 from './common/common1.js'
import Common2 from './common/common2.js'
import Common3 from './common/common3.js'

class Page3 {
    constructor(x){
        this.x = x + ' Page3';
    }
    toString(){
        let common1 = new Common1(this.x);
        let common2 = new Common2(this.x);
        let common3 = new Common3(this.x);
        return common1.toString() + " & " + common2.toString() + " & " + common3.toString();
    }
}

export default Page3;