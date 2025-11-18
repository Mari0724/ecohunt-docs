import React from "react";
import { AuthProvider } from "../auth/AuthContext";

export default function Root({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
