import Common1 from './common/common1.js'

class Page1 {
    constructor(x){
        this.x = x + ' Page1';
    }
    toString(){
        let common1 = new Common1(this.x);
        return common1.toString();
    }
}

export default Page1;