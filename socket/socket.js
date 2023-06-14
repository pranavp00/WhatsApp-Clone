import { PORT } from '../index.js';
import { Server } from 'socket.io';



const socketPORT = process.env.PORT || 9000;

const socketConnection = () => {

    try{

        const io = new Server( socketPORT, {
            cors: {
                origin: `http://localhost:${PORT}`
            }
        })
        
        let users = [];
        
        const addUser = (userData, socketId) => {
            !users.some(user => user.sub == userData.sub) && users.push({ ...userData, socketId });
        }
        
        const getUser = (userId) => {
            return users.find(user => user.sub === userId)
        }
        
        io.on('connection', (socket) => {
            console.log('user connected');
            socket.on("addUsers", userData => {
                addUser(userData, socket.id);
                io.emit("getUsers",users);
            })
        
            socket.on('sendMessage', data => {
                const user = getUser(data.receiverId);
                io.to(user.socketId).emit('getMessage',data);
            })
        })

    }catch (error){
        console.log(error)
    }

}

export default socketConnection


