import { Typography } from "@mui/material";

export default function EmptyState({ message }) {
  return (
    <Typography sx={{ ml: 2 }}>
      {message}
    </Typography>
  );
}
