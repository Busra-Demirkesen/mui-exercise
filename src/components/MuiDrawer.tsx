import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        color="primary"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <Typography variant="h6" component="div">
            Drawer Title
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Item 1</Typography>
            <Typography variant="body1">Item 2</Typography>
            <Typography variant="body1">Item 3</Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
