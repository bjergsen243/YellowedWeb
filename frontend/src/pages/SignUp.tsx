import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { ReactComponent as IconPasswordInput } from "../assets/icon-password-input.svg";
import { SvgIcon } from "@mui/material";
import React from "react";
import { useLogin } from "../hooks/useLogin";

export default function SignUp() {
  const {
    handleOnChangeEmail,
    handleOnChangePassword,
    handleOnClickShowPassword,
    showPassword,
    showCurrentPassword,
    handleOnClickShowCurrentPassword,
    setShowCurrentPassword,
    handleOnChangeCurrentPassword,
  } = useLogin();

  return (
    <div
      className="signUp-page"
      style={{
        display: "flex",
        backgroundColor: "white",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <img
          src="bg.png"
          alt="background"
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "80px",
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
        }}
      >
        <Paper
          elevation={3}
          style={{
            alignItems: "center",
            backgroundColor: "white",
            textAlign: "left",
            margin: 77,
            borderRadius: 20,
          }}
          variant="outlined"
        >
          <div
            style={{
              alignItems: "center",
              margin: "35px",
            }}
          >
            <Typography
              fontSize={39}
              style={{
                alignItems: "center",
                fontWeight: "600",
              }}
            >
              Sign Up
            </Typography>
            <Typography fontSize={14}>
              {" "}
              Have an account?{" "}
              <Link href="/sign-in" underline="none">
                Sign in
              </Link>
            </Typography>
            <br />
            <Typography fontSize={14} fontWeight={600}>
              {" "}
              Email Address{" "}
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label=""
              onChange={handleOnChangeEmail}
              autoFocus
            />
            <Typography fontSize={14} fontWeight={600}>
              {" "}
              Password{" "}
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={handleOnChangePassword}
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={handleOnClickShowPassword}
                    style={{ height: 25, width: 25 }}
                  >
                    <SvgIcon component={IconPasswordInput} inheritViewBox />
                  </Button>
                ),
              }}
            />
            <Typography fontSize={14} fontWeight={600}>
              {" "}
              Confirm Password{" "}
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              required
              id="confirm-password"
              autoFocus
              onChange={handleOnChangeCurrentPassword}
              type={showCurrentPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={handleOnClickShowCurrentPassword}
                    style={{ height: 25, width: 25 }}
                  >
                    <SvgIcon component={IconPasswordInput} inheritViewBox />
                  </Button>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography fontSize={14}>
                  I accept the <Link underline="none">Terms & Conditions.</Link>
                </Typography>
              }
            ></FormControlLabel>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#C18FF5",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              Create Account
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
