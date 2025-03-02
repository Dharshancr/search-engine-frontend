import { useEffect, useState } from "react";
import axios from "axios";

import axios from "axios";

const API_BASE_URL = "https://search-engine-backend.onrender.com";

export const signup = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, { name, email, password });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const saveSearchHistory = async (query) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${API_BASE_URL}/history`, { query }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const isAuthenticated = () => !!localStorage.getItem("token");
export const logout = () => localStorage.removeItem("token");