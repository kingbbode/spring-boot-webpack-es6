import Common2 from './common/common2.js'
import Common3 from './common/common3.js'

class Page2 {
    constructor(x){
        this.x = x + ' Page2';
    }
    toString(){
        let common2 = new Common2(this.x);
        let common3 = new Common3(this.x);
        return common2.toString() + " & " + common3.toString();
    }
}

export default Page2;