import type { Employee } from '../../components/interface/employees';
import type { BaseResponse } from '../../components/interface/BaseResponse';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export async function getAllEmployees() {
  const employeeResponse: Response = await fetch(`${BASE_URL}/employees`);

  if (!employeeResponse.ok) {
    throw new Error("Failed to fetch employees");
  }

  const json: BaseResponse<Employee[]> = await employeeResponse.json();
  return json.data;
}

export async function getEmployeeById(id: string): Promise<Employee[]> {
  const employeeResponse: Response = await fetch(`${BASE_URL}/employees/${id}`);

  if (!employeeResponse.ok) {
    throw new Error(`Failed to fetch employee with id ${id}`);
  }

  const json: BaseResponse<Employee[]> = await employeeResponse.json();
  return json.data;
}

export async function createEmployee(employee: Employee) {
  const createResponse: Response = await fetch(`${BASE_URL}/employees/create`, {
    method: "POST",
    body: JSON.stringify({ ...employee }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!createResponse.ok) {
    throw new Error(`Failed to create employee`);
  }

  const json: BaseResponse<Employee[]> = await createResponse.json();
  return json.data;
}

export async function updateEmployee(employee: Employee): Promise<Employee[]> {
    const updateResponse: Response = await fetch(`${BASE_URL}/employees/update/${employee.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...employee }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!updateResponse.ok) {
    throw new Error(`Failed to update employee with id ${employee.id}`);
  }

  const json: BaseResponse<Employee[]> = await updateResponse.json();
  return json.data;
}

export async function deleteEmployee(id: string): Promise<void> {
    const employeeResponse: Response = await fetch(`${BASE_URL}/employees/delete/${id}`, {
    method: "DELETE",
  });

  if (!employeeResponse.ok) {
    throw new Error(`Failed to delete employee with id ${id}`);
  }
}
