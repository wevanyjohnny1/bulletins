import { AppError } from '@errors/AppError';
import { IBulletinsRepository } from '@modules/bulletins/repositories/IBulletinsRepository';
import { Employee } from '@modules/employees/entities/Employee';
import { IEmployeesRepository } from '@modules/employees/repositories/IEmployeesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string
  code: string
  active: boolean
  image: string
}

@injectable()
class CreateEmployeeUseCase {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,

    @inject('BulletinsRepository')
    private bulletinsRepository: IBulletinsRepository,
  ) {

  }

  async execute({
    name, code, active, image,
  }: IRequest): Promise<Employee> {
    const employeeAlreadyExists = await this.employeesRepository.findByCode(code);

    if (employeeAlreadyExists) {
      throw new AppError('Employee already exists!', 401);
    }

    const employee = this.employeesRepository.create({
      name, code, active, image,
    });

    await this.bulletinsRepository.create({ employee_id: (await employee).id });

    return employee;
  }
}

export { CreateEmployeeUseCase };
