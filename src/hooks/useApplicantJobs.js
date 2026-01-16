import { useState, useMemo } from "react";
import { jobs as initialJobs } from "../data/jobs";
import useSnackbar from "../hooks/useSnackbar";

export default function useApplicantJobs() {
  const [search, setSearch] = useState("");
  const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();

  const filteredJobs = useMemo(() => {
    return initialJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const applyJob = job => {
    showSnackbar(`Applied for ${job.title}`, "success");
  };

  return {
    search,
    setSearch,
    filteredJobs,
    applyJob,
    snackbar,
    closeSnackbar
  };
}
