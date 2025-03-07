const WebTokens = {
    generateToken: () => {
      const token = Math.random().toString(36).substr(2);
      localStorage.setItem("authToken", token);
      console.log("Generated Token:", token);
      return token;
    },
    getToken: () => {
      return localStorage.getItem("authToken");
    },
  };
  
  export default WebTokens;
  