/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlockIcon from "@mui/icons-material/Block";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import CountrySelect from "./CountrySelect";
import axios from "axios";

const VinmateRegistrationForm = () => {
  const actionData = useActionData();

  return (
    <Container sx={{ bgcolor: "white" }} component={Paper} maxWidth="md" m={4}>
      <Typography variant="h3" textAlign="center" pt={2}>
        VInmate Registration Form
      </Typography>
      <Form
        sx={{ display: "flex", justifyContent: "center", width: "50%" }}
        method="post"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Name"
              name="name"
              variant="standard"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              label="Address"
              name="address"
              variant="standard"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={3} md={3}>
            <CountrySelect />
          </Grid>
          <Grid item xs={9} md={9}>
            <TextField
              id="mobile"
              label="Mobile"
              name="mobile"
              variant="standard"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="district"
              label="District"
              variant="standard"
              name="district"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              label="State"
              variant="standard"
              name="state"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              label="Country"
              variant="standard"
              name="country"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="pincode"
              label="Pincode"
              variant="standard"
              name="pincode"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date of Birth"
                  name="dob"
                  defaultValue={dayjs(new Date())}
                  format="DD-MM-YYYY"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="college"
              label="College"
              variant="standard"
              name="college"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="year"
              label="Year"
              variant="standard"
              name="year"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="group"
              label="Group"
              variant="standard"
              name="group"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="counselor"
              label="Counselor"
              variant="standard"
              name="counselor"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Connected In"
                  name="connectedIn"
                  defaultValue={dayjs(new Date())}
                  format="DD-MM-YYYY"
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Shifted In"
                  name="shiftedIn"
                  defaultValue={dayjs(new Date())}
                  format="DD-MM-YYYY"
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="passedOutBatch"
              label="Pass Out Batch"
              variant="standard"
              name="passedOutBatch"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="placedIn"
              label="Placed In"
              variant="standard"
              name="placedIn"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Stack direction="row" spacing={2} py={2}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<BlockIcon />}
              color="error"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              endIcon={<ArrowForwardIcon />}
            >
              Submit
            </Button>
          </Stack>
        </Grid>
      </Form>
    </Container>
  );
};

export default VinmateRegistrationForm;

export async function action({ request }) {
  const data = await request.formData();
  const voicedata = {
    name: data.get("name"),
    address: data.get("address"),
    district: data.get("district"),
    state: data.get("state"),
    country: data.get("country"),
    pincode: data.get("pincode"),
    mobile: data.get("mobile"),
    dob: data.get("dob"),
    college: data.get("college"),
    year: data.get("year"),
    group: data.get("group"),
    counselor: data.get("counselor"),
    connectedIn: data.get("connectedIn"),
    shiftedIn: data.get("shiftedIn"),
    passedOutBatch: data.get("passedOutBatch"),
    placedIn: data.get("placedIn"),
  };
  console.log(voicedata);
  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:8000/api/v1";
  } else if (process.env.NODE_ENV === "production") {
    url = "https://voice-mgm.onrender.com/api/v1";
  }
  const response = await axios.post(`${url}/vinmates`, voicedata);
  return voicedata;
}
