import * as roleRepo from '../apis/organization/roleRepo';
import type { Organization } from '../components/interface/organization';

export async function getAllRoles(): Promise<Organization[]> {
    return roleRepo.getAllRoles();
}

export async function getRoleByName(name: string): Promise<Organization | undefined> {
    return roleRepo.getRoleByName(name);
}

export async function createRole(role: Organization): Promise<Organization> {
    return roleRepo.createRole(role);
}

export async function updateRole(role: Organization): Promise<Organization> {
    return roleRepo.updateRole(role);
}

export async function deleteRole(name: string): Promise<{ message: string }> {
    return roleRepo.deleteRole(name);
}

export async function validateRole(role: Organization) {
    const validationErrors = new Map<string, string>();

    if (!role.name || role.name.length === 0) {
        validationErrors.set('name', 'Role Name cannot be blank');
    }

    const roles = await roleRepo.getAllRoles();
    const roleExists = roles.some(
        (r) => r.title.toLowerCase().trim() === role.title.toLowerCase().trim()
  );

    if (roleExists) {
        validationErrors.set('title', 'Role Title must be unique');
    }

    return validationErrors;
}
