import { Employee } from '@modules/employees/entities/Employee';
import { IEmployeesRepository } from '@modules/employees/repositories/IEmployeesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListEmployeesUseCase {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {

  }

  async execute(): Promise<Employee[]> {
    const employees = await this.employeesRepository.list();

    return employees;
  }
}

export { ListEmployeesUseCase };
