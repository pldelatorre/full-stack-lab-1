import type { Employees } from '../../components/interface/employees';
import { Department } from '../../components/interface/department';
import employeeData from '../../assets/employees.json';

let employees: Employees[] = Object.entries(employeeData).map(([department, members]) => ({
  department: department as Department,
  name: members as string[],
}));

export function getAllEmployees(): Employees[] {
  return employees;
}

export function getEmployeesByName(name: string): Employees | undefined {
  const employee = employees.find((e) => e.name.includes(name));
  if (!employee) {
    throw new Error(`Employee with name ${name} was not found`);
    }
  return employee;
}

export async function createEmployee(employee: Employees) {
    employees.push(employee);
    return employee;
}

export async function updateEmployee(updatedEmployee: Employees) {
    const index = employees.findIndex((e) => e.name === updatedEmployee.name);
    if (index === -1) {
        throw new Error(`Employee with name ${updatedEmployee.name} was not found`);
    }
    employees[index] = updatedEmployee;
    return updatedEmployee;
}

export async function deleteEmployee(name: string) {
    const index = employees.findIndex((e) => e.name.includes(name));
    if (index === -1) {
        throw new Error(`Employee with name ${name} was not found`);
    }
    employees.splice(index, 1);
    return { message: `Employee with name ${name} was deleted` };
}
