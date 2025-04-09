
export const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true 
      });
      // Câmera liberada!
      return stream;
    } catch (error) {
      console.error("Permissão negada:", error);
      alert("Por favor, permita o acesso à câmera nas configurações do navegador.");
    }
  };