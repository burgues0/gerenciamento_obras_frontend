import { API_CONFIG } from './config';

export class ApiClient {
  private static getHeaders(includeAuth = true, token?: string): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      let authToken = token;
      if (!authToken && typeof document !== 'undefined') {
        const cookies = document.cookie.split(';').map(c => c.trim());
        for (const c of cookies) {
          if (c.startsWith('auth-token=')) {
            authToken = decodeURIComponent(c.substring('auth-token='.length));
            break;
          }
        }
      }
      if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
      }
    }

    return headers;
  }

  private static getBaseUrl(isAuthEndpoint: boolean): string {
    return isAuthEndpoint ? API_CONFIG.AUTH_BASE_URL : API_CONFIG.OBRAS_BASE_URL;
  }

  static async post(endpoint: string, data: any, includeAuth = true, isAuthEndpoint = false, token?: string) {
    const baseUrl = this.getBaseUrl(isAuthEndpoint);
    
    try {
      const fetchOptions: RequestInit = {
        method: 'POST',
        headers: this.getHeaders(includeAuth, token),
        body: JSON.stringify(data),
      };
      if (includeAuth && !token) {
        fetchOptions.credentials = 'include';
      }
      const response = await fetch(`${baseUrl}${endpoint}`, fetchOptions);

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          errorData = {};
        }
        
        let errorMessage = errorData.message || 
                          errorData.error || 
                          errorData.msg || 
                          errorData.detail || 
                          errorData.description ||
                          errorData.mensagem;
        
        if (!errorMessage) {
          switch (response.status) {
            case 401:
              errorMessage = "Credenciais inválidas";
              break;
            case 403:
              errorMessage = "Acesso negado";
              break;
            case 404:
              errorMessage = "Recurso não encontrado";
              break;
            case 500:
              errorMessage = "Erro interno do servidor";
              break;
            default:
              errorMessage = `Erro HTTP ${response.status}`;
          }
        }
        
        const error = new Error(errorMessage);
        (error as any).status = response.status;
        (error as any).statusText = response.statusText;
        (error as any).data = errorData;
        throw error;
      }

      return response.json();
    } catch (err: any) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        const networkError = new Error('Erro de conexão. Verifique se o servidor está rodando.');
        (networkError as any).status = 0;
        throw networkError;
      }
      throw err;
    }
  }

  static async get(endpoint: string, includeAuth = true, isAuthEndpoint = false, token?: string) {
    const baseUrl = this.getBaseUrl(isAuthEndpoint);
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: this.getHeaders(includeAuth, token),
    };
    if (includeAuth && !token) {
      fetchOptions.credentials = 'include';
    }
    const response = await fetch(`${baseUrl}${endpoint}`, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro na requisição');
    }

    return response.json();
  }

  static async put(endpoint: string, data: any, includeAuth = true, isAuthEndpoint = false, token?: string) {
    const baseUrl = this.getBaseUrl(isAuthEndpoint);
    const fetchOptions: RequestInit = {
      method: 'PUT',
      headers: this.getHeaders(includeAuth, token),
      body: JSON.stringify(data),
    };
    if (includeAuth && !token) {
      fetchOptions.credentials = 'include';
    }
    const response = await fetch(`${baseUrl}${endpoint}`, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro na requisição');
    }

    return response.json();
  }

  static async delete(endpoint: string, includeAuth = true, isAuthEndpoint = false, token?: string) {
    const baseUrl = this.getBaseUrl(isAuthEndpoint);
    const fetchOptions: RequestInit = {
      method: 'DELETE',
      headers: this.getHeaders(includeAuth, token),
    };
    if (includeAuth && !token) {
      fetchOptions.credentials = 'include';
    }
    const response = await fetch(`${baseUrl}${endpoint}`, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro na requisição');
    }

    return response.json();
  }
}

export const AuthService = {
  login: (email: string, senha: string) => 
    ApiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, { email, senha }, false, true),
  
  logout: (token?: string) => 
    ApiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT, {}, true, true, token),
  
  verify: (token?: string) => 
    ApiClient.get(API_CONFIG.ENDPOINTS.AUTH.VERIFY, true, true, token),
};

export const ObrasService = {
  getAll: (token?: string) => ApiClient.get(API_CONFIG.ENDPOINTS.OBRAS, true, false, token),
  getById: (id: string, token?: string) => ApiClient.get(`${API_CONFIG.ENDPOINTS.OBRAS}/${id}`, true, false, token),
  create: (data: any, token?: string) => ApiClient.post(API_CONFIG.ENDPOINTS.OBRAS, data, true, false, token),
  update: (id: string, data: any, token?: string) => ApiClient.put(`${API_CONFIG.ENDPOINTS.OBRAS}/${id}`, data, true, false, token),
  delete: (id: string, token?: string) => ApiClient.delete(`${API_CONFIG.ENDPOINTS.OBRAS}/${id}`, true, false, token),
};

export const FornecedoresService = {
  getAll: (token?: string) => ApiClient.get(API_CONFIG.ENDPOINTS.FORNECEDORES, true, false, token),
  getById: (id: string, token?: string) => ApiClient.get(`${API_CONFIG.ENDPOINTS.FORNECEDORES}/${id}`, true, false, token),
  create: (data: any, token?: string) => ApiClient.post(API_CONFIG.ENDPOINTS.FORNECEDORES, data, true, false, token),
  update: (id: string, data: any, token?: string) => ApiClient.put(`${API_CONFIG.ENDPOINTS.FORNECEDORES}/${id}`, data, true, false, token),
  delete: (id: string, token?: string) => ApiClient.delete(`${API_CONFIG.ENDPOINTS.FORNECEDORES}/${id}`, true, false, token),
};
