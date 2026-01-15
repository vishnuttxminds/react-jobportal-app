import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";


export default function Login() {
    const { login, currentUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            console.log("Logged in user:", currentUser.role);
            if (currentUser.role === "ADMIN") {
                navigate("/admin/dashboard");
            } else if (currentUser.role === "COMPANY") {
                navigate("/company/dashboard");
            } else if (currentUser.role === "APPLICANT") {
                navigate("/applicant/dashboard");
            }
        }
    }, [currentUser]);

    return (
        <Paper sx={{ p: 3, width: 400, mx: "auto", mt: 8 }}>
            <TextField
                fullWidth
                label="Email"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }
            />
            <TextField
                fullWidth
                label="Password"
                type="password"
                sx={{ mt: 2 }}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }
            />
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => login(formData.email, formData.password)}
            >
                Login
            </Button>


            <Typography sx={{ mt: 2 }} align="center">
                Don't have an account?{" "}
                <Link
                    component={RouterLink}
                    to="/signup"
                    underline="hover"
                >
                    SignUp
                </Link>
            </Typography>
        </Paper>
    );
}
