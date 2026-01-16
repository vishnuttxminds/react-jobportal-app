import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

export default function CompanyJobCard({ job }) {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">
          {job.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {job.location}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          {job.company}
        </Typography>

        <List>
          {job.applicants?.length === 0 && (
            <Typography>No applicants yet</Typography>
          )}

          {job.applicants?.map((applicant, index) => (
            <ListItem key={index}>
              {applicant}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card >
  );
}
