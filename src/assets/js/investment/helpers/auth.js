const AuthHelper = {
    // Guarda el token en localStorage
    saveToken: (token) => {
      if (!token) throw new Error('El token no puede estar vacío.');
      localStorage.setItem('authToken', token);
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
  
    // Elimina el token de localStorage para desloguear al usuario
    logout: () => {
      localStorage.removeItem('authToken');
    },
  
    // Verifica si el usuario está autenticado
    isAuthenticated: () => {
      return !!localStorage.getItem('authToken');
    }
  };