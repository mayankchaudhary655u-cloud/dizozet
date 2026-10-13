import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, User, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white border border-[#F0E7DE] rounded-2xl p-6 sm:p-8 shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Top Navigation */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0E7DE]">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </button>

          {/* Highly Visible × (Cross) Button in Top-Right Corner */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/95 hover:bg-[#F28C28] text-[#252525] hover:text-white border border-[#F0E7DE] hover:border-[#F28C28] shadow-md flex items-center justify-center transition-all cursor-pointer focus:outline-none"
            aria-label="Close article"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Article Meta */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
          <span className="text-[#F28C28] font-semibold">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
            {post.readTime}
          </span>
          <span aria-hidden="true">·</span>
          <span>{post.publishedAt}</span>
        </div>

        {/* Article Title */}
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#252525] tracking-tight leading-snug mb-3">
          {post.title}
        </h1>

        {/* Author Line */}
        <div className="flex items-center gap-1.5 text-xs text-[#6B7280] pb-4 mb-5 border-b border-[#F0E7DE]">
          <User className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>Written by {post.author}</span>
        </div>

        {/* Key Takeaways Callout */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="p-4 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] mb-6 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C28] font-mono">
              Key Insights
            </h4>
            <div className="space-y-1.5">
              {post.keyTakeaways.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#252525]">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Article Content Paragraphs */}
        <div className="space-y-4 text-sm text-[#252525] leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-[#F0E7DE] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#252525] bg-[#FFF5EB] hover:bg-[#FEEDD9] border border-[#F0E7DE]"
          >
            ← Close
          </button>
        </div>
      </div>
    </div>
  );
};
