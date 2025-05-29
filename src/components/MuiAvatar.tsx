import { Stack, Avatar, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'primary.light' }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'primary.light' }}>CK</Avatar>
        <Avatar src="https://randomuser.me/api/portraits/women/79.jpg"/>
        </AvatarGroup>
      </Stack>
       <Stack direction="row" spacing={1}>
        <Avatar variant="square" sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: 'primary.light' }}>CK</Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
