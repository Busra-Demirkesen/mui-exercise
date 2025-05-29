import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";



const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon/>}
    >
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' tooltipOpen/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' tooltipOpen/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' tooltipOpen/>
    </SpeedDial>
  );
};

export default MuiSpeedDial;
