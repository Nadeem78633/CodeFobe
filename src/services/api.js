const BASE_URL = "https://random-data-api.com/api/users/random_user";

export const fetchUsers = async (size) => {
  try {
    const response = await fetch(`${BASE_URL}?size=${size}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
