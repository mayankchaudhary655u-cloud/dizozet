import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, User, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const FALLBACK_BLOG_IMAGE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-[#F0E7DE] rounded-2xl p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[92vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Highly Visible × (Cross) Button in Top-Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/95 hover:bg-[#F28C28] text-[#252525] hover:text-white border border-[#F0E7DE] hover:border-[#F28C28] shadow-md flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          aria-label="Close article"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Top Navigation Back Link */}
        <div className="mb-4 pr-12">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </button>
        </div>

        {/* Featured Article Banner Image */}
        {post.imageUrl && (
          <div className="relative rounded-xl overflow-hidden mb-5 border border-[#F0E7DE] bg-gray-100 aspect-16/9 shadow-xs">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = FALLBACK_BLOG_IMAGE;
              }}
            />
            <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#F28C28] text-xs font-bold px-3 py-1 rounded-md border border-[#F0E7DE] shadow-2xs">
              {post.category}
            </span>
          </div>
        )}

        {/* Article Title & Meta */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
              {post.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span>Published {post.publishedAt}</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-[#252525] tracking-tight leading-snug">
            {post.title}
          </h1>

          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mt-2 pb-3 border-b border-[#F0E7DE]">
            <User className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Written by {post.author}</span>
          </div>
        </div>

        {/* Key Takeaways Callout */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="p-4 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] mb-5 space-y-2">
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

        {/* Modal Footer */}
        <div className="pt-5 mt-6 border-t border-[#F0E7DE] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#252525] bg-[#FFF5EB] hover:bg-[#FEEDD9] border border-[#F0E7DE] transition-colors"
          >
            ← Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
