import { useEntryForm } from "../../../hooks/useEntry";

export default function CreateRoleForm() {
    const {
        formValues,
        errors,
        success,
        loading,
        handleChange,
        handleSubmit,
    } = useEntryForm("role");

    return (
        <div>
            <h2>Add new Role</h2>
            <input
                type="text"
                placeholder="Name"
                value={formValues.name || ''}
                onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.has("name") && <p style={{ color: 'red' }}>{errors.get("name")}</p>}

            <input
                type="text"
                placeholder="Role Title"
                value={formValues.title || ''}
                onChange={(e) => handleChange("title", e.target.value)}
            />
            {errors.has("title") && <p style={{ color: 'red' }}>{errors.get("title")}</p>}

            <button disabled={loading} onClick={handleSubmit}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {success && <p style={{ color: 'green' }}>Role created successfully!</p>}
        </div>
    )
}