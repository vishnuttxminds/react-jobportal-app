import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";

export default function DashboardGridCard({
  title,
  items,
  getPrimary,
  getSecondary,
}) {
  return (
    <Grid item xs={12} md={6}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>

          <List>
            {items.map(item => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={getPrimary(item)}
                  secondary={getSecondary ? getSecondary(item) : null}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}
