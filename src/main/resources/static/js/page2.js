import Common2 from './modules/common2.js'
import Common3 from './modules/common3.js'
import Common6 from './modules/common6.js'

let name = 'page2';
let common6 = new Common6(name);
let common2 = new Common2(name, common6);
let common3 = new Common3(name, common6);
common2.toString(name);
common3.toString(name);