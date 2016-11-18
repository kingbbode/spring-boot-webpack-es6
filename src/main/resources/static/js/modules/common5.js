class Common5 {
    constructor(who){
        this.x = 'Common5 by ' + who;
        console.log('new Instance loaded ' + this.x);
    }
    toString(who){
        console.log(this.x + ' toString() call! by ' + who);
    }
}

export default Common5;