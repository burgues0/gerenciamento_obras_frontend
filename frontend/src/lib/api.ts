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

}
