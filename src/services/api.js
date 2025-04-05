const API_BASE_URL = 'http://localhost:8080/api';

export const fetchMenuItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu-items`);
    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};