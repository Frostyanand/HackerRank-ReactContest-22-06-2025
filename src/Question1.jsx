import { useState } from "react";

export default function Quesstion1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    
    // Reset error message
    setError("");
    
    // Validate that all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("All fields are required.");
      return;
    }
    
    // If validation passes, save submitted data and clear form
    setSubmittedData({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim()
    });
    
    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Form</h1>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Enter your message"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Submit
        </button>
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {/* Submitted Data Display */}
      {submittedData && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <h2 className="text-lg font-semibold text-green-800 mb-3">Submitted Information:</h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-gray-700">Name:</span>
              <span className="ml-2 text-gray-900">{submittedData.name}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Email:</span>
              <span className="ml-2 text-gray-900">{submittedData.email}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Message:</span>
              <p className="mt-1 text-gray-900">{submittedData.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}