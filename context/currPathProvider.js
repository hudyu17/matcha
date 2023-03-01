import { createContext, useContext, useState } from "react";

const Context = createContext();

export function CurrPathProvider({ children }) {
  const [currPath, setCurrPath] = useState(null);
  const [activeFilters, setActiveFilters] = useState([])
  const [filters, setFilters] = useState([
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'consulting', label: 'Consulting', checked: false },
        { value: 'swe', label: 'Software Engineering', checked: false },
        { value: 'aiml', label: 'AI/ML', checked: false },
        { value: 'product', label: 'Product', checked: false },
        { value: 'startups', label: 'Startups', checked: false },
      ],
    },
    {
      id: 'education',
      name: 'Education',
      options: [
        { value: 'eng', label: 'Engineering', checked: false },
        { value: 'biz', label: 'Business', checked: false },
        { value: 'cs', label: 'Comp. Sci', checked: false },
        { value: 'mba', label: 'MBA', checked: false },
        { value: 'masters', label: 'Grad School', checked: false },
      ],
    },
  ])

  return (
    <Context.Provider value={{ 
      currPathContext: [currPath, setCurrPath], 
      activeFiltersContext: [activeFilters, setActiveFilters],
      filtersContext: [filters, setFilters]
    }}>
      {children}
    </Context.Provider>
  );
}

export function useCurrPathContext() {
  return useContext(Context);
}