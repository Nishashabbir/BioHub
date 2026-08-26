import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import SocialLinks from "./pages/SocialLinks";
import Settings from "./pages/settings";
import PublicProfile from "./pages/PublicProfile";
import ThemeGallery from "./pages/ThemeGallery";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/links" element={<SocialLinks />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/u/:username" element={<PublicProfile />} />
      <Route path="/themes" element={<ThemeGallery />} />
    </Routes>
  );
}