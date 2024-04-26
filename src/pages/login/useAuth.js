import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      // Redirect to the home page if no access token is found
      navigate("/register/");
    }
  }, [navigate]);

  return null; // This custom hook doesn't return any component
};

export default useAuth;
