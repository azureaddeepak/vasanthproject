import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    phone: string;
    email: string;
    message: string;
  }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      valid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the data to a server
      // For this demo, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">Thank you for your message! We'll get back to you soon.</span>
        </div>
      )}
      
      <div>
        <input 
          type="text" 
          name="name"
          placeholder="Your name" 
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div>
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number" 
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
      </div>
      
      <div>
        <input 
          type="email" 
          name="email"
          placeholder="Your email" 
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div>
        <textarea 
          name="message"
          placeholder="Your message" 
          rows={6}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
      </div>
      
      <button 
        type="submit"
        className="w-full bg-amber-700 text-white font-medium py-3 px-4 rounded-md hover:bg-amber-800 transition-colors disabled:bg-amber-400 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  );
};

export default ContactForm;
