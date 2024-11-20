"use client";
import { useBreakpointValue } from "@chakra-ui/react";
import React, { createContext, useContext, ReactNode, useMemo } from "react";

// Define the context type
interface ScreenUtilContextType {
  isMobileView: boolean;
}

// Create the context
const ScreenUtilContext = createContext<ScreenUtilContextType | undefined>(
  undefined
);

// Create a provider component
export const ScreenUtilProvider = ({ children }: { children: ReactNode }) => {
  const currentBreakpoint = useBreakpointValue({
    sm: "mobile",
    md: "desktop",
    lg: "desktop",
    xl: "desktop",
    "2xl": "desktop",
  });
  const isMobileView = useMemo(() => {
    return currentBreakpoint === "mobile";
  }, [currentBreakpoint]);

  return (
    <ScreenUtilContext.Provider value={{ isMobileView }}>
      {children}
    </ScreenUtilContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useScreenUtil = () => {
  const context = useContext(ScreenUtilContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
