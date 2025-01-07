const AuthHelper = {
    // Guarda el token en localStorage
    saveToken: (token) => {
      if (!token) throw new Error('El token no puede estar vacío.');
      localStorage.setItem('authToken', token);
    },
    
    savePayload: (payload) => {
      if (!payload) throw new Error('El token no puede estar vacío.');
      localStorage.setItem('payload', JSON.stringify(payload));
    },
  
    // Obtiene el token desde localStorage
    getToken: () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.warn('No hay token almacenado.');
        return null;
      }
      return token;
    },

    getPayload: () => {
      const payload = localStorage.getItem('payload');
      if (!payload) {
        console.warn('No hay datos de usuario almacenado.');
        return null;
      }
      return JSON.parse(payload);
    },
  
    // Elimina el token de localStorage para desloguear al usuario
    logout: () => {
      localStorage.removeItem('authToken');
    },
  
    // Verifica si el usuario está autenticado
    isAuthenticated: () => {
      return !!localStorage.getItem('authToken');
    }
  };