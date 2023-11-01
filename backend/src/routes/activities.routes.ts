import { CreateActivityController } from '@modules/bulletins/useCases/createActivity/CreateActivityController';
import { ListActivitiesController } from '@modules/bulletins/useCases/listActivities/ListActivitiesController';
import { Router } from 'express';

const activitiesRoutes = Router();

const createActivityController = new CreateActivityController();
const listActivitiesController = new ListActivitiesController();

activitiesRoutes.post('/', createActivityController.handle);

activitiesRoutes.get('/', listActivitiesController.handle);

export { activitiesRoutes };
