import { Employee } from '@modules/employees/entities/Employee';
import { Repository, getRepository } from 'typeorm';

import { IEmployeesRepository, ICreateEmployeeDTO } from '../IEmployeesRepository';

class EmployeesRepository implements IEmployeesRepository {
  private repository: Repository<Employee>;

  constructor() {
    this.repository = getRepository(Employee);
  }

  async create({
    name, code, image, active,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = this.repository.create({
      name, code, image, active,
    });

    await this.repository.save(employee);

    return employee;
  }

  async list(): Promise<Employee[]> {
    const activities = this.repository.find();
    return activities;
  }

  async findByCode(code: string): Promise<Employee> {
    const employee = await this.repository.findOne({ code });
    return employee;
  }
}

export { EmployeesRepository };
