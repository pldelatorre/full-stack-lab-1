export const Department = {
    ADMINISTRATION: "Administration",
    AUDIT: "Audit",
    OPERATIONS: "Banking Operations",
    COMMUNICATIONS: "Communications",
    CORPORATE: "Corporate Services",
    FACILITIES: "Facilities",
    FINANCIAL: "Financial Services",
    HR: "Human Resources",
    IT: "Information Technology",
    TECHNICIAN: "IT Technician"
} as const;

export type Department = (typeof Department)[keyof typeof Department]