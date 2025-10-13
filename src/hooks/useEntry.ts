import { useEffect, useState } from "react";
import * as validateService from "../services/validationService";
import * as employeeService from "../services/employeeService";
import * as roleService from "../services/roleService";
import type { Employees } from "../components/interface/employees";
import type { Organization } from "../components/interface/organization";

type EntryKind = "employee" | "role";

type EntryMap = {
    employee: Employees;
    role: Organization;
};

export function useEntryForm<K extends EntryKind>(entryType: K, dependencies: unknown[] = []) {
    const [formValues, setFormValues] = useState<Partial<EntryMap[K]>>({});
    const [errors, setErrors] = useState<Map<string, string>>(new Map());
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (field: keyof EntryMap[K], value: string) => {
        setFormValues((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => {
            const updated = new Map(prev);
            updated.delete(field as string);
            return updated;
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setErrors(new Map());
        setSuccess(null);

        try {
            const validation = await validateService.validateEntry(formValues as EntryMap[K], entryType);
            if (validation.size > 0) {
                setErrors(validation);
                setLoading(false);
                return;
            }

            if (entryType === "employee") {
                await employeeService.createEmployee(formValues as unknown as Employees);
            } else {
                await roleService.createRole(formValues as unknown as Organization);
            }

        setSuccess(`${entryType === "employee" ? "Employee" : "Role"} created successfully!`);
        setFormValues({});
        } catch (error) {
            setErrors(new Map([["form", (error as Error).message]]));
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setFormValues({});
        setErrors(new Map());
        setSuccess(null);
    };

    useEffect(() => {
        handleReset();
    }, [...dependencies]);

    return {
        formValues,
        errors,
        success,
        loading,
        handleChange,
        handleSubmit,
        handleReset,
    };
}
