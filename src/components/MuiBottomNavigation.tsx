import { BottomNavigation, BottomNavigationAction} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
const MuiBottomNavigation = () => {
  return (
    <BottomNavigation sx={{width:'100%', position:'absolute', bottom:0}}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  )
}

export default MuiBottomNavigation
