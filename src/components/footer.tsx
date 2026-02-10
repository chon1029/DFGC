"use client";

import React from "react";
import Link from "next/link";
import { contentData } from "@/lib/data/contentData";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    {/* Church Info */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold tracking-tighter text-gold mb-6 font-serif">
                            {contentData.churchName}
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-8">
                            {contentData.vision}
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-royal-red transition-colors">
                                <Youtube size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-royal-red transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-royal-red transition-colors">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Menu */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">교회 매뉴</h3>
                        <ul className="space-y-4 text-white/50 text-sm">
                            {contentData.navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-gold transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-bold mb-6 text-white">연락처 및 오시는 길</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                                <span className="text-white/60 text-sm leading-relaxed">
                                    {contentData.footer.address}
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="text-gold flex-shrink-0" size={20} />
                                <span className="text-white/60 text-sm font-bold">
                                    {contentData.footer.phone}
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="text-gold flex-shrink-0" size={20} />
                                <span className="text-white/60 text-sm">
                                    {contentData.footer.email}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-white/10 mb-10" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-white/30 font-medium">
                    <p>{contentData.footer.copyright}</p>
                    <div className="flex space-x-8">
                        <p className="text-royal-red/80 font-bold">{contentData.footer.notice}</p>
                        <Link href="#" className="hover:text-gold transition-colors">개인정보처리방침</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
