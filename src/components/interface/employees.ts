import { Department } from "./department"

export interface Employee {
    department: Department,
    name:string[],
    id?: string
}