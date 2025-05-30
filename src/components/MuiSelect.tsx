import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width={"250px"}>
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth // with 100% gibi düşünülebilir
        SelectProps={{
          multiple: true, // birden fazla seceneği secebilmek için kullanıyoruz
        }}
        size='small'
        color='secondary'
        helperText='please select your country'
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austuralia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
