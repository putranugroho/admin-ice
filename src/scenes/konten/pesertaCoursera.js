import React, { useEffect } from 'react'
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import LineChart from "../../components/LineChart";
// import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";
// import AreaBump from "../../components/AreaBumb";
import StatBox from "../../components/StatBox";
// import DonutChart from "../../components/DonutChart";
import BarChart from "../../components/XBarChart";
const dataCourseCoursera = require("../../data/reportCourseCoursera.json");
const dataUserCoursera = require("../../data/reportUserCoursera.json");

const jenisPeserta1 = [
  {
    id: "Umum",
    label: "Umum",
    value: 0,
    percentage: 19.3,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Mahasiswa",
    label: "Mahasiswa",
    value: 0,
    percentage: 54.8,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Dosen",
    label: "Dosen",
    value: 0,
    percentage: 16.1,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Tendik",
    label: "Tendik",
    value: 0,
    percentage: 9.8,
    color: "hsl(234, 70%, 50%)",
  },
];

const jenisPeserta2 = [
  {
    id: "Mahasiswa",
    label: "Mahasiswa",
    value: 0,
    percentage: 54.8,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Dosen",
    label: "Dosen",
    value: 0,
    percentage: 16.1,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Tendik",
    label: "Tendik",
    value: 0,
    percentage: 9.8,
    color: "hsl(234, 70%, 50%)",
  },
];

const mockBarData = [
  {
    title: "Provider",
    hotdog: 0,
    "hot dogColor": "hsl(229, 70%, 50%)",
  },
  {
    title: "Public",
    hotdog: 0,
    "hot dogColor": "hsl(229, 70%, 50%)",
  },
  {
    title: "Konsorsium",
    hotdog: 0,
    "hot dogColor": "hsl(229, 70%, 50%)",
  },
  {
    title: "Non Konsorsium",
    hotdog: 0,
    "hot dogColor": "hsl(229, 70%, 50%)",
  },
];

const columns = [
  { field: "id", headerName: "Number", flex: 0.5 },
  // { field: "registrarId", headerName: "Kode Dosen" },
  {
    field: "course_publisher",
    headerName: "Institutsi Asal",
    flex: 1,
  },
  {
    field: "course_title",
    headerName: "Mata Kuliah",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "total_course_user",
    headerName: "Jumlah Peserta",
    flex: 1,
  },
];

const styles = {
    instructor: {
        width: "430px",
        height: "150px",
        backgroundImage: "url('../../assets/dosen278.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        borderRadius: "15px",
        marginBottom: "15px"
    },
    self: {
        width: "430px",
        height: "150px",
        backgroundImage: "url('../../assets/dosen279.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        borderRadius: "15px"
    },
    container: {
        position: "relative",
        textAlign: "center",
    },
    text: {
        position: "absolute",
        width: "200px",
        top: "70%",
        left: "27%",
        transform: "translate(-50%, -50%)",
        fontSize: "64px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "96px",
    }
};


