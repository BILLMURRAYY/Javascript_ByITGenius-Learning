// Import วิธีที่ 1
import { sayHi, sayBye } from './say.js'

// Import วิธีที่ 2
import * as say from './say.js'

// Import วิธีที่ 3
import { sayHi as sh, sayBye as sb } from './say.js'

sayHi('John')
sayBye('John')

say.sayHi('John')
say.sayBye('John')

sh('John')
sb('John')

// Import Class ที่มีการกำหนด Default
import User from './user.js'

// สร้าง object
const obj = new User('John')
console.log(obj.name);
obj.sayHi()
