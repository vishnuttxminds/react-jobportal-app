import { users } from "../../data/users";
import { jobs } from "../../data/jobs";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";

export default function AdminDashboard() {
  const companies = users.filter(u => u.role === "COMPANY");

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Active Companies */}
        <Grid item xs={12} md={6}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Active Companies
              </Typography>

              <List>
                {companies.map(company => (
                  <ListItem key={company.id}>
                    <ListItemText primary={company.email} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Active Jobs */}
        <Grid item xs={12} md={6}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Active Jobs
              </Typography>

              <List>
                {jobs.map(job => (
                  <ListItem key={job.id}>
                    <ListItemText
                      primary={job.title}
                      secondary={job.company || "Company Name"}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
