import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumbs" separator=">" maxItems={3} itemsAfterCollapse={2}>
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catolog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
