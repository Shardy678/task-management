import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Management Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});