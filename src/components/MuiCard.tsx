import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card sx={{ backgroundColor: "lightblue", boxShadow: 3 }}>
        <CardMedia
          component={"img"}
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            inventore, alias distinctio maxime maiores laudantium quam
            blanditiis modi ducimus vel saepe eius, eveniet nemo ut, eligendi
            veritatis sequi eum! Quidem?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="'small" color="primary">
            Share
          </Button>
          <Button size="'small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
