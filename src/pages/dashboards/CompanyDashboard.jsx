import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
} from "@mui/material";
import { jobs } from "../../data/jobs";

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
      applicants: []
    };
    setJobs([...allJobs, newJob]);
    setOpen(false);
    setJobTitle("");
    setLocation("");
  };


  console.log("Jobs List:", allJobs);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={2}>
        Company Dashboard
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        Create Job
      </Button>

      {/* Job List */}
      {allJobs.map(job => {
        console.log("JOB OBJECT ", job);

        return (
          <Card key={job.id} sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6">{job.title}</Typography>

              <List>
                {job.applicants?.length === 0 && (
                  <Typography>No applicants yet</Typography>
                )}

                {job.applicants?.map((app, index) => (
                  <ListItem key={index}>{app}</ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        );
      })}


      {/* Create Job Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create Job</DialogTitle>
        <DialogContent>
          <TextField
            label="Job Title"
            fullWidth
            sx={{ mt: 2 }}
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
          />
          <TextField
            label="Location"
            fullWidth
            sx={{ mt: 2 }}
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={createJob}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
