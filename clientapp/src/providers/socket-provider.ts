import * as io from 'socket.io-client';



export class socketProvider {
    socket : any = null;
    constructor(){
        this.socket = io('http://localhost:1337');
    }
    emit(event,data){
        this.socket.emit(event,data);
    }
    on (event,callback){
        this.socket.on(event,callback);
    }
}