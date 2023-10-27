import { CreateActivityController } from '@modules/bulletins/useCases/createActivity/CreateActivityController';
import { ListActivitiesController } from '@modules/bulletins/useCases/listActivities/ListActivitiesController';
import { Router } from 'express';

const activitiesRoutes = Router();

const createActivityController = new CreateActivityController();
const listAcitivitesController = new ListActivitiesController();

activitiesRoutes.post('/', createActivityController.handle);

activitiesRoutes.get('/', listAcitivitesController.handle);

export { activitiesRoutes };
