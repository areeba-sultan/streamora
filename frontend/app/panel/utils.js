export const API_URL = "http://localhost:5000"; // backend URL

export const fetchWithAdminKey = async (endpoint, options = {}) => {
  const adminKey = localStorage.getItem("adminKey");
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "Authorization": adminKey ? `Bearer ${adminKey}` : "",
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
