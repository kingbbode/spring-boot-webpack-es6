class Common4 {
    constructor(who){
        this.x = 'Common4 by ' + who;
        console.log('new Instance loaded ' + this.x);
    }
    toString(who){
        console.log(this.x + ' toString() call! by ' + who);
    }
}

export default Common4;