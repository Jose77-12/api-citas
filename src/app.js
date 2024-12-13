import express from 'express';
import { json, urlencoded } from 'body-parser';
import citasRoutes from './routes/citasRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/citas', citasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;