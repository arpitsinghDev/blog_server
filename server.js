import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import postsRoute from './routes/posts.js';

config();
const app = express();

app.use(json());
app.use('/api/posts', postsRoute);

try {
    await connect(process.env.MONGO_URI, {});
    console.log('Database connected successfully');
} catch(error) {
    console.log("error while connecting to database",error);
}
