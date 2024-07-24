import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

interface ProtectedRouteProps {
  // You can pass additional props if needed
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const { user } = useUser();

  // If the user is not signed in, redirect to the sign-in page
  if (!user) {
    return <Navigate to="/auth" />;
  }

  // If the user is signed in, render the child components
  return <Outlet />;
};

export default ProtectedRoute;
