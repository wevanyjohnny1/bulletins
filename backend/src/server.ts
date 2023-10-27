import express from 'express';

import { activitiesRoutes } from './routes/activities.routes';

const app = express();

app.use(express.json());

app.use('/activities', activitiesRoutes);

app.listen(3333, () => console.log('Server is running'));
