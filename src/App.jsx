import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Message from "./pages/Message";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import Team from "./pages/Team";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="message" element={<Message />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="settings" element={<Settings />} />
          <Route path="team" element={<Team />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
