import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";

export default function CreateJobDialog({
    open,
    onClose,
    onCreate,
    jobTitle,
    setJobTitle,
    location,
    setLocation,
}) {
    return (
        <Dialog open={open} onClose={onClose}>
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
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={onCreate}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}
