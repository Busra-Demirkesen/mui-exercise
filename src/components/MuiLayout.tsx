import { Box, Stack, Divider, Grid,Paper } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ border: "1px solid" }}
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

      <Grid container sx={{ my: 4 }} spacing={2}>
        <Grid item xs={12} sm={3}>
          <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item1</Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item2</Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item3</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
