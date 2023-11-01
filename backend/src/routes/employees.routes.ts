import { CreateEmployeeController } from '@modules/employees/useCases/createEmployee/CreateEmployeeController';
import { ListEmployeesController } from '@modules/employees/useCases/listEmployees/ListEmployeesController';
import { Router } from 'express';

const employeesRoutes = Router();

const createEmployeeController = new CreateEmployeeController();
const listEmployeesController = new ListEmployeesController();

employeesRoutes.post('/', createEmployeeController.handle);

employeesRoutes.get('/', listEmployeesController.handle);

export { employeesRoutes };
