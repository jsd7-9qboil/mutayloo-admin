import apiClient from "./apiClient";

// login
export const login = async (email, password) => {
  return apiClient.post("/users/login", { email, password });
};

// get users profile
export const fetchUsers = async () => {
  return apiClient.get("/profile");
};

// get all users
export const fetchAllUsers = async () => {
  return apiClient.get("/users/all");
};

// create user
export const createUser = async (userData) => {
  return apiClient.post("/adminRegister", userData);
};

// update user by id
export const updateUser = async ({ id, userData }) => {
  return apiClient.patch(`/users/update/${id}`, userData);
};

//
export const deleteUser = async (id) => {
  return apiClient.delete(`/users/${id}`);
};
