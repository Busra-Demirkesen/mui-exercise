import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
  <TableContainer component={Paper} sx={{ maxHeight: '300 px' }}>
    <Table aria-label="simple table" stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>);
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Marilee",
    last_name: "De Ruggiero",
    email: "mderuggiero0@4shared.com",
    gender: "Female",
    ip_address: "208.227.217.198",
  },
  {
    id: 2,
    first_name: "Hilary",
    last_name: "Planke",
    email: "hplanke1@163.com",
    gender: "Female",
    ip_address: "90.125.144.203",
  },
  {
    id: 3,
    first_name: "Paquito",
    last_name: "Muzzollo",
    email: "pmuzzollo2@fda.gov",
    gender: "Male",
    ip_address: "49.207.175.216",
  },
  {
    id: 4,
    first_name: "Brantley",
    last_name: "Brierley",
    email: "bbrierley3@virginia.edu",
    gender: "Male",
    ip_address: "146.156.189.85",
  },
  {
    id: 5,
    first_name: "Alfonso",
    last_name: "Rowter",
    email: "arowter4@arstechnica.com",
    gender: "Male",
    ip_address: "175.26.201.64",
  },
  {
    id: 6,
    first_name: "Rhea",
    last_name: "Jossum",
    email: "rjossum5@digg.com",
    gender: "Female",
    ip_address: "241.12.245.139",
  },
  {
    id: 7,
    first_name: "Dean",
    last_name: "Glasner",
    email: "dglasner6@google.co.uk",
    gender: "Male",
    ip_address: "54.85.159.29",
  },
  {
    id: 8,
    first_name: "Ann",
    last_name: "Renneke",
    email: "arenneke7@lycos.com",
    gender: "Female",
    ip_address: "180.152.14.89",
  },
  {
    id: 9,
    first_name: "Frances",
    last_name: "Denecamp",
    email: "fdenecamp8@webs.com",
    gender: "Female",
    ip_address: "174.2.111.224",
  },
  {
    id: 10,
    first_name: "Rouvin",
    last_name: "Boggers",
    email: "rboggers9@indiegogo.com",
    gender: "Male",
    ip_address: "205.155.8.157",
  },
];
