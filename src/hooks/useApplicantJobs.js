import { useState, useMemo } from "react";
import { jobs as initialJobs } from "../data/jobs";

export default function useApplicantJobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = useMemo(() => {
    return initialJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const applyJob = job => {
    alert(`Applied for ${job.title}`);
  };

  return {
    search,
    setSearch,
    filteredJobs,
    applyJob,
  };
}
