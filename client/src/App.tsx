// src/App.tsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import ProtectedRoute from "./components/protected-route";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <div className="logo">MoneyMap</div>
          <div className="tabs">
            <Link to="/">Dashboard</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={
                <FinancialRecordsProvider>
                  <Dashboard />
                  <p id="note">
                    <b>
                      Note: MongoDB may take up to two minutes to connect. Until
                      then, you won't be able to see your previous data or add
                      any records. Please be patient, the app is not broken
                      :&#41;
                    </b>
                  </p>
                </FinancialRecordsProvider>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
