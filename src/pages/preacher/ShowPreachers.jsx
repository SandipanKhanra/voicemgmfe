/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

const ShowDevoteeDetails = ({ data }) => {
  // console.log(data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Center</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Connected Temple</TableCell>
            <TableCell align="center">Actinos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.centerName}</TableCell>
                <TableCell align="center">{row.mobile}</TableCell>
                <TableCell align="center">{row.templeConnectedTo}</TableCell>
                <TableCell align="center">
                  <Stack
                    spacing={1}
                    direction="row"
                    display="flex"
                    justifyContent="center"
                  >
                    <Button variant="contained" color="secondary">
                      View
                    </Button>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowDevoteeDetails;
