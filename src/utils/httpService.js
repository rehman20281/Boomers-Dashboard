const BASE_URL = import.meta.env.VITE_API_URL;

async function request(url, options = {}) {
  const token = localStorage.getItem("token"); // Or from Redux/Context

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(BASE_URL + url, {
      ...options,
      headers,
    });

    // Handle non-OK responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    // Return JSON if available
    const contentType = response.headers.get("content-type");
 
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
 
    return await response.text(); // fallback for non-JSON
  } catch (error) {
    console.error("HTTP Error:", error.message);
    throw error;
  }
}

// Reusable helpers
export const http = {
  get: (url, options) => request(url, { method: "GET", ...options }),
  post: (url, body, options) =>
    request(url, { method: "POST", body: JSON.stringify(body), ...options }),
  put: (url, body, options) =>
    request(url, { method: "PUT", body: JSON.stringify(body), ...options }),
  patch: (url, body, options) =>
    request(url, { method: "PATCH", body: JSON.stringify(body), ...options }),
  delete: (url, options) => request(url, { method: "DELETE", ...options }),
};
