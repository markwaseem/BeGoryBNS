import { Switch, Route } from "wouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import FreedomJourneyPage from "./pages/FreedomJourneyPage";
import VideoGalleryPage from "./pages/VideoGalleryPage";
import DonatePage from "./pages/DonatePage"; 

function Router() {
  return (
    <Switch>
      {/* هنا الرابط الرئيسي للموقع يوجه لصفحة التعريف مباشرة */}
      <Route path="/" component={AboutPage} /> 
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/freedom-journey" component={FreedomJourneyPage} />
      <Route path="/videos" component={VideoGalleryPage} />
      <Route path="/donate" component={DonatePage} />
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;