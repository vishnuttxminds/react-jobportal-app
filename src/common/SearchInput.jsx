import { TextField } from "@mui/material";

export default function SearchInput({
  label = "Search",
  placeholder,
  value,
  onChange,
}) {
  return (
    <TextField
      fullWidth
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
}
