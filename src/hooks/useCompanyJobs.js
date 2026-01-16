import { useState } from "react";
import { jobs as initialJobs } from "../data/jobs";

export default function useCompanyJobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const createJob = () => {
    if (!jobTitle || !location) return;

    const newJob = {
      id: jobs.length + 1,
      title: jobTitle,
      location,
      applicants: [],
    };

    setJobs(prev => [...prev, newJob]);
    resetForm();
    closeDialog();
  };

  const resetForm = () => {
    setJobTitle("");
    setLocation("");
  };

  return {
    jobs,
    open,
    jobTitle,
    location,
    openDialog,
    closeDialog,
    setJobTitle,
    setLocation,
    createJob,
  };
}
