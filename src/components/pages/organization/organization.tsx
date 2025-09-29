import './organization.css';
import organization from "../../../assets/management.json";
import { useState } from 'react';

export default function Organization() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
     <div className="org-list">
      {organization.map((org, index) => (
        <div
          key={index}
          className="org-item"
          onClick={() => toggle(index)}
        >
          <div className="org-title">{org.title}</div>
          {openIndex === index && (
            <div className="org-name">{org.name}</div>
          )}
        </div>
      ))}
    </div>
  );
}
