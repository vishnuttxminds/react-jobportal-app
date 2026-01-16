import { Box } from "@mui/material";
import AppHeader from "../common/AppHeader";

export default function DashboardLayout({ children }) {
  return (
    <Box>
      <AppHeader />
      <Box sx={{ p: 2 }}>
        {children}
      </Box>
    </Box>
  );
}
