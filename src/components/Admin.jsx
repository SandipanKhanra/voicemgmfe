import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getAuthToken } from "../utils/auth";

const Admin = () => {
  const [preachersList, setPreachersList] = useState([]);
  const getAllPreachers = async () => {
    const token = getAuthToken();
    const response = await axios.get("http://localhost:8000/api/v1/preachers", {
      headers: { Authorization: token },
    });

    setPreachersList(response.data.preachers);
  };
  useEffect(() => {
    getAllPreachers();
  }, []);
  return (
    <Paper sx={{ m: "0 auto", width: "90%" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Center</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Connected Temple</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {preachersList &&
              preachersList.map((row) => (
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
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Admin;
