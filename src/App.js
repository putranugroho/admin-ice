import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Matakuliah from "./scenes/konten/matakuliah";
import Dosen from "./scenes/konten/dosen";
import Peserta from "./scenes/konten/peserta";
import Mitra from "./scenes/mitra/mitra";
import PerguruanTinggi from "./scenes/konten/perguruanTinggi";
import PesertaKonsorsium from "./scenes/konten/pesertaKonsorsium";
import PesertaXuetang from "./scenes/konten/pesertaXuetang";
import PesertaCoursera from "./scenes/konten/pesertaCoursera";
import PesertaEdx from "./scenes/konten/pesertaEdx";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/matakuliah" element={<Matakuliah />} />
              <Route path="/dosen" element={<Dosen />} />
              <Route path="/peserta" element={<Peserta />} />
              <Route path="/perguruanTinggi" element={<PerguruanTinggi />} />
              <Route path="/pesertaKonsorsium" element={<PesertaKonsorsium />} />
              <Route path="/pesertaEdx" element={<PesertaEdx />} />
              <Route path="/pesertaCoursera" element={<PesertaCoursera />} />
              <Route path="/pesertaXuetang" element={<PesertaXuetang />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/team" element={<Team />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/mitra/:perguruan_tinggi" element={<Mitra />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
