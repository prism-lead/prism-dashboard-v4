import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shell from "./components/Shell";
import SegmentMap from "./pages/SegmentMap";
import AudienceROI from "./pages/AudienceROI";
import MessageMap from "./pages/MessageMap";
import SegmentProfile from "./pages/SegmentProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<SegmentMap />} />
          <Route path="roi" element={<AudienceROI />} />
          <Route path="messages" element={<MessageMap />} />
          <Route path="profile" element={<SegmentProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
