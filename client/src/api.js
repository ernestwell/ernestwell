const API_BASE_URL = "/api"; // Use relative URL for seamless Vercel deployment

// Contact Form Submission
export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Failed to send message." };
  }
};

// Job Application Form Submission (Handles File Upload)
export const sendJobApplication = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send`, {
      method: "POST",
      body: formData, // FormData for file uploads
    });

    return await response.json();
  } catch (error) {
    console.error("Error submitting job application:", error);
    return { success: false, message: "Failed to submit application." };
  }
};
