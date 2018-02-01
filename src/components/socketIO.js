import io from 'socket.io-client';
export const socket = io.connect('localhost:4000');
