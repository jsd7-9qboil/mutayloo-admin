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

// update user
export const updateUser = async (userData) => {
  return apiClient.patch("/profile", userData);
};

//
export const deleteUser = async (id) => {
  return apiClient.delete(`/users/${id}`);
};
