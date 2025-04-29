import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    // Function that runs when any input changes
    const { name, value } = e.target; // Gets the name and value of the input that was changed
    setFormData((prevData) => ({
      // Updates the form state using current state
      ...prevData, // Keeps all existing form data
      [name]: value, // Updates only the field that changed
    }));
  };
  const handleSubmit = async (e) => {
    // Async function that handles form submission
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    console.log("Attempting to submit:", formData); // Show what we're trying to send

    try {
      // Start of error handling block
      const response = await fetch("http://localhost:5000/api/contact", {
        // Updated URL to include full path
        // Send data to backend API endpoint
        method: "POST", // Using POST HTTP method to send data
        headers: {
          "Content-Type": "application/json", // Tells server we're sending JSON data
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      const data = await response.json(); // Convert server response to JavaScript object
      alert(data.message); // Show server response message to user
      console.log("Success:", data); // Log success data to console
    } catch (error) {
      // If any errors occur in the try block
      alert("Failed to submit form: " + error.message); // Show error to user
      console.error("Error:", error); // Log the error to console
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
