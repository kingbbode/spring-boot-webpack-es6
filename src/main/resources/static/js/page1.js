import Common1 from './modules/common1.js'
import Common6 from './modules/common6.js'

let name = 'page1';
let common6 = new Common6(name);
let common1 = new Common1(name, common6);
common1.toString(name);