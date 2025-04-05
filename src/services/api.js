const API_BASE_URL = 'http://172.31.55.221:8000/food';

export const fetchFoodItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/food_items`);
    if (!response.ok) {
      throw new Error('Failed to fetch food items');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
