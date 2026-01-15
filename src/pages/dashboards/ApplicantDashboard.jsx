import { useState } from "react";
import { jobs } from "../../data/jobs";
import {
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

export default function ApplicantDashboard() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Applicant Dashboard
      </Typography>

      {/* Search */}
      <TextField
        fullWidth
        label="Search Job"
        placeholder="Search by job title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={3}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <Grid item xs={12} md={6} key={job.id}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h6">
                    {job.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {job.company || "Company Name"}
                  </Typography>

                  <Button variant="contained">
                    Apply
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography sx={{ ml: 2 }}>
            No jobs found
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
