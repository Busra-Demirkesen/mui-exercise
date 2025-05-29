import { Stack,Badge} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={'row'}>
      <Badge badgeContent={5} color='primary'>
        <MailIcon/>
      </Badge>

      <Badge badgeContent={5} color='secondary'>
        <MailIcon/>
      </Badge>

      <Badge badgeContent={100} color='primary'>
        <MailIcon/>
      </Badge>

      <Badge variant={100} color='primary'>
        <MailIcon/>
      </Badge>
    </Stack>
  )
}

export default MuiBadge
