import React from 'react'
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
// import DonutChart from "../../components/DonutChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/YBarChart";
// import GeographyChart from "../../components/GeographyChart";
// import { mockPieDataJenjang as dataJenjang } from "../../data/mockData";
// import { mockPieDataSks as dataSks } from "../../data/mockData";
// import { mockPieJenisPeserta as JenisPeserta } from "../../data/mockData";
// import { mockDataContacts } from "../../data/mockData";
const dataPeserta = require("../../data/dataPeserta.json");

// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('file', 'utf8'));

// const styles = {
//     instructor: {
//         width: "430px",
//         height: "150px",
//         backgroundImage: "url('../../assets/dosen278.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//         borderRadius: "15px",
//         marginBottom: "15px"
//     },
//     self: {
//         width: "430px",
//         height: "150px",
//         backgroundImage: "url('../../assets/dosen279.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//         borderRadius: "15px"
//     },
//     container: {
//         position: "relative",
//         textAlign: "center",
//     },
//     text: {
//         position: "absolute",
//         width: "200px",
//         top: "70%",
//         left: "27%",
//         transform: "translate(-50%, -50%)",
//         fontSize: "64px",
//         fontFamily: "Montserrat",
//         fontStyle: "normal",
//         fontWeight: "600",
//         lineHeight: "96px",
//     }
// };

// const columns1 = [
//   { field: "id", headerName: "ID", flex: 0.5 },
// //   { field: "registrarId", headerName: "Kode Dosen" },
//   {
//     field: "access",
//     headerName: "Pekerjaan Peserta",
//     flex: 1,
//     cellClassName: "name-column--cell",
//   },
//   {
//     field: "age",
//     headerName: "Total",
//     flex: 1,
//   },
// //   {
// //     field: "Detail",
// //     headerName: "Action",
// //     flex: 1,
// //   },
// ];

// const columns2 = [
//   { field: "id", headerName: "ID", flex: 0.5 },
// //   { field: "registrarId", headerName: "Kode Dosen" },
// //   {
// //     field: "name",
// //     headerName: "Nama Dosen",
// //     flex: 1,
// //     cellClassName: "name-column--cell",
// //   },
//   {
//     field: "city",
//     headerName: "Institutsi Asal",
//     flex: 1,
//   },
//   {
//     field: "age",
//     headerName: "Total",
//     flex: 1,
//   },
// ];

const jenisPeserta2 = [
  {
    id: "Provider",
    label: "Provider",
    value: 0,
    percentage: 16.1,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Public",
    label: "Public",
    value: 0,
    percentage: 9.8,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Konsorsium",
    label: "Konsorsium",
    value: 0,
    percentage: 19.3,
    color: "hsl(234, 70%, 50%)",
  },
  {
    id: "Non Konsorsium",
    label: "Non Konsorsium",
    value: 0,
    percentage: 54.8,
    color: "hsl(234, 70%, 50%)",
  },
];

