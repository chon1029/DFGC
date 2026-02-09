"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { contentData } from "@/lib/data/contentData";
import { useState } from "react";

interface OfferingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function OfferingModal({ isOpen, onClose }: OfferingModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(contentData.offering.accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 p-8 m-4"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">온라인 헌금 안내</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Account Info Card */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div className="text-sm text-gray-500 mb-1">은행 / 예금주</div>
                                <div className="flex justify-between items-end mb-4">
                                    <div className="font-bold text-lg text-gray-900">
                                        {contentData.offering.bank} <span className="text-gray-400">|</span> {contentData.offering.accountHolder}
                                    </div>
                                </div>

                                <div className="text-sm text-gray-500 mb-1">계좌번호</div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-black text-royal-red tracking-tight">
                                        {contentData.offering.accountNumber}
                                    </span>
                                    <button
                                        onClick={handleCopy}
                                        className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200"
                                        title="계좌번호 복사"
                                    >
                                        {copied ? (
                                            <Check className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <Copy className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Offering Types */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">헌금 항목</h3>
                                <div className="flex flex-wrap gap-2">
                                    {contentData.offering.types.map((type) => (
                                        <span
                                            key={type}
                                            className="px-4 py-2 bg-royal-red/5 text-royal-red rounded-xl text-sm font-medium"
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                                    * 입금자명 뒤에 헌금 종류를 기재해주시면 감사하겠습니다.<br />
                                    (예: 홍길동십일조, 이영희선교)
                                </p>
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={onClose}
                                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
                                >
                                    닫기
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
