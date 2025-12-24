'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/layout/Navbar';
import SimpleChatbot from '@/components/ui/SimpleChatbot';
import MeshBackground from '@/components/ui/MeshBackground';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        projectDetails: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Message sent successfully! We will get back to you soon.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    projectDetails: ''
                });
            } else {
                toast.error(data.error || 'Something went wrong');
            }
        } catch (error) {
            toast.error('Failed to send message');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-porcelain relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Soft Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-porcelain via-transparent to-porcelain/80 pointer-events-none z-0" />

            <div className="relative z-10 flex-grow pt-44 pb-12 lg:pt-32">
                <div className="max-w-7xl mx-auto px-6 md:px-20 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* 1. Title Section (Top Left on Desktop, Top on Mobile) */}
                        <ScrollReveal direction="left" className="space-y-6 lg:col-start-1 lg:row-start-1">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-serif text-midnight mb-6 tracking-tight leading-tight">
                                    Let&apos;s Architect <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-signature-start to-signature-end italic">The Future.</span>
                                </h1>
                                <p className="text-xl text-subtext font-light max-w-lg leading-relaxed">
                                    Ready to transform your enterprise with precision AI? Our team of strategists and engineers is ready to listen.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* 2. Interaction Form (Right on Desktop, Middle on Mobile) */}
                        {/* On Mobile this comes 2nd naturally. On Desktop, we force it to the right column spanning 2 rows */}
                        <ScrollReveal direction="right" delay={200} className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
                            <div className="bg-white/60 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-transparent opacity-60" />

                                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">First Name</label>
                                            <Input
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="bg-white/80 border-transparent focus:border-signature-start/20 focus:bg-white h-12 rounded-xl transition-all duration-300 shadow-sm"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Last Name</label>
                                            <Input
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="bg-white/80 border-transparent focus:border-signature-start/20 focus:bg-white h-12 rounded-xl transition-all duration-300 shadow-sm"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Work Email</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="bg-white/80 border-transparent focus:border-signature-start/20 focus:bg-white h-12 rounded-xl transition-all duration-300 shadow-sm"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Phone Number</label>
                                            <Input
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="bg-white/80 border-transparent focus:border-signature-start/20 focus:bg-white h-12 rounded-xl transition-all duration-300 shadow-sm"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Subject</label>
                                        <Input
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="bg-white/80 border-transparent focus:border-signature-start/20 focus:bg-white h-12 rounded-xl transition-all duration-300 shadow-sm"
                                            placeholder="What would you like to discuss?"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Project Details</label>
                                        <Textarea
                                            name="projectDetails"
                                            value={formData.projectDetails}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us about your automation goals..."
                                            className="bg-white/80 border-transparent focus:border-signature-start/20 focus:bg-white min-h-[150px] rounded-xl resize-none transition-all duration-300 shadow-sm pt-4"
                                        />
                                    </div>
                                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-midnight text-white hover:bg-signature-start relative overflow-hidden mt-2">
                                        <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Initiate Collaboration'}</span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-signature-start to-signature-end opacity-0 hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </Button>
                                </form>
                            </div>
                        </ScrollReveal>

                        {/* 3. Info & Socials (Bottom Left on Desktop, Bottom on Mobile) */}
                        {/* On Mobile this comes 3rd naturally. On Desktop, we force it to row 2 of col 1 */}
                        <ScrollReveal direction="left" delay={100} className="space-y-10 lg:col-start-1 lg:row-start-2">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-midnight group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-signature-start group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-subtext/70 mb-0.5">Email Us</p>
                                        <p className="text-lg font-medium">Tagverse.io@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-midnight group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-signature-start group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-subtext/70 mb-0.5">Call Us</p>
                                        <p className="text-lg font-medium">+91 99419 68238</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-black/5">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-subtext/70 mb-4">Follow Our Journey</h4>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Facebook size={20} />, href: "https://m.facebook.com/61584759519825/" },
                                        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/tagverse-io/" },
                                        { icon: <Instagram size={20} />, href: "https://www.instagram.com/tagverse.io?igsh=emp4M3R2YmZjdDlu" }
                                    ].map((social, i) => (
                                        <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300 hover:-translate-y-1">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>

            <SimpleChatbot />
        </main>
    );
}
