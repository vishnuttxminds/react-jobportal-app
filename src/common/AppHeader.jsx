import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

export default function AppHeader() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>

        {currentUser && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">
              {currentUser.role}
            </Typography>

            <IconButton  color="inherit" onClick={handleLogout}>
              Logout
            </IconButton >
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
