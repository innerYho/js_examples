//non blocking
const getUserSync = (id) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000){
        //Search...
    }

    return {
        id, name: `User ${id}`
    };
}

//non blocking
const getUser = (id, callback) => {
    const user = {
        id, name: `User ${id}`
    };
    setTimeout(() => {
        callback(user)
    }, 3000);
}

module.exports = {
    getUser,
    getUserSync
}