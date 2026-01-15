import { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  MenuItem,
  Snackbar
} from "@mui/material";
import { users } from "./../../data/users";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

export default function Signup() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "APPLICANT"
  });
  const [success, setSuccess] = useState(false);

  const handleSignup = () => {
    const { email, password, role } = formData;

    if (!email || !password) return;

    const exists = users.find(u => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    const newUser = {
      id: users.length + 1,
      role,
      email,
      password
    };

    users.push(newUser);
    setSuccess(true);

    // reset form
    setFormData({
      email: "",
      password: "",
      role: "APPLICANT"
    });

    console.log("Users List:", users);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <>
      <Paper sx={{ p: 3, width: 400, mx: "auto", mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Email"
          value={formData.email}
          sx={{ mt: 2 }}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={formData.password}
          sx={{ mt: 2 }}
          onChange={handleChange}
        />

        <TextField
          select
          fullWidth
          label="Role"
          value={formData.role}
          sx={{ mt: 2 }}
          onChange={handleChange}
        >
          <MenuItem value="APPLICANT">Applicant</MenuItem>
          <MenuItem value="COMPANY">Company</MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleSignup}
        >
          Register
        </Button>

        <Typography sx={{ mt: 2 }} align="center">
          Already have an account?{" "}
          <Link
            component={RouterLink}
            to="/login"
            underline="hover"
          >
            Login
          </Link>
        </Typography>
      </Paper>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => setSuccess(false)}
        message="User Registered Successfully"
      />
    </>
  );
}
