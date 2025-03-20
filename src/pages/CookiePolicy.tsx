
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Cookie, CircuitBoard } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-6 text-white flex items-center gap-2">
            <Cookie className="text-cyber-purple h-8 w-8" />
            Cookie <span className="text-cyber-purple">Policy</span>
          </h1>
          
          <div className="glass-panel p-6 mb-10">
            <p className="text-gray-300 mb-8">
              This Cookie Policy explains how CryptoMemeX uses cookies and similar technologies to recognize you when you visit our platform. 
              It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  What Are Cookies?
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                    Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
                    as well as to provide reporting information.
                  </p>
                  <p>
                    Cookies set by the website owner (in this case, CryptoMemeX) are called "first-party cookies". 
                    Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies 
                    enable third-party features or functionality to be provided on or through the website (e.g., advertising, 
                    interactive content, and analytics).
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Why Do We Use Cookies?
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons 
                    for our platform to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies 
                    enable us to track and target the interests of our users to enhance the experience on our platform.
                  </p>
                  <p>
                    The specific types of cookies we use include:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong className="text-white">Essential cookies:</strong> These cookies are strictly necessary to provide you with services available through our platform and to use some of its features, such as access to secure areas. Without these cookies, we cannot provide certain services on our platform.
                    </li>
                    <li>
                      <strong className="text-white">Performance cookies:</strong> These cookies collect information about how visitors use our platform, such as which pages visitors go to most often and if they receive error messages from web pages. These cookies don't collect information that identifies a visitor; they only collect aggregated information that is anonymous.
                    </li>
                    <li>
                      <strong className="text-white">Functionality cookies:</strong> These cookies allow our platform to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts, and other customizable parts of our platform.
                    </li>
                    <li>
                      <strong className="text-white">Targeting cookies:</strong> These cookies record your visit to our platform, the pages you have visited, and the links you have followed. We will use this information to make our platform and the advertising displayed on it more relevant to your interests.
                    </li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  How Can You Control Cookies?
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner when you first visit our platform.
                  </p>
                  <p>
                    You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our platform, but your access to some functionality and areas may be restricted.
                  </p>
                  <p>
                    The specific way to refuse cookies through your web browser controls varies from browser to browser. You can find information about managing cookies in the help section of your browser or by visiting websites such as <a href="https://www.allaboutcookies.org" className="text-cyber-purple underline">allaboutcookies.org</a>.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  What About Other Tracking Technologies?
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our platform.
                  </p>
                  <p>
                    We also use local storage, which allows data to be stored locally on your device and includes HTML5 local storage and browser cache.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Do You Use Flash Cookies or Local Shared Objects?
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our platform may also use "Flash Cookies" (also known as Local Shared Objects or "LSOs") to collect and store information about your use of our services, fraud prevention, and other site operations.
                  </p>
                  <p>
                    If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" className="text-cyber-purple underline">Website Storage Settings Panel</a>.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Changes to This Cookie Policy
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our platform. Your continued use of our platform following these changes means that you accept the revised Cookie Policy.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Contact Us
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about our use of cookies or other technologies, please email us at privacy@cryptomemex.io.
                  </p>
                  <p className="text-sm text-gray-400 mt-6">
                    Last updated: May 20, 2025
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
