import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function JobCard({ job, onApply }) {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {job.title}
        </Typography>

      

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          <strong>Company: </strong>{job.company || "Company Name"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          <strong>Experience: </strong> {job.experience || "Experience"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          <strong>End Date: </strong> {job.endDate || "End Date"}
        </Typography>

        <Button
          variant="contained"
          onClick={() => onApply(job)}
        >
          Apply
        </Button>
      </CardContent>
    </Card>
  );
}
