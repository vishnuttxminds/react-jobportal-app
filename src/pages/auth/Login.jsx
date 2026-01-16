import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TextField, Button, Paper, Typography, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import useSnackbar from "../../hooks/useSnackbar";


export default function Login() {
    const { login, currentUser } = useContext(AuthContext);
    const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();


    const handleLogin = () => {
        const result = login(formData.email, formData.password);

        console.log("Login result:", result);

        if (!result.success) {
            showSnackbar(result.message, "error");
        }
    };

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
                onClick={() => handleLogin()}
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


            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={closeSnackbar}
                    severity={snackbar.severity}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Paper>


    );
}