const PesertaCoursera = () => {
  const [open, setOpen] = React.useState(true);
  const [totalPeserta, setTotalPeserta] = React.useState(true);
  // const [totalMahasiswa, setTotalMahasiswa] = React.useState([])
  // const [totalDosen, setTotalDosen] = React.useState([])
  // const [totalUmum, setTotalUmum] = React.useState([])
  // const [totalStaff, setTotalStaff] = React.useState([])
  const [totalMale, setTotalMale] = React.useState([])
  const [totalFemale, setTotalFemale] = React.useState([])
  // const [totalKonsorsium, setTotalKonsorsium] = React.useState([])
  // const [totalNonKonsorsium, setTotalNonKonsorsium] = React.useState([])
  // const [totalProvider, setTotalProvider] = React.useState([])
  // const [totalPublic, setTotalPublic] = React.useState([])

  const handleOpen = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    if (dataUserCoursera.length !== 0) {
      let countTotalUser = 0,
      countUmum = 0, countMahasiswa = 0, countDosen = 0, countStaff = 0,
      countKonsorsium = 0, countNon = 0, countProvider = 0, countPublic = 0,
      countMale = 0, countFemale = 0
      

      for (let i = 0; i < dataUserCoursera.length; i++) {
        if (dataUserCoursera[i].tipe_peserta === "Lecturer") {
          countDosen = countDosen + 1
        } else if (dataUserCoursera[i].tipe_peserta === "Student") {
          countMahasiswa = countMahasiswa + 1
        } else if (dataUserCoursera[i].tipe_peserta === "Public") {
          countUmum = countUmum + 1
        } else {
          countStaff = countStaff + 1
        }
        if (dataUserCoursera[i].status_perguruan_tinggi === "Konsorsium") {
          countKonsorsium = countKonsorsium + 1
        } else if (dataUserCoursera[i].status_perguruan_tinggi === "Non Konsorsium") {
          countNon = countNon + 1
        } else if (dataUserCoursera[i].status_perguruan_tinggi === "Provider") {
          countProvider = countProvider + 1
        } else if (dataUserCoursera[i].status_perguruan_tinggi === "Public") {
          countPublic = countPublic + 1
        }
        if (dataUserCoursera[i].gender === "Male") {
          countMale = countMale + 1
        } else if (dataUserCoursera[i].gender === "Female") {
          countFemale = countFemale + 1
        }
        countTotalUser = countTotalUser + dataUserCoursera[i].total_course_title
      }
      mockBarData[0].hotdog = countProvider
      mockBarData[1].hotdog = countPublic
      mockBarData[2].hotdog = countKonsorsium
      mockBarData[3].hotdog = countNon
      jenisPeserta1[0].value = countUmum
      jenisPeserta1[1].value = countMahasiswa
      jenisPeserta1[2].value = countDosen
      jenisPeserta1[3].value = countStaff
      jenisPeserta1[0].percentage = (countProvider / dataUserCoursera.length * 100).toString().slice(0,4)
      jenisPeserta1[1].percentage = (countPublic / dataUserCoursera.length * 100).toString().slice(0,4)
      jenisPeserta1[2].percentage = (countKonsorsium / dataUserCoursera.length * 100).toString().slice(0,4)
      jenisPeserta1[3].percentage = (countNon / dataUserCoursera.length * 100).toString().slice(0,4)

      setTotalPeserta(countTotalUser)
      // setTotalMahasiswa(countMahasiswa)
      // setTotalDosen(countDosen)
      // setTotalUmum(countUmum)
      // setTotalStaff(countStaff)
      setTotalMale(countMale)
      setTotalFemale(countFemale)
      // setTotalKonsorsium(countKonsorsium)
      // setTotalNonKonsorsium(countNon)
      // setTotalProvider(countProvider)
      // setTotalPublic(countPublic)
    }
  }, [])

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DOSEN" subtitle="Dashboard dosen ICE Institute" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleOpen}
          >
            {/* <DownloadOutlinedIcon  sx={{ mr: "10px" }} /> */}
            {open ? <div>Semester</div>
            :
            <ul style={{listStyle: "none"}}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>}
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="35px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title={dataUserCoursera.length}
            subtitle="Jumalah Peserta"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title={totalPeserta}
            subtitle="Jumalah Peserta Berdasarkan Mata Kuliah"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title="0"
            subtitle="Jumalah Peserta Berdasarkan Institusi"
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title={dataCourseCoursera.length}
            subtitle="Jumlah Mata Kuliah"
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title="183"
            subtitle="Jumlah Institusi"
          />
        </Box>
        {/* END ROW 1 */}
        
        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Status Perguruan Tinggi Peserta
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <BarChart data={mockBarData} isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2">
            <Box
            backgroundColor={colors.primary[400]}
            position="relative"
            alignItems="center"
            justifyContent="center"
            style={styles.instructor}
            >
                <div style={styles.text}>
                    <b>{totalFemale}</b>
                </div>
            </Box>
            <Box
            backgroundColor={colors.primary[400]}
            position="relative"
            alignItems="center"
            justifyContent="center"
            style={styles.self}
            >
                <div style={styles.text}>
                    <b>{totalMale}</b>
                </div>
            </Box>
        </Box>
        {/* <Box
          gridColumn="span 0"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Pesebaran Dosen
          </Typography>
          <Box height="250px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
        {/* END ROW 2 */}
        
        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Status Peserta dari Perguruan Tinggi
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <PieChart isDashboard={true} data= {jenisPeserta2} legendPos={{translateX:0, itemWidth: 120}}/>
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Tipe Peserta
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <PieChart isDashboard={true} data= {jenisPeserta1} legendPos={{translateX:0, itemWidth: 100}}/>
          </Box>
        </Box>
        {/* END ROW 3 */}
        
        {/* ROW 4 */}
        {/* <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Status Peserta dari Perguruan Tinggi
            </Typography>
            <Box height="250px" mt="-20px" pl="10px">
              <AreaBump isDashboard={true} data= {StatusPeserta}/>
            </Box>
        </Box> */}
        {/* END ROW 4 */}
        
        {/* ROW 5 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Berdasarkan Jenjang
          </Typography>
          <Box height="250px">
            <Box
              m="40px 0 0 0"
              height="75vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            >
              <DataGrid
                rows={dataCourseCoursera}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Box>
        </Box>
        {/* END ROW 5 */}
      </Box>
    </Box>
  );
};

export default PesertaCoursera;
