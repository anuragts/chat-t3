import {z} from "zod";
import {Server} from "socket.io";

import {createTRPCRouter, publicProcedure, protectedProcedure} from "../trpc";

const io = new Server(3000);
export const websocketRouter = createTRPCRouter({
    connect : publicProcedure.query(() => {
        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.emit("connected", "connected");
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });

        return {message: "connected"};
    })
})