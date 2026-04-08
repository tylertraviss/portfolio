import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PremiumSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("shipyard_tier", "premium");
    sessionStorage.setItem("shipyard_welcome", "true");
    navigate("/shipyard/dashboard", { replace: true });
  }, [navigate]);

  return null;
};

export default PremiumSuccess;
