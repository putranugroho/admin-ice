import React, { useEffect } from 'react'
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useParams } from 'react-router-dom'
import StatBox from "../../components/StatBox";
// import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import LineChart from "../../components/LineChart";
// import ProgressCircle from "../../components/ProgressCircle";
// import DonutChart from "../../components/DonutChart";
// import PieChart from "../../components/PieChart";
// import BarChart from "../../components/YBarChart";
// import GeographyChart from "../../components/GeographyChart";
// import { mockPieDataSks as dataSks } from "../../data/mockData";
// import { mockPieJenisPeserta as JenisPeserta } from "../../data/mockData";
const dataPeserta = require("../../data/dataPeserta.json");
const dataPesertaLMS = require("../../data/dataPesertaLMS.json");

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

const columns1 = [
  { field: "id", headerName: "ID", flex: 0.5 },
//   { field: "registrarId", headerName: "Kode Dosen" },
  {
    field: "nama_peserta",
    headerName: "Nama Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "email",
    headerName: "Email Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "institusi_peserta",
    headerName: "Institusi Peserta",
    flex: 1,
  },
  {
    field: "nama_mk",
    headerName: "Mata Kuliah",
    flex: 1,
  },
];

const columns2 = [
  // { field: "id", headerName: "ID", flex: 0.5 },
//   { field: "registrarId", headerName: "Kode Dosen" },
  {
    field: "nama_peserta",
    headerName: "Nama Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "email",
    headerName: "Email Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "nama_mk",
    headerName: "Mata Kuliah",
    flex: 1,
  },
  {
    field: "institusi_mk",
    headerName: "Institusi Mata Kuliah",
    flex: 1,
  },
];

const columns3 = [
  { field: "id", headerName: "ID", flex: 0.5 },
//   { field: "registrarId", headerName: "Kode Dosen" },
  {
    field: "username",
    headerName: "Username Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "first_name",
    headerName: "Nama Depan Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "last_name",
    headerName: "Nama Belakang Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "email",
    headerName: "Alamat Email",
    flex: 1,
  },
  {
    field: "is_active",
    headerName: "Aktif",
    flex: 1,
  },
  {
    field: "last_login",
    headerName: "Last Login",
    flex: 1,
  },
];

const columns4 = [
  { field: "id", headerName: "ID", flex: 0.5 },
//   { field: "registrarId", headerName: "Kode Dosen" },
  {
    field: "nama_mk",
    headerName: "Nama Mata Kuliah",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "total_peserta",
    headerName: "Total Peserta",
    flex: 1,
    cellClassName: "name-column--cell",
  },
];


const Mitra = () => {
  const [open, setOpen] = React.useState(true);
  const [peserta, setPeserta] = React.useState([])
  const [totalPeserta, setTotalPeserta] = React.useState()
  const [inbound, setInbound] = React.useState([])
  const [outbound, setOutbound] = React.useState([])
  const [mataKuliah, setMataKuliah] = React.useState([])
  let { perguruan_tinggi } = useParams()
  perguruan_tinggi = perguruan_tinggi.split("_").join(" ")

  const handleOpen = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let splitStr = perguruan_tinggi.toLowerCase().split(" ");
  // var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== "dan") {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
  }
  perguruan_tinggi = splitStr.join(" ");
  console.log(perguruan_tinggi);

  useEffect(() => {
    let data_institusi = []
    let data_outbound = []
    let data_inbound = []
    let data_mk = []
    if (dataPeserta.length !== 0) {
      for (let i = 0; i < dataPeserta.length; i++) {
        if (dataPeserta[i].institusi_peserta === perguruan_tinggi) {
          data_institusi.push(dataPeserta[i])
        }
        
      }
      for (let i = 0; i < dataPesertaLMS.length; i++) {
        console.log(dataPesertaLMS[i].institusi_peserta);
        console.log(perguruan_tinggi);
        if (dataPesertaLMS[i].institusi_peserta === perguruan_tinggi && dataPesertaLMS[i].institusi_mk !== perguruan_tinggi) {
          data_outbound.push(dataPesertaLMS[i])
        } else if (dataPesertaLMS[i].institusi_peserta !== perguruan_tinggi && dataPesertaLMS[i].institusi_mk === perguruan_tinggi) {
          data_inbound.push(dataPesertaLMS[i])
          let data = {
            "id" : data_mk.length+1,
            "nama_mk" : dataPesertaLMS[i].nama_mk,
            "total_peserta" : 1
          }
          if (data_mk.length === 0) {
            data_mk.push(data)
          } else {
            for (let j = 0; j < data_mk.length; j++) {
              if (data_mk[j].nama_mk === dataPesertaLMS[i].nama_mk) {
                data_mk[j].total_peserta++
                break;
              } else if (j+1 === data_mk.length) {
                data_mk.push(data)
                break;
              } 
            }
          }
          data_mk.sort((a, b) => Number(b.total_peserta) - Number(a.total_peserta));
        }

      }
      setPeserta(data_institusi)
      setTotalPeserta(data_institusi.length)
      setInbound(data_inbound)
      setOutbound(data_outbound)
      setMataKuliah(data_mk)
      console.log(data_inbound);
      console.log(data_outbound);
    }
  }, [perguruan_tinggi])

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
          gridColumn="span 4"
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
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title={inbound.length}
            subtitle="Inbound"
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title={outbound.length}
            subtitle="Outbound"
          />
        </Box>
        {/* <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100px" 
        >
          <StatBox
            title="1000"
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
            title="608"
            subtitle="Peserta Tenaga Kependidikan"
          />
        </Box> */}
        {/* END ROW 1 */}
         
        {/* ROW 2 
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
                    <b>214</b>
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
                    <b>214</b>
                </div>
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
            Berdasarkan Status Mitra
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <PieChart isDashboard={true} data= {JenisPeserta} legendPos={{translateX:0, itemWidth: 100}}/>
          </Box>
        </Box>
         END ROW 2 
        
         ROW 3 
        <Box
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
        </Box>
         END ROW 3 
        
         ROW 4 
        <Box
          gridColumn="span 4"
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
            <PieChart isDashboard={true} data= {JenisPeserta} legendPos={{translateX:0, itemWidth: 100}}/>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Berdasarkan Bahasa
          </Typography>
          <Box height="250px" mt="-20px" pl="10px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
         END ROW 4 */}
        
        {/* ROW 5 */}
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
            Inbound
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
                rows={mataKuliah}
                columns={columns4}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Box>
        </Box>
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
            Inbound
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
                rows={inbound}
                columns={columns1}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Box>
        </Box>
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
            Outbound
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
                rows={outbound}
                columns={columns2}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Box>
        </Box>
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
            Mahasiswa {perguruan_tinggi}
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
                rows={peserta}
                columns={columns3}
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

export default Mitra;
