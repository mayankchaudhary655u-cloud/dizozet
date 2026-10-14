import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight, Clock, User, Sparkles } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  onViewAll?: () => void;
  isFullBlogsPage?: boolean;
}

// Reliable fallback image if an image fails to load
const FALLBACK_BLOG_IMAGE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  onSelectPost,
  onViewAll,
  isFullBlogsPage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Productivity',
    'Digital Subscriptions',
    'Website Development',
    'Digital Marketing',
    'Online Business',
  ];

  const filteredPosts = posts.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  // HOMEPAGE REQUIREMENT: Display only 3 blog cards!
  const displayedPosts = isFullBlogsPage ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <section id="blogs" className="py-12 md:py-16 bg-white border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3 py-1 rounded-full mb-2.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Digital Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight">
              {isFullBlogsPage ? 'All Guides & Insights' : 'Latest Guides & Insights'}
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              Practical guides on digital subscriptions, AI tools, website design, and online growth.
            </p>
          </div>
        </div>

        {/* Category Filters (Full page only) */}
        {isFullBlogsPage && (
          <div className="flex items-center gap-1.5 p-1 bg-[#FFF5EB] border border-[#F0E7DE] rounded-xl max-w-fit mb-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#F28C28] text-white font-bold shadow-2xs'
                    : 'text-[#6B7280] hover:text-[#252525]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Blog Cards Grid (3 on homepage, all on full page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="rounded-2xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all duration-200 flex flex-col justify-between group overflow-hidden shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <div>
                {/* Visible, High-Quality Blog Thumbnail Image */}
                <div className="relative w-full aspect-16/9 bg-gray-100 overflow-hidden border-b border-[#F0E7DE]">
                  <img
                    src={post.imageUrl || FALLBACK_BLOG_IMAGE}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_BLOG_IMAGE;
                    }}
                  />
                  {/* Category Pill Overlay */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#F28C28] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#F0E7DE] shadow-2xs">
                    {post.category}
                  </span>
                  {/* Read Time Overlay */}
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F28C28]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-5">
                  <div className="text-[11px] font-mono text-[#6B7280] mb-2 flex items-center justify-between">
                    <span>{post.publishedAt}</span>
                    <span className="text-[10px] text-[#F28C28] font-semibold">By {post.author}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read Guide CTA */}
              <div className="px-5 pb-5 pt-0 border-t border-transparent group-hover:border-[#F0E7DE] transition-colors">
                <div className="flex items-center justify-between text-xs font-semibold text-[#F28C28] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 text-[#F28C28]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Guides CTA on homepage */}
        {!isFullBlogsPage && onViewAll && (
          <div className="mt-10 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-all shadow-2xs group cursor-pointer"
            >
              <span>View All Guides &amp; Insights</span>
              <ArrowRight className="w-4 h-4 text-[#F28C28] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
