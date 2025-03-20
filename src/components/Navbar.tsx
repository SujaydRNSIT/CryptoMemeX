
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Rocket, CircuitBoard, Network, User, Brain, Wallet, Shield, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface WalletFormValues {
  walletAddress: string;
  walletType: string;
  agreeToTerms: boolean;
}

const Navbar = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const form = useForm<WalletFormValues>({
    defaultValues: {
      walletAddress: "",
      walletType: "petra",
      agreeToTerms: false
    }
  });

  const navItems = [
    { name: 'Home', path: '/', icon: <Rocket className="w-4 h-4 mr-2" /> },
    { name: 'AI Meme Generator', path: '/generator', icon: <Brain className="w-4 h-4 mr-2" /> },
    { name: 'Marketplace', path: '/marketplace', icon: <Network className="w-4 h-4 mr-2" /> },
  ];

  const handleConnectWallet = () => {
    setWalletDialogOpen(true);
  };

  const onSubmitWalletForm = (data: WalletFormValues) => {
    console.log('Wallet connection data:', data);
    // This is just a placeholder for wallet connection
    setIsWalletConnected(true);
    setWalletDialogOpen(false);
    
    toast({
      title: "Wallet Connected Successfully",
      description: "Your wallet has been connected to CryptoMemeX.",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel py-3 px-5 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <CircuitBoard className="text-cyber-purple h-7 w-7 mr-2" />
              <span className="font-display text-xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
                CryptoMemeX
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-6 ml-auto mr-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname === item.path 
                    ? 'text-cyber-purple' 
                    : 'text-gray-300 hover:text-cyber-purple'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            {isWalletConnected ? (
              <Link to="/profile">
                <Button variant="outline" className="border-cyber-purple/30 bg-cyber-dark/50 text-cyber-purple hover:bg-cyber-dark/80 hover:text-cyber-purple/80">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </Link>
            ) : (
              <Button 
                className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:opacity-90 text-white"
                onClick={handleConnectWallet}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>

      <Dialog open={walletDialogOpen} onOpenChange={setWalletDialogOpen}>
        <DialogContent className="bg-cyber-dark border-cyber-purple/30 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-cyber-purple" />
              Connect Your Wallet
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Connect your crypto wallet to access all features of CryptoMemeX.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitWalletForm)} className="space-y-4">
              <FormField
                control={form.control}
                name="walletType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Wallet Type</FormLabel>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className={`p-4 border rounded-md flex flex-col items-center justify-center cursor-pointer transition-colors ${
                          field.value === 'petra' 
                            ? 'border-cyber-purple bg-cyber-purple/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => field.onChange('petra')}
                      >
                        <Shield className="h-8 w-8 mb-2 text-cyber-purple" />
                        <span className="text-sm font-medium">Petra Wallet</span>
                      </div>
                      
                      <div
                        className={`p-4 border rounded-md flex flex-col items-center justify-center cursor-pointer transition-colors ${
                          field.value === 'martian' 
                            ? 'border-cyber-purple bg-cyber-purple/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => field.onChange('martian')}
                      >
                        <Shield className="h-8 w-8 mb-2 text-cyber-pink" />
                        <span className="text-sm font-medium">Martian Wallet</span>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="walletAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Wallet Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0x71C7...65F3"
                        className="bg-cyber-darker border-gray-700 text-white"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex items-start space-x-2 text-sm">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  className="mt-1"
                  checked={form.watch('agreeToTerms')}
                  onChange={(e) => form.setValue('agreeToTerms', e.target.checked)}
                />
                <label htmlFor="agreeToTerms" className="text-gray-300">
                  I understand that connecting my wallet gives CryptoMemeX access to view my wallet address and balances. 
                  CryptoMemeX will never initiate transactions without my explicit approval.
                </label>
              </div>
              
              <div className="bg-cyber-purple/10 border border-cyber-purple/30 p-3 rounded-md flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-cyber-purple mt-0.5" />
                <div className="text-sm text-gray-300">
                  Always verify transactions carefully before signing. Never share your private keys or seed phrase with anyone.
                </div>
              </div>
              
              <DialogFooter className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="border-gray-700 text-gray-300"
                  onClick={() => setWalletDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-white"
                  disabled={!form.watch('agreeToTerms')}
                >
                  Connect Wallet
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
