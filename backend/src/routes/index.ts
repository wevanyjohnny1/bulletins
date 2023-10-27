import { Router } from 'express';

import { activitiesRoutes } from './activities.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/activities', activitiesRoutes);
router.use('/users', usersRoutes);

export { router };
