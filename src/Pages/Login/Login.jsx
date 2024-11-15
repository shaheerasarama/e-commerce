import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/Theme";
import axios from "axios";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Contexts/UserContext";
import loginImage from "../../images/login.jpg";

function Copyright(props) {
  return (
    <>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        component="div"
        {...props}
      >
        <Typography sx={{ marginBottom: "10px" }}>
          {" "}
          <a
            href="https://dummyjson.com/users"
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.6)" }}
          >
            Users Login List
          </a>{" "}
        </Typography>
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  let { isLogin, setIsLogin } = useUserContext();
  let navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", password: "" });
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      userName: data.get("userName"),
      password: data.get("password"),
    };
    setUser(userData);

    try {
      let response = await axios.post(
        `https://dummyjson.com/auth/login`,
        {
          username: userData.userName,
          password: userData.password
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("userToken", JSON.stringify(response.data.accessToken));
      localStorage.setItem(
        "userRefreshToken",
        JSON.stringify(response.data.refreshToken)
      );
      localStorage.setItem("userId", response.data.id);
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return !isLogin ? (
    <ThemeProvider theme={defaultTheme}>
      {error ? (
        <Alert severity="error" sx={{ fontWeight: "bold", color: "black" }}>
          Your username or password is incorrect. Please try again.
        </Alert>
      ) : (
        ""
      )}
      <Grid container component="main" sx={{ margin: "0px 0" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{ boxShadow: "none" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
                autoFocus
                required
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { backgroundColor: "black" },
                }}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.blackColor,
                      textDecorationColor: theme.palette.primary.blackColor,
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.blackColor,
                      textDecorationColor: theme.palette.primary.blackColor,
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{
            backgroundImage: `url(${loginImage})`,
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
          }}
        />
      </Grid>
    </ThemeProvider>
  ) : null;
}
