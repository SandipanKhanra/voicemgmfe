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
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Form, useActionData } from "react-router-dom";
import { useState } from "react";

const VoiceRegistrationForm = () => {
  const actionData = useActionData();
  const formData = useState(actionData);
  const [locationData, setLocationData] = useState({
    latitude: "",
    longitude: "",
  });

  function getLocationCords(position) {
    setLocationData((prevState) => {
      return {
        ...prevState,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  }
  function handleLocationData() {
    navigator.geolocation.getCurrentPosition(getLocationCords);
    console.log(locationData);
  }

  return (
    <Container sx={{ bgcolor: "white" }} component={Paper} maxWidth="md" m={4}>
      <Typography variant="h3" textAlign="center" pt={2}>
        VOICE Registration Form
      </Typography>
      <Form
        sx={{ display: "flex", justifyContent: "center", width: "50%" }}
        method="post"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="voicename"
              label="VOICE Name"
              name="name"
              variant="standard"
              value={formData.name}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address1"
              label="Address1"
              name="address1"
              variant="standard"
              value={formData.address1}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="landmark"
              label="Landmark"
              name="landmark"
              variant="standard"
              value={formData.landmark}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              label="State"
              variant="standard"
              name="state"
              value={formData.state}
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
              value={formData.country}
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
              value={formData.pincode}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="success"
              endIcon={<MyLocationIcon />}
              onClick={handleLocationData}
            >
              Get Location
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="latitude"
              label="Latitude"
              value={locationData.latitude}
              variant="standard"
              disabled
              fullWidth
              required
              style={{ display: locationData.latitude === "" ? "none" : "" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="longitude"
              label="Longitude"
              variant="standard"
              value={locationData.longitude}
              disabled
              fullWidth
              required
              style={{ display: locationData.longitude === "" ? "none" : "" }}
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

export default VoiceRegistrationForm;

export async function action({ request }) {
  const data = await request.formData();
  const voicedata = {
    name: data.get("name"),
    address1: data.get("address1"),
    state: data.get("state"),
    country: data.get("country"),
    pincode: data.get("pincode"),
    landmark: data.get("landmark"),
  };
  console.log(voicedata);
  return voicedata;
}
