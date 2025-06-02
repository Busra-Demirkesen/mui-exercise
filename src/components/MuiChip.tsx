import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState} from "react";
const MuiChip = () => {
  const [chips, setChips] = useState<string[]>(["Chip 1", "Chip 2"]);
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label='Click' color='success' size='small' onClick={() => alert('Clicked!')} />
        <Chip
            label="Delete"
            color="error"
            size="small"
            onClick={() => alert("Deleted!")}
            onDelete={() => alert("Deleted!")}  ></Chip>
            {
              chips.map(chip =>(
                <Chip
                    key={chip}
                    label={chip}
                    onDelete={() => setChips(chips.filter(c => c !== chip))}
                    onClick={() => alert(`Clicked on ${chip}`)}
                    avatar={<Avatar>{chip.charAt(0)}</Avatar>}
                />
              ))

            }
    </Stack>
  );
};

export default MuiChip;
