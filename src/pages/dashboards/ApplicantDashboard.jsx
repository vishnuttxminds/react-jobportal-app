import { Box, Typography, Grid } from "@mui/material";
import SearchInput from "../../common/SearchInput";
import JobCard from "../../common/JobCard";
import EmptyState from "../../common/EmptyState";
import useApplicantJobs from "../../hooks/useApplicantJobs";

export default function ApplicantDashboard() {
  const {
    search,
    setSearch,
    filteredJobs,
    applyJob,
  } = useApplicantJobs();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Applicant Dashboard
      </Typography>

      <SearchInput
        label="Search Job"
        placeholder="Search by job title..."
        value={search}
        onChange={setSearch}
      />

      <Grid container spacing={3}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <Grid item xs={12} md={6} key={job.id}>
              <JobCard job={job} onApply={applyJob} />
            </Grid>
          ))
        ) : (
          <EmptyState message="No jobs found" />
        )}
      </Grid>
    </Box>
  );
}
