import { validateEmployee } from "./employeeService";
import { validateRole } from "./roleService";
import type { Employees } from "../components/interface/employees";
import type { Organization } from "../components/interface/organization";

export async function validateEntry(entry: Employees | Organization, type: "employee" | "role") {
    if (type === "employee") {
        return await validateEmployee(entry as Employees);
    } else {
        return await validateRole(entry as Organization);
    }
}
