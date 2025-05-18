import { useState } from 'react';

const useFormHook = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Generic handler for different input types
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    // Handle different input types
    const inputValue = type === 'checkbox' ? checked : value;
    
    setFormValues(prev => ({
      ...prev,
      [name]: inputValue
    }));
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormValues(initialState);
    setErrors({});
  };

  // Set custom validation errors
  const setValidationErrors = (validationErrors) => {
    setErrors(validationErrors);
  };

  // Custom field setter
  const setField = (fieldName, value) => {
    setFormValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  return {
    formValues,
    errors,
    handleInputChange,
    resetForm,
    setValidationErrors,
    setField
  };
};

export default useFormHook;
