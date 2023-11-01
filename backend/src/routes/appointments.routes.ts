import { CreateAppointmentController } from '@modules/bulletins/useCases/createAppointment/CreateAppointmentController';
import { ListAppointmentsByActivityIdController } from '@modules/bulletins/useCases/listAppointmentByActivityId/ListAppointmentsByActivityIdController';
import { ListAppointmentsController } from '@modules/bulletins/useCases/listAppointments/ListAppointmentsController';
import { Router } from 'express';

const appointmentsRoutes = Router();

const createAppointmentController = new CreateAppointmentController();
const listAppointmentsController = new ListAppointmentsController();
const listAppointmentsByActivityIdController = new ListAppointmentsByActivityIdController();

appointmentsRoutes.post('/', createAppointmentController.handle);

appointmentsRoutes.get('/', listAppointmentsController.handle);

appointmentsRoutes.get('/:activity_id', listAppointmentsByActivityIdController.handle);

export { appointmentsRoutes };
