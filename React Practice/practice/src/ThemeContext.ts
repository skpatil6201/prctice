import { createContext } from "react";

export type ThemeType = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

// Create context with default undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
