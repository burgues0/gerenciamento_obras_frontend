import { API_CONFIG } from "@/lib/config";

function authHeaders(): HeadersInit {
  const token = localStorage.getItem("auth-token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const obrasService = {
  async getAllObras() {
    const response = await fetch(`${API_CONFIG.OBRAS_BASE_URL}${API_CONFIG.ENDPOINTS.OBRAS}`,
      {
        credentials: "include",
        headers: {
          ...authHeaders(),
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Falha ao listar obras.");
    }
    return response.json();
  },
};
