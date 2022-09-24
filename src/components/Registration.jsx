import {
  Card,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { StyledCardContent, StyledButton, StyledForm, StyledTitle, Heading } from '../styles/styled';

export const Registration = ({ onRegistration }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    if (validateEmail(user.email) && user.password && onConfirmPassword()) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [user]);

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const extractUsername = (email) => {
    return email.slice(0, email.indexOf("@"));
  };

  const onChangeEmail = (e) => {
    if (validateEmail(e.target.value)) {
      setUser({
        ...user,
        username: extractUsername(e.target.value),
        email: e.target.value,
      });
    } else {
      setUser({
        ...user,
        username: "",
        email: e.target.value,
      });
    }
  };

  const onConfirmPassword = () => {
    return user.password === user.passwordConfirm;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    onRegistration();
  };

  return (
    <Card>
      <StyledCardContent>
        <StyledTitle>
          <Heading>REGISTRATION</Heading>
        </StyledTitle>
        <StyledForm onSubmit={onSubmit}>
          <TextField
            label="Email Address"
            value={user.email}
            onChange={onChangeEmail}
            error={Boolean(user.email) && !validateEmail(user.email)}
            helperText={
              user.email && !validateEmail(user.email)
                ? "Incorrect format of Email Address!"
                : ""
            }
          />
          <TextField
            label="User Name"
            value={user.username}
            inputProps={{ readOnly: true }}
          />
          <TextField
            label="Password"
            value={user.password}
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <TextField
            label="Confirm Password"
            value={user.passwordConfirm}
            type="password"
            error={!onConfirmPassword()}
            helperText={!onConfirmPassword() ? "Confirmation failed!" : ""}
            onChange={(e) =>
              setUser({ ...user, passwordConfirm: e.target.value })
            }
          />
          <StyledButton
            variant="contained"
            type="submit"
            disabled={!isValidForm}
          >
            Register
          </StyledButton>
        </StyledForm>
      </StyledCardContent>
    </Card>
  );
};


