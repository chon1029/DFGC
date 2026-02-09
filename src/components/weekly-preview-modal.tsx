"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { contentData } from "@/lib/data/contentData";
import Link from "next/link";

interface WeeklyPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function WeeklyPreviewModal({ isOpen, onClose }: WeeklyPreviewModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[85vh] bg-white rounded-[3rem] shadow-2xl z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-8 bg-white border-b border-gray-100">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900">교회 주보 미리보기</h2>
                                <p className="text-gray-400 font-bold">{contentData.weeklyBulletin.currentDate}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                                title="닫기"
                            >
                                <X className="w-8 h-8 text-gray-400" />
                            </button>
                        </div>

                        {/* Preview Body */}
                        <div className="flex-1 overflow-y-auto p-10 bg-gray-50 flex items-center justify-center">
                            <Link
                                href="/news/weekly"
                                className="relative group cursor-pointer w-full max-w-2xl shadow-2xl rounded-2xl overflow-hidden active:scale-95 transition-transform"
                                onClick={onClose}
                            >
                                <img
                                    src={contentData.weeklyBulletin.imageUrl}
                                    alt="주보 미리보기"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-2xl flex items-center space-x-4 transition-all -translate-y-4 group-hover:translate-y-0">
                                        <span className="font-black text-xl text-gray-900">주보 페이지로 이동하여 크게보기</span>
                                        <ExternalLink className="w-6 h-6 text-royal-red" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Footer */}
                        <div className="p-8 bg-white flex justify-center border-t border-gray-100">
                            <Link
                                href="/news/weekly"
                                className="px-12 py-5 bg-royal-red text-white rounded-[2rem] font-black text-lg hover:bg-black hover:-translate-y-1 transition-all shadow-xl"
                                onClick={onClose}
                            >
                                상세보기 페이지로 이동
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
