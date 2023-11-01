import { Router } from 'express';

import { activitiesRoutes } from './activities.routes';
import { appointmentsRoutes } from './appointments.routes';
import { bulletinsRoutes } from './bulletins.routes';
import { employeesRoutes } from './employees.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/activities', activitiesRoutes);
router.use('/users', usersRoutes);
router.use('/appointments', appointmentsRoutes);
router.use('/employees', employeesRoutes);
router.use('/bulletins', bulletinsRoutes);

export { router };
