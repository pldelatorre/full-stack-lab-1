import type { Organization } from "../../components/interface/organization";
import organizationData from '../../assets/management.json';

let roles: Organization[] = organizationData as Organization[];

export function getAllRoles(): Organization[] {
    return roles;
}

export function getRoleByName(name: string): Organization | undefined {
    const role = roles.find((r) => r.name === name);
    if (!role) {
        throw new Error(`Role with name ${name} was not found`);
    }
    return role;
}

export async function createRole(role: Organization) {
    roles.push(role);
    return role;
}

export async function updateRole(updatedRole: Organization) {
    const index = roles.findIndex((r) => r.name === updatedRole.name);
    if (index === -1) {
        throw new Error(`Role with name ${updatedRole.name} was not found`);
    }
    roles[index] = updatedRole;
    return updatedRole;
}

export async function deleteRole(name: string) {
    const index = roles.findIndex((r) => r.name === name);
    if (index === -1) {
        throw new Error(`Role with name ${name} was not found`);
    }
    roles.splice(index, 1);
    return { message: `Role with name ${name} was deleted` };
}
