import React, { useContext, useEffect, useState } from "react";
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
import { Avatar, Input, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useApi from "../../Hooks/useApi";
import { useUserContext } from "../../Contexts/UserContext";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let {isLogin, userLogOut} = useUserContext();
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
          <Typography
            variant="h6"
            noWrap
            component="a"
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
              {/* <MenuItem>
                <Input
                  defaultValue="Search..."
                  sx={{
                    "&::after": { borderBottom: "none" },
                    "&::before": { borderBottom: "none" },
                  }}
                />
              </MenuItem> */}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
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
              {/* <Box
                sx={{
                  marginRight: "10px",
                  backgroundColor: "#F1F1F1",
                  padding: "3px",
                  display: { xs: "none", lg: "flex" },
                  alignItems: "center",
                  borderRadius: "4px",
                }}
              >
                <SearchIcon
                  sx={{ color: "black", padding: "0 5px",fontSize:'30px' }}
                ></SearchIcon>
                <Input
                  defaultValue="Search..."
                  sx={{
                    display: { xs: "none", md: "block" },
                    "&::after": { borderBottom: "none" },
                    "&::before": { borderBottom: "none" },
                    "&:focus":{outline:'none !important'}
                  }}
                ></Input>
              </Box> */}
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
              {isLogin && (
                <Tooltip title="Open Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={"getUserInfo().firstName"}
                      src={''}
                    />
                  </IconButton>
                </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link sx={{textDecoration:'none'}} onClick={()=>userLogOut()}><Typography sx={{textDecoration:'none',color:theme.palette.primary.blackColor}} textAlign="center">{setting}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