const mockYBarData = [
  {
    country: "< 18 Tahun",
    donut: 1,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "18 - 22 Tahun",
    donut: 1,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "23 - 28 Tahun",
    donut: 2,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "29 - 34 Tahun",
    donut: 3,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "35 - 40 Tahun",
    donut: 4,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "> 40 Tahun",
    donut: 5,
    donutColor: "hsl(76, 70%, 50%)",
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

const columns = [
  { field: "id", headerName: "ID", flex: 0.5 },
//   { field: "registrarId", headerName: "Kode Dosen" },
  {
    field: "nama_peserta",
    headerName: "Nama Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "jenis_kelamin",
    headerName: "Jenis Kelamin",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "email",
    headerName: "Alamat Email",
    flex: 1,
  },
  {
    field: "username",
    headerName: "Username LMS ICE Institute",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "perguruan_tinggi_peserta",
    headerName: "Perguruan Tinggi Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "last_login",
    headerName: "Last Login",
    flex: 1,
  },
];


const Peserta = () => {
  const [open, setOpen] = React.useState(true);
  const [totalPeserta, setTotalPeserta] = React.useState([])
  const [totalMahasiswa, setTotalMahasiswa] = React.useState([])
  const [totalDosen, setTotalDosen] = React.useState([])
  const [totalUmum, setTotalUmum] = React.useState([])
  const [totalStaff, setTotalStaff] = React.useState([])
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
    if (dataPeserta.length !== 0) {
      setTotalPeserta(dataPeserta.length)
      let countUmum = 0, countMahasiswa = 0, countDosen = 0, countStaff = 0, countMale = 0, countFemale = 0,countKonsorsium = 0, countNon = 0, countProvider = 0, countPublic = 0
      for (let i = 0; i < dataPeserta.length; i++) {
        if (dataPeserta[i].jenis_peserta === "Lecturer") {
          countDosen = countDosen + 1
        } else if (dataPeserta[i].jenis_peserta === "Student") {
          countMahasiswa = countMahasiswa + 1
        } else if (dataPeserta[i].jenis_peserta === "Public") {
          countUmum = countUmum + 1
        } else {
          countStaff = countStaff + 1
        }
        if (dataPeserta[i].status_pt === "Konsorsium") {
          countKonsorsium = countKonsorsium + 1
        } else if (dataPeserta[i].status_pt === "Non Konsorsium") {
          countNon = countNon + 1
        } else if (dataPeserta[i].status_pt === "Provider") {
          countProvider = countProvider + 1
        } else if (dataPeserta[i].status_pt === "Public") {
          countPublic = countPublic + 1
        }
        if (dataPeserta[i].jenis_kelamin === "Male") {
          countMale = countMale + 1
        } else if (dataPeserta[i].jenis_kelamin === "Female") {
          countFemale = countFemale + 1
        }
      }
      jenisPeserta1[0].value = countUmum
      jenisPeserta1[0].percentage = (countUmum / dataPeserta.length * 100).toString().slice(0,4)
      jenisPeserta1[1].value = countMahasiswa
      jenisPeserta1[1].percentage = (countMahasiswa / dataPeserta.length * 100).toString().slice(0,4)
      jenisPeserta1[2].value = countDosen
      jenisPeserta1[2].percentage = (countDosen / dataPeserta.length * 100).toString().slice(0,4)
      jenisPeserta1[3].value = countStaff
      jenisPeserta1[3].percentage = (countStaff / dataPeserta.length * 100).toString().slice(0,4)
      jenisPeserta2[0].value = countProvider
      jenisPeserta2[0].percentage = (countProvider / dataPeserta.length * 100).toString().slice(0,4)
      jenisPeserta2[1].value = countPublic
      jenisPeserta2[1].percentage = (countPublic / dataPeserta.length * 100).toString().slice(0,4)
      jenisPeserta2[2].value = countKonsorsium
      jenisPeserta2[2].percentage = (countKonsorsium / dataPeserta.length * 100).toString().slice(0,4)
      jenisPeserta2[3].value = countNon
      jenisPeserta2[3].percentage = (countNon / dataPeserta.length * 100).toString().slice(0,4)
      setTotalMahasiswa(countMahasiswa)
      setTotalDosen(countDosen)
      setTotalUmum(countUmum)
      setTotalStaff(countStaff)
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
        <Header title="PESERTA" subtitle="Dashboard Peserta ICE Institute" />

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
            title={totalPeserta}
            subtitle="Jumalah Peserta"
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
            title={totalUmum}
            subtitle="Peserta Umum"
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
            title={totalMahasiswa}
            subtitle="Peserta Mahasiswa"
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
            title={totalDosen}
            subtitle="Peserta Dosen"
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
            title={totalStaff}
            subtitle="Peserta Tenaga Kependidikan"
          />
        </Box>
        {/* END ROW 1 */}
         
        {/* ROW 2  */}
        <Box
          gridColumn="span 5"
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
        <Box
          gridColumn="span 7"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Berdasarkan Jenis Peserta
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <PieChart isDashboard={true} data= {jenisPeserta1} legendPos={{translateX:0, itemWidth: 100}}/>
          </Box>
        </Box>
         {/* END ROW 2  */}
        
         {/* ROW 3  */}
        {/* <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Pesebaran Asal Peserta
          </Typography>
          <Box height="430px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
         {/* END ROW 3  */}
        
         {/* ROW 4  */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Berdasarkan Status Mitra
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <PieChart isDashboard={true}
            data= {jenisPeserta2}
            legendPos={{translateX:0, itemWidth: 100}}/>
          </Box>
        </Box>
        <Box
          gridColumn="span 7"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Berdasarkan Usia
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <BarChart data={mockYBarData} isDashboard={true} />
          </Box>
        </Box>
         {/* END ROW 4 */}
        
        {/* ROW 5 */}
        {/* <Box
          gridColumn="span 6"
          gridRow="span 4"
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
              height="90vh"
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
                rows={mockDataContacts}
                columns={columns1}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 4"
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
              height="90vh"
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
                rows={mockDataContacts}
                columns={columns2}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Box>
        </Box> */}
        {/* END ROW 5 */}
        
        {/* ROW 6 */}
        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Detail Peserta
          </Typography>
          <Box height="250px">
            <Box
              m="40px 0 0 0"
              height="90vh"
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
                rows={dataPeserta}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Box>
        </Box>
        {/* END ROW 6 */}
      </Box>
    </Box>
  );
};

export default Peserta;
