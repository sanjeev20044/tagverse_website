'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.success) {
                toast.success('Welcome back, Admin');
                router.push('/admin/home');
                router.refresh();
            } else {
                toast.error(data.message || 'Invalid credentials');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-signature-start/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-signature-end/5 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[440px] z-10"
            >
                {/* Logo Area */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-gray-100 mb-6 shadow-xl"
                    >
                        <Sparkles className="text-signature-start w-8 h-8" />
                    </motion.div>
                    <h1 className="text-4xl font-serif font-bold text-midnight tracking-tight mb-2">
                        TagVerse<span className="text-signature-start">.</span>
                    </h1>
                    <p className="text-gray-500 font-light tracking-wide">Enter your credentials to access the board</p>
                </div>

                {/* Login Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium ml-1">Username</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-signature-start transition-colors">
                                    <User size={18} />
                                </span>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-midnight outline-none focus:bg-white focus:border-signature-start/50 focus:ring-4 focus:ring-signature-start/5 transition-all font-light placeholder:text-gray-300"
                                    placeholder="Admin login"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium ml-1">Password</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-signature-start transition-colors">
                                    <Lock size={18} />
                                </span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-midnight outline-none focus:bg-white focus:border-signature-start/50 focus:ring-4 focus:ring-signature-start/5 transition-all font-light placeholder:text-gray-300"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full group relative flex items-center justify-center gap-2 bg-gradient-to-r from-signature-start to-signature-end text-white rounded-2xl py-4 font-medium overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 shadow-lg shadow-signature-start/20"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transition-all duration-300 group-hover:h-full opacity-10" />
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <div className="flex items-center justify-center gap-2">
                                    <span>Sign In</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Info */}
                <p className="text-center mt-8 text-gray-300 text-xs font-light">
                    © 2025 tagverse.io. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
}
