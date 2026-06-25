import { motion } from 'motion/react';
import { ShieldCheck, Cpu, ExternalLink, Zap, Network } from 'lucide-react';

export default function PulsePayPartnership() {
  return (
    <section id="partnership" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-[#121217] via-[#09090C] to-[#040405] border border-[#F59E0B]/30 rounded-[32px] p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-[#F59E0B]/10 via-transparent to-white/5 opacity-40 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Text details (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono font-black text-[#F59E0B] tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
              <span>Global Strategic Partnership</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight leading-none uppercase">
                KARMA AI POWERS <br />
                <span className="text-[#F59E0B]">PULSESCORE</span> BY PULSEPAY
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans font-semibold leading-relaxed max-w-2xl">
                We are thrilled to announce a major institutional alignment. The reputation, creditworthiness, and security logic of the PulsePay blockchain network is now entirely accelerated by <strong className="text-white">Karma AI's</strong> proprietary transaction footprint intelligence engine.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xl">
                PulsePay has integrated our multi-chain reputation framework to establish a standard trust model for payment streaming, credit facilities, and consumer verification protocols. Together, we are setting a new standard for decentralized financial trust.
              </p>
            </div>

            {/* Feature stats / bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-[#F59E0B]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-black text-white block uppercase tracking-wider">AI Score Model</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Real-time multi-vector behavioral processing for high-volume transactions.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-black text-white block uppercase tracking-wider">Zero-Knowledge Trust</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Evaluate and display credit status securely without exposing sensitive transaction files.</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="https://pulsepayblockchain.live/pulse-score"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#F59E0B] hover:bg-amber-400 text-black font-sans font-black text-xs uppercase tracking-widest rounded-2xl transition duration-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Explore PulseScore</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center sm:text-left">
                ⚡ official integration portal • pulsepayblockchain.live
              </span>
            </div>
          </div>

          {/* Right Visual Representation (5 columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div 
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-[340px] bg-black/50 border border-white/10 p-6 rounded-3xl text-center space-y-6 relative overflow-hidden shadow-2xl group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-center gap-4">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F59E0B] to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 transition-shadow duration-300 group-hover:shadow-amber-500/35"
                >
                  <span className="text-2xl select-none">🦋</span>
                </motion.div>
                <div className="h-0.5 w-8 bg-gradient-to-r from-[#F59E0B] to-[#9333EA] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9333EA] to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20 transition-shadow duration-300 group-hover:shadow-purple-500/35"
                >
                  <span className="text-2xl select-none">💳</span>
                </motion.div>
              </div>

              <div className="space-y-2">
                <span className="text-[9px] font-mono text-amber-500 font-extrabold uppercase tracking-widest block group-hover:text-amber-400 transition-colors">
                  REAL-TIME NETWORK SYNC
                </span>
                <h3 className="text-base font-sans font-black text-white uppercase tracking-tight group-hover:text-[#F59E0B] transition-colors">
                  PulsePay Blockchain Integration
                </h3>
                <p className="text-slate-450 text-[11px] leading-relaxed group-hover:text-slate-300 transition-colors">
                  Karma AI delivers verified credit ratings and reputation metrics for active PulsePay wallets instantly via ZK-Rollup networks.
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-extrabold">Active Oracle Link</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[8px] font-mono font-black text-black bg-[#F59E0B] tracking-wider uppercase animate-pulse">
                  ESTABLISHED
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
