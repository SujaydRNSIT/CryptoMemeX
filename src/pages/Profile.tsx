
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserProfile from "@/components/UserProfile";
import ParallaxBackground from "@/components/ParallaxBackground";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20">
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
