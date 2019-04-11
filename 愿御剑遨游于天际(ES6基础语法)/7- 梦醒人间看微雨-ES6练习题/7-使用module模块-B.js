//import { name as nickname, bey } from './7-module-A'; //node暂不支持es6的 import 和 export
let {name,bey} = require('./7-module-A');
console.log(name);
name = "zhuzhu!"
bey(name)