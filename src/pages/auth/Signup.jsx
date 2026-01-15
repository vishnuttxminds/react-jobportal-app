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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("APPLICANT");
  const [success, setSuccess] = useState(false);

  const handleSignup = () => {
    // simple validation
    if (!email || !password) return;

    // check existing user
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

    // reset
    setEmail("");
    setPassword("");
    setRole("APPLICANT");

    console.log("Users List:", users);
  };

  return (
    <>
      <Paper sx={{ p: 3, width: 400, mx: "auto", mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Email"
          value={email}
          sx={{ mt: 2 }}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          sx={{ mt: 2 }}
          onChange={e => setPassword(e.target.value)}
        />

        <TextField
          select
          fullWidth
          label="Role"
          value={role}
          sx={{ mt: 2 }}
          onChange={e => setRole(e.target.value)}
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
