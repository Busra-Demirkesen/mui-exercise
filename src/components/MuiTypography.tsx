import React from "react";
import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt
        reiciendis ab assumenda numquam provident neque, ducimus vero labore
        illo mollitia officiis incidunt deserunt minus dicta nostrum veritatis.
        Unde, repudiandae.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga similique
        veritatis expedita iusto? Saepe sunt esse nam assumenda officia labore
        obcaecati eos doloribus maiores, excepturi sed placeat explicabo,
        pariatur voluptatum.
      </Typography>
    </div>
  );
}

export default MuiTypography;
