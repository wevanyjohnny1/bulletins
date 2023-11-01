import { CreateBulletinController } from '@modules/bulletins/useCases/createBulletin/CreateBulletinController';
import { CreateBulletinAppointmentController } from '@modules/bulletins/useCases/createBulletinAppointment/CreateBulletinAppointmentController';
import { ListBulletinsController } from '@modules/bulletins/useCases/listBulletins/ListBulletinsController';
import { ListBulletinsByEmployeeIdController } from '@modules/bulletins/useCases/listBulletinsByEmployeeId/ListBulletinsByEmployeeIdController';
import { Router } from 'express';

const bulletinsRoutes = Router();

const createBulletinController = new CreateBulletinController();
const listBulletinsController = new ListBulletinsController();
const listBulletinsByEmployeeIdController = new ListBulletinsByEmployeeIdController();
const createBulletinAppointmentController = new CreateBulletinAppointmentController();

bulletinsRoutes.post('/', createBulletinController.handle);

bulletinsRoutes.get('/', listBulletinsController.handle);

bulletinsRoutes.get('/:employee_id', listBulletinsByEmployeeIdController.handle);

bulletinsRoutes.post('/appointments/:bulletin_id', createBulletinAppointmentController.handle);

export { bulletinsRoutes };
