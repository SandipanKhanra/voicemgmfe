import { Col, Row } from "react-bootstrap";
import ShowDevoteeDetails from "../pages/preacher/ShowDevoteeDetails";
import { Paper } from "@mui/material";
const DEV_DATA = [
  {
    id: "v1",
    name: "Roham Fulare",
    college: "MMCOE",
    group: "Nakul",
    year: "3rd",
    counselor: "HG KKP",
  },
  {
    id: "v2",
    name: "Akshay Shinde",
    college: "MMCOE",
    group: "Arjun",
    year: "3rd",
    counselor: "HG KKP",
  },
  {
    id: "v3",
    name: "Sahil Chaudhury",
    college: "MMCOE",
    group: "Ajun",
    year: "3rd",
    counselor: "HG KKP",
  },
  {
    id: "v7",
    name: "Sahil Chaudhury",
    college: "MMCOE",
    group: "Ajun",
    year: "3rd",
    counselor: "HG KKP",
  },
  {
    id: "v4",
    name: "Sahil Chaudhury",
    college: "MMCOE",
    group: "Ajun",
    year: "3rd",
    counselor: "HG KKP",
  },
  {
    id: "v5",
    name: "Sahil Chaudhury",
    college: "MMCOE",
    group: "Ajun",
    year: "3rd",
    counselor: "HG KKP",
  },
  {
    id: "v6",
    name: "Sahil Chaudhury",
    college: "MMCOE",
    group: "Ajun",
    year: "3rd",
    counselor: "HG KKP",
  },
];

const Preacher = () => {
  return (
    <Paper
      sx={{ width: "90%", m: "0 auto" }}
      style={{ borderRadius: "50%" }}
      elevation={4}
    >
      <div className="container-fluid " style={{ backgroundColor: "#4e5ff5" }}>
        <Row className=" justify-content-center">
          <Col>
            <h5 className="text-center">
              Welcome to Preacher&apos;s Dashboard
            </h5>
          </Col>
        </Row>
        <h6>Devotee Details List</h6>
        <div
          className="container rounded p-4 "
          style={{ backgroundColor: "#c5c9eb" }}
        >
          <Row>
            <ShowDevoteeDetails data={DEV_DATA} />
          </Row>
        </div>
      </div>
    </Paper>
  );
};

export default Preacher;
