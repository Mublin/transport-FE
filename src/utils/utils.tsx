import axios from "axios"


export const api = axios.create({baseURL : "http://localhost:3000", withCredentials: true})


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      // Add access token to request body (adjust based on API requirements)
      // Alternatively, if API expects token in headers:
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle token refresh on 401 errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 and hasn't been retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark as retried

      try {
        // Call refresh token endpoint (assumes refresh token is in HTTP-only cookie)
        const { data } = await axios.post(
          'https://your-api-url.com/refresh-token',
          {},
          { withCredentials: true }
        );

        // Update access token
        const newAccessToken = data.accessToken;
        localStorage.removeItem("accessToken")
        localStorage.setItem("accessToken", data.accessToken)
        // Update original request with new token
       
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // Handle refresh failure (e.g., redirect to login)
        console.error('Token refresh failed:', refreshError);
        // Optionally clear tokens and redirect to login
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
}
)