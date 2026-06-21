import { Switch, Route } from "wouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import FreedomJourneyPage from "./pages/FreedomJourneyPage";
import VideoGalleryPage from "./pages/VideoGalleryPage";
import DonatePage from "./pages/DonatePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B132B] text-white font-sans antialiased">
      {/* الـ Navbar الثابت */}
      <Navbar />

      {/* محتوى الصفحات */}
      <main className="flex-grow pt-20">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/freedom-journey" component={FreedomJourneyPage} />
          <Route path="/videos" component={VideoGalleryPage} />
          <Route path="/donate" component={DonatePage} />
          
          <Route>
            <div className="flex h-[60vh] items-center justify-center">
              <h1 className="text-3xl font-bold text-gold">الصفحة غير موجودة 404</h1>
            </div>
          </Route>
        </Switch>
      </main>

      {/* الفوتر الثابت */}
      <Footer />
    </div>
  );
}

export default App;