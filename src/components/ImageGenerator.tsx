import React, { useState } from 'react';
import { Image as ImageIcon, Loader2, Download, X } from 'lucide-react';
import { generateImage } from '../services/gemini';
import { motion, AnimatePresence } from 'motion/react';

export default function ImageGenerator() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<"1K" | "2K" | "4K">("1K");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;
    setIsLoading(true);
    setResult(null);
    try {
      const imageUrl = await generateImage(prompt, size);
      setResult(imageUrl);
    } catch (error) {
      console.error("Generation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-avocado-green text-white p-4 border-2 border-mcm-dark mcm-shadow hover:translate-x-1 hover:-translate-y-1 transition-all flex items-center gap-2"
      >
        <ImageIcon className="w-6 h-6" />
        <span className="hidden md:block font-label text-xs uppercase tracking-widest font-bold">AI Visualizer</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-mcm-dark/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-mcm-beige border-4 border-mcm-dark w-full max-w-2xl mcm-shadow overflow-hidden"
            >
              <div className="bg-deep-teal text-white p-6 flex justify-between items-center border-b-4 border-mcm-dark">
                <h2 className="font-serif text-3xl italic">Nano Banana Pro Visualizer</h2>
                <button onClick={() => setIsOpen(false)} className="hover:text-burnt-orange transition-colors">
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="block font-label text-xs uppercase tracking-[0.2em] font-bold text-mcm-dark/70">
                    Describe your vision
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A mid-century modern office in Palm Springs with desert views..."
                    className="w-full border-2 border-mcm-dark p-4 bg-white focus:outline-none focus:border-burnt-orange min-h-[100px]"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="space-y-2 flex-1">
                    <label className="block font-label text-xs uppercase tracking-[0.2em] font-bold text-mcm-dark/70">
                      Image Resolution
                    </label>
                    <div className="flex gap-2">
                      {(["1K", "2K", "4K"] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSize(s)}
                          className={`flex-1 py-2 border-2 border-mcm-dark font-bold transition-all ${
                            size === s ? 'bg-burnt-orange text-white' : 'bg-white text-mcm-dark hover:bg-mcm-beige'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleGenerate}
                    disabled={isLoading || !prompt.trim()}
                    className="w-full md:w-auto bg-mcm-dark text-white px-10 py-4 font-label font-bold uppercase tracking-widest btn-mcm border-2 border-mcm-dark disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : "Generate"}
                  </button>
                </div>

                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 pt-4 border-t-2 border-mcm-dark/10"
                  >
                    <div className="border-4 border-mcm-dark bg-white p-2">
                      <img src={result} alt="AI Generated" className="w-full h-auto" />
                    </div>
                    <a
                      href={result}
                      download="desert-notary-ai.png"
                      className="flex items-center justify-center gap-2 text-deep-teal font-bold hover:text-burnt-orange transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download High-Res Image</span>
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
