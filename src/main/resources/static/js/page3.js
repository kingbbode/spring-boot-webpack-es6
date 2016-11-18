import Common1 from './modules/common1.js'
import Common3 from './modules/common3.js'
import Common6 from './modules/common6.js'

let name = 'page3';
let common6 = new Common6(name);
let common1 = new Common1(name, common6);
let common3 = new Common3(name, common6);
common1.toString(name);
common3.toString(name);