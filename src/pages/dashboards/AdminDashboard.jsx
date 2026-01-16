import { users } from "../../data/users";
import { jobs } from "../../data/jobs";
import { Box, Typography, Grid } from "@mui/material";
import DashboardGridCard from "../../common/DashboardGridCard";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function AdminDashboard() {
  const companies = users.filter(u => u.role === "COMPANY");

  return (
    <DashboardLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        <Grid container spacing={3}>
          <DashboardGridCard
            title="Active Companies"
            items={companies}
            getPrimary={company => company.email}
          />

          <DashboardGridCard
            title="Active Jobs"
            items={jobs}
            getPrimary={job => job.title}
            getSecondary={job => job.company || "Company Name"}
          />
        </Grid>
      </Box>
    </DashboardLayout>
  );
}
