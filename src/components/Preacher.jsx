/* eslint-disable no-undef */
import { Col, Row } from "react-bootstrap";
import ShowPreachers from "../pages/preacher/ShowPreachers";
import { Box, Container, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useLoaderData, useNavigation } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import SimpleBackdrop from "../global/SimpleBackdrop";

const Preacher = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  return (
    <Container component="main" maxWidth="xl">
      <Box component={Paper} sx={{ height: "100vh", mt: 2 }} elevation={4}>
        {navigation.state === "loading" && <SimpleBackdrop open={true} />}
        <Paper
          sx={{
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            height: "100vh",
            px: 2,
          }}
          elevation={6}
        >
          <Row className=" justify-content-center p-2 m-4">
            <Col>
              <Typography variant="h4" textAlign="center">
                Welcome to Preacher&apos;s Dashboard
              </Typography>
            </Col>
          </Row>
          <Typography variant="h5">Preachers Details List</Typography>
          <Box sx={{ p: 2 }}>
            <Row>
              <ShowPreachers data={data} />
            </Row>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Preacher;

export async function loader() {
  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:8000/api/v1";
  } else if (process.env.NODE_ENV === "production") {
    url = "http://localhost:https://voice-mgm.onrender.com/api/v1";
  }
  const response = await axios.get(`${url}/preachers`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthToken(),
    },
  });

  if (response.status === 400 || response.status === 401) {
    return response;
  }
  if (response.status === 500) {
    return response;
  }
  return response.data.preachers;
}
