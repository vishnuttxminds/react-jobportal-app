import { Box, Button, Typography } from "@mui/material";
import CompanyJobCard from "../../common/CompanyJobCard";
import CreateJobDialog from "../../common/CreateJobDialog";
import useCompanyJobs from "../../hooks/useCompanyJobs";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function CompanyDashboard() {
  const {
    jobs,
    open,
    jobTitle,
    location,
    openDialog,
    closeDialog,
    setJobTitle,
    setLocation,
    createJob,
  } = useCompanyJobs();

  return (
    <DashboardLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" mb={2}>
          Company Dashboard
        </Typography>

        <Button variant="contained" onClick={openDialog}>
          Create Job
        </Button>

        {jobs.map(job => (
          <CompanyJobCard key={job.id} job={job} />
        ))}

        <CreateJobDialog
          open={open}
          onClose={closeDialog}
          onCreate={createJob}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          location={location}
          setLocation={setLocation}
        />
      </Box>
    </DashboardLayout>
  );
}
