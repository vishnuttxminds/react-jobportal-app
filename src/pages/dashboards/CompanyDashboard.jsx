import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { jobs } from "../../data/jobs";
import CompanyJobCard from "../../common/CompanyJobCard";
import CreateJobDialog from "../../common/CreateJobDialog";

export default function CompanyDashboard() {
  const [allJobs, setJobs] = useState(jobs);
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const createJob = () => {
    const newJob = {
      id: allJobs.length + 1,
      title: jobTitle,
      location,
      applicants: [],
    };

    setJobs(prev => [...prev, newJob]);
    setOpen(false);
    setJobTitle("");
    setLocation("");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={2}>
        Company Dashboard
      </Typography>

      <Button
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Create Job
      </Button>

      {allJobs.map(job => (
        <CompanyJobCard key={job.id} job={job} />
      ))}

      <CreateJobDialog
        open={open}
        onClose={() => setOpen(false)}
        onCreate={createJob}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        location={location}
        setLocation={setLocation}
      />
    </Box>
  );
}
