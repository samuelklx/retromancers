import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


// Read in .env variables
dotenv.config();


// Instantiate express application
const app: Application = express();

// Sets the port number. parseInt ensures that if no port is set in the env file, it defaults to 5000
const PORT: number = parseInt(process.env.PORT || '5000')   

// ---Middleware---
// Layer that allows frontend to talk to the backend and parse incoming data correctly

// Allows frontend to communicate with backend
app.use(cors());

//Parse incoming JSON requests into JS objects
app.use(express.json());


// ---Routes---

// GET / root route.  Confirms API is running.
app.get('/', (req: Request, res: Response) => {
    res.json({ message: "You found Bit's API!" });
});

// ---Start Server---

// Bind and listen to PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});