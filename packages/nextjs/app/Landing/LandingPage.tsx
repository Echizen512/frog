"use client";

import { useState } from "react";
import { RainbowKitCustomConnectButton } from "../../components/scaffold-eth";
import FeatureCanvasCard from "./_components/FeatureCanvasCard";
import MatrixRain from "./_components/MatrixRain";
import { Code, Shield, Users } from "lucide-react";

export default function LandingPage() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectWallet = () => {
    setIsConnected(true);
  };

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      <MatrixRain />

      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-2xl font-bold text-white">Froghack</h1>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-medium">
            🐸 Blockchain Hacking Game
          </span>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            FROG<span className="text-green-400"> HACK</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            "Join the most feared elite squad of hacker frogs on the blockchain. Build your team, hack networks, and
            dominate the metaverse."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RainbowKitCustomConnectButton />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Game Features</h2>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {[
              {
                icon: <Users className="w-6 h-6 text-green-400" />,
                title: "Elite Teams",
                description: "Build squads of 4 hacker frogs with unique skills and rarities",
              },
              {
                icon: <Code className="w-6 h-6 text-green-400" />,
                title: "Blockchain Hacking",
                description: "Infiltrate networks like Ethereum, Optimism, Arbitrum, and more",
              },
              {
                icon: <Shield className="w-6 h-6 text-green-400" />,
                title: "NFT Rewards",
                description: "Earn unique rewards and collect legendary frogs",
              },
            ].map((feature, idx) => (
              <FeatureCanvasCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
