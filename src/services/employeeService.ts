import * as employeeRepo from '../apis/employees/employeeRepo';
import type { Employees } from '../components/interface/employees';
import { Department } from '../components/interface/department';

export async function getAllEmployees(): Promise<Employees[]> {
    return employeeRepo.getAllEmployees();
}

export async function getEmployeeByName(name: string): Promise<Employees | undefined> {
    return employeeRepo.getEmployeesByName(name);
}

export async function createEmployee(employee: Employees): Promise<Employees> {
    return employeeRepo.createEmployee(employee);
}

export async function updateEmployee(employee: Employees): Promise<Employees> {
    return employeeRepo.updateEmployee(employee);
}

export async function deleteEmployee(name: string): Promise<{ message: string }> {
    return employeeRepo.deleteEmployee(name);
}

export async function validateEmployee(employee: Employees) {
    const validationErrors = new Map<string, string>();
    const validDepartments = Object.values(Department);

    if(!employee.name || employee.name.length === 0) {
        validationErrors.set('name', 'Employee Name cannot be blank');
    }

    
    if (!validDepartments.includes(employee.department)) {
            validationErrors.set('department', 'Invalid department');
    }

    return validationErrors;
}
