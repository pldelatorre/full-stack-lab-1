import { useEntryForm } from "../../../hooks/useEntry";
import { Department } from "../../interface/department";

export default function CreateEmployeeForm() {
    const {
        formValues,
        errors,
        success,
        loading,
        handleChange,
        handleSubmit,
    } = useEntryForm("employee");

    return (
        <div>
            <h2>Add new Employee</h2>
            <input
                type="text"
                placeholder="Name"
                value={formValues.name || ''}
                onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.has("name") && <p style={{ color: 'red' }}>{errors.get("name")}</p>}

            <select
                value={formValues.department || ""}
                onChange={(e) => handleChange("department", e.target.value)}
            >
                <option value="">Select Department</option>
                {Object.values(Department).map((dept) => (
                    <option key={dept} value={dept}>
                        {dept}
                    </option>
                ))}
            </select>
            {errors.has("department") && <p style={{ color: 'red' }}>{errors.get("department")}</p>}

            <button disabled={loading} onClick={handleSubmit}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {success && <p style={{ color: 'green' }}>Employee created successfully!</p>}
        </div>
    )
}