import { Switch, Route, Router as WouterRouter } from "wouter";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import FreedomJourneyPage from "./pages/FreedomJourneyPage";
import VideoGalleryPage from "./pages/VideoGalleryPage";
import DonatePage from "./pages/DonatePage"; // أضفه إذا كنت تستخدمه
import NotFound from "./pages/not-found";

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/freedom-journey" component={FreedomJourneyPage} />
        <Route path="/videos" component={VideoGalleryPage} />
        {/* <Route path="/donate" component={DonatePage} /> */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Navbar />
      <Router />
    </WouterRouter>
  );
}

export default App;