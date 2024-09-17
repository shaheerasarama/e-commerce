import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import theme from "../../Theme/Theme";
import { Avatar, Tooltip } from "@mui/material";
import useApi from "../../Hooks/useApi";
import { useUserContext } from "../../Contexts/UserContext";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: theme.palette.primary.main,
  },
}));
export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let { isLogin, userLogOut, userInfo, userCart } = useUserContext();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [categories, setCategories] = useState([]);
  let { data } = useApi(`https://dummyjson.com/products/categories`);
  useEffect(() => {
    if (data) {
      setCategories(data.slice(0, 6));
    }
  }, [data]);
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "0",
                color: theme.palette.primary.blackColor,
                textDecoration: "none",
              }}
            >
              FASHION
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.primary.blackColor }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  width: "100%",
                  boxShadow: "none",
                  left: 0,
                },
              }}
            >
              {categories.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="div"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0",
              textDecoration: "none",
              color: theme.palette.primary.blackColor,
            }}
          >
            FASHION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {categories.map((page, index) => (
              <Link
                key={index}
                to={`/${page.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: theme.palette.primary.blackColor,
                    display: "block",
                    fontWeight: "500",
                    textWrap: "nowrap",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {!isLogin && (
                <Button
                  sx={{
                    backgroundColor: theme.palette.primary.blackColor,
                    ":hover": {
                      backgroundColor: "black !important",
                    },
                  }}
                >
                  <Link
                    to={"/login"}
                    style={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontWeight: "600",
                      textDecoration: "none",
                      textTransform: "capitalize",
                      ":&hover": { backgroundColor: "red !important" },
                    }}
                  >
                    Login
                  </Link>
                </Button>
              )}
              {isLogin && userInfo && (
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Link to="/myCart">
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={userCart.length}
                        color="default"
                      >
                        <ShoppingCartIcon sx={{ color: "black" }} />
                      </StyledBadge>
                    </IconButton>
                  </Link>

                  <Tooltip title="Open Profile">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={userInfo.firstName}
                        src={userInfo.image || undefined}
                      >
                        {!userInfo.image && userInfo.firstName.charAt(0)}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.primary.blackColor,
                    }}
                    textAlign="center"
                  >
                    profile
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.primary.blackColor,
                    }}
                    textAlign="center"
                  >
                    account
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.primary.blackColor,
                    }}
                    textAlign="center"
                  >
                    dashboard
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                  onClick={() => userLogOut()}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.primary.blackColor,
                    }}
                    textAlign="center"
                  >
                    log out
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
