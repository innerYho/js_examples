const {getUser} = require('./user/user');

console.log('Start the program')
console.time('start_time')

getUser(1, (user)=>{
    console.log('User 1: ', user)
})

getUser(2, (user)=>{
    console.log('User 2: ', user)
    console.timeEnd('start_time')
});

console.log('End program')
// 3 seconds aprox

// cd node_blocking_vs_non_blocking
//    node app_non_blocking