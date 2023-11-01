import { Employee } from '@modules/employees/entities/Employee';

interface ICreateEmployeeDTO {
  name: string
  code: string
  active: boolean
  image: string
}

interface IEmployeesRepository {
  findByCode(code: string): Promise<Employee>
  list(): Promise<Employee[]>
  create({
    name, code, active, image,
  }: ICreateEmployeeDTO): Promise<Employee>
}

export { IEmployeesRepository, ICreateEmployeeDTO };
