import { useState, useEffect, useCallback } from 'react';

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const validateForm = useCallback(() => {
    setErrors({});
    const newErrors = {};

    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) newErrors.email = 'Email is required';
    if (!formState.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
  }, [formState]);

  const submitForm = useCallback(async () => {
    setIsSubmitting(true);
    setFormState(prevState => ({ ...prevState, isSubmitting: true }));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Validate form
      validateForm();

      if (Object.keys(errors).length === 0) {
        // Form is valid, proceed with submission
        // You can add your logic here
        console.log('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setErrors({ ...errors, general: 'An error occurred during submission' });
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, errors]);

  useEffect(() => {
    validateForm();
  }, [formState]);

  return {
    formState,
    errors,
    isSubmitting,
    handleInputChange,
    submitForm
  };
};

export default useForm;