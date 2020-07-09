
const users = [];

const isUserExist = ({roomName, userName}) => {

    const existingUSer = users.find(user => user.roomName === roomName && user.userName == userName);

        if(existingUSer) return true;

        return false;
}

const addUser = ({id, roomName, userName}) => {

    roomName = roomName.trim().toLowerCase();
    userName = userName.trim().toLowerCase();

    const existingUSer = isUserExist({roomName, userName});
    if(existingUSer){
        return ({error : "username is taken"});
    }
    const user = {id, roomName, userName};
    
       users.push(user);
       return ({user});
}
const removeUser = (id) => {
    const index = users.findIndex(user => user.id == id);
    if(index != -1){
        return users.splice(index, 1)[0];
    }
    
}
const getUser = (id) => users.find(user => user.id === id) ;

const getUsersInRoom = (roomName) =>  users.filter(user => user.roomName === roomName);
    

module.exports = {isUserExist , addUser, removeUser,getUser,getUsersInRoom}
