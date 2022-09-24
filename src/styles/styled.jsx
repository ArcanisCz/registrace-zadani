import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider, Button, CardContent, Alert
} from "@mui/material";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

export const StyledCardContent = styled(CardContent)`
  padding: 30px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary.main};
  max-width: 100px;
  align-self: center;
  &:disabled {
    background-color: ${({ theme }) => theme.color.primary.light};
  }
`;

export const StyledAlert = styled(Alert)`
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
      font-size: 2rem,
      color: "#000000",
`;

export const StyledWrapper = ({ theme, children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
