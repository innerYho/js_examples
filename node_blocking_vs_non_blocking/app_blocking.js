const {getUserSync} = require('./user/user');

console.log('Start the programm.');
console.time('start_time');

const user1 = getUserSync(1);
console.log('User 1: ', user1);

const user2 = getUserSync(2);
console.log('User 2: ', user2)

console.log('The end of program')
console.timeEnd('start_time')

//6 seconds aprox

// cd node_blocking_vs_non_blocking
//    node app_blocking