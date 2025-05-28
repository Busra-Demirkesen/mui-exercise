import { Box, Stack, Divider } from "@mui/material";

const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
            transform: "scale(1.1)",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        Codevolution
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "100px",
          width: "100px",
          padding: "16px",
          bgcolor: "success.light",
          "&:hover": {
            backgroundColor: "success.main",
            cursor: "pointer",
            transform: "scale(1.1)",
            transition: "all 0.3s ease-in-out",
          },
        }}
      />
    </Stack>
  );
};

export default MuiLayout;
