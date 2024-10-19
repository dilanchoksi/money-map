import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

interface ProtectedRouteProps {
  // additional props if needed in future
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const { user } = useUser();

  // redirect to the sign-in page if not signed in
  if (!user) {
    return <Navigate to="/auth" />;
  }

  // If the user is signed in, render the child components
  return <Outlet />;
};

export default ProtectedRoute;
