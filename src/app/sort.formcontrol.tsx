
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

interface SelectFormProps {
  selection: (categori: string) => void;
}

const Sort = ({ selection }: SelectFormProps) => {
  const [categori, setCategori] = useState<string>("");

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 110 }}>
        <InputLabel id="demo-simple-select-autowidth-label">sort</InputLabel>
        <Select
          disabled={false}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={categori}
          onChange={(e) => {
            setCategori(e.target.value);
            selection(e.target.value);
          }}
          autoWidth
          label="sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"desc"}>desc</MenuItem>
          <MenuItem value={"ascs"}>asc</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
