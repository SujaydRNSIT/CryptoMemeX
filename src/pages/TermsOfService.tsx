
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { FileText, CircuitBoard } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-6 text-white flex items-center gap-2">
            <FileText className="text-cyber-purple h-8 w-8" />
            Terms of <span className="text-cyber-purple">Service</span>
          </h1>
          
          <div className="glass-panel p-6 mb-10">
            <p className="text-gray-300 mb-8">
              Welcome to CryptoMemeX. These Terms of Service ("Terms") govern your access to and use of the CryptoMemeX platform. 
              Please read these Terms carefully before using our services.
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Acceptance of Terms
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By accessing or using CryptoMemeX, you agree to be bound by these Terms and our Privacy Policy. 
                    If you do not agree to these Terms, you may not access or use our services.
                  </p>
                  <p>
                    We may modify these Terms at any time. If we make changes, we will provide notice through our platform 
                    or by other means. Your continued use of CryptoMemeX after such notice constitutes your acceptance 
                    of the modified Terms.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Eligibility
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    You must be at least 18 years old to use CryptoMemeX. By using our services, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You are at least 18 years old</li>
                    <li>You have the legal capacity to enter into these Terms</li>
                    <li>You are not barred from using blockchain technology under applicable law</li>
                    <li>You will comply with these Terms and all applicable local, state, national, and international laws</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Account Creation and Wallet Connection
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    To use certain features of CryptoMemeX, you must connect a compatible cryptocurrency wallet. 
                    You are responsible for maintaining the security of your wallet and all activities that occur under your account.
                  </p>
                  <p>
                    You agree to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide accurate and complete information when connecting your wallet</li>
                    <li>Maintain the security of your wallet's private keys</li>
                    <li>Promptly notify us of any unauthorized use of your account or breach of security</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  NFT Minting and Ownership
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    CryptoMemeX allows users to create, mint, buy, sell, and trade meme NFTs on the Aptos blockchain.
                  </p>
                  <p>
                    By minting an NFT through our platform, you:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Represent that you own or have the right to use all content in the NFT</li>
                    <li>Grant NFT purchasers a non-exclusive, worldwide license to display the NFT</li>
                    <li>Understand that ownership of an NFT does not confer copyright ownership of the underlying content</li>
                    <li>Accept that all transactions are final and recorded on the blockchain</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Fees and Payments
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    CryptoMemeX charges the following fees:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>2.5% platform fee on all NFT sales</li>
                    <li>Creators may set royalties up to 10% on secondary sales</li>
                  </ul>
                  <p>
                    All transactions also incur gas fees on the Aptos blockchain, which are not controlled by CryptoMemeX.
                  </p>
                  <p>
                    Prices are displayed in APT (Aptos token) and may fluctuate with market conditions.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Prohibited Activities
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Use CryptoMemeX for any illegal purpose</li>
                    <li>Infringe on the intellectual property rights of others</li>
                    <li>Mint NFTs containing illegal, offensive, or harmful content</li>
                    <li>Manipulate the market through wash trading or other deceptive practices</li>
                    <li>Use bots or automated systems to interact with the platform</li>
                    <li>Attempt to interfere with or disrupt the platform or its servers</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Intellectual Property Rights
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    CryptoMemeX and its content, features, and functionality are owned by us and are protected by copyright, 
                    trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You may not copy, modify, distribute, sell, or lease any part of our services without our permission.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Disclaimer of Warranties
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    CryptoMemeX is provided "as is" and "as available" without warranties of any kind, either express or implied.
                  </p>
                  <p>
                    We do not guarantee that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The platform will be uninterrupted or error-free</li>
                    <li>NFTs will maintain or increase in value</li>
                    <li>The Aptos blockchain will remain operational or secure</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Limitation of Liability
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                    special, consequential, or punitive damages, including loss of profits, data, or goodwill, 
                    arising out of or in connection with your use of CryptoMemeX.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Governing Law and Dispute Resolution
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    These Terms are governed by the laws of the Cayman Islands without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CircuitBoard className="text-cyber-purple h-5 w-5" />
                  Contact Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about these Terms, please contact us at legal@cryptomemex.io.
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

export default TermsOfService;
