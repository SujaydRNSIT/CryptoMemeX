
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Shield, CircuitBoard } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-6 text-white flex items-center gap-2">
            <Shield className="text-cyber-purple h-8 w-8" />
            Privacy <span className="text-cyber-purple">Policy</span>
          </h1>
          
          <div className="glass-panel p-6 mb-10">
            <p className="text-gray-300 mb-8">
              At CryptoMemeX, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Information We Collect
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We collect information that you provide directly to us when you:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Create an account or connect your wallet</li>
                    <li>Create, buy, sell, or trade NFTs</li>
                    <li>Communicate with us or other users</li>
                    <li>Participate in surveys, contests, or promotions</li>
                    <li>Subscribe to newsletters or other communications</li>
                  </ul>
                  <p>
                    This information may include your wallet address, email address, username, profile information, 
                    transaction history, and any other information you choose to provide.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  How We Use Your Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and maintain records</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, prevent, and address fraud or other illegal activities</li>
                    <li>Personalize your experience and provide targeted content</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Information Sharing and Disclosure
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Service providers who perform services on our behalf</li>
                    <li>Business partners with whom we jointly offer products or services</li>
                    <li>Other users, when you interact with them on our platform</li>
                    <li>Law enforcement or other parties when required by law or to protect our rights</li>
                  </ul>
                  <p>
                    Please note that all NFT transactions are recorded on the Aptos blockchain and are publicly available.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Your Rights and Choices
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict or object to processing</li>
                    <li>The right to data portability</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at privacy@cryptomemex.io.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Security
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We take reasonable measures to help protect your personal information from loss, theft, misuse, 
                    and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, 
                    and we cannot guarantee the security of our systems or your information.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Changes to This Policy
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. If we make material changes, 
                    we will notify you by email or through our platform. Your continued use of our services 
                    after such notice constitutes your acceptance of the changes.
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
                    If you have any questions or concerns about this Privacy Policy, 
                    please contact us at privacy@cryptomemex.io.
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

export default PrivacyPolicy;
