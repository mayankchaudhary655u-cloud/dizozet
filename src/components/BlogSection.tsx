import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight, Clock, User } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  onViewAll?: () => void;
  isFullBlogsPage?: boolean;
}

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
    'Technology',
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
              Practical tips on digital subscriptions, website design, and online marketing.
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
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
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
              className="rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all duration-200 flex flex-col justify-between group overflow-hidden shadow-2xs hover:shadow-xs"
            >
              {/* Card Banner */}
              <div className="h-36 w-full bg-[#FFF5EB] border-b border-[#F0E7DE] p-4 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280]">
                  <span className="text-[#F28C28] font-semibold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F28C28]" />
                    {post.readTime}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#6B7280]">
                    {post.publishedAt}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] line-clamp-3 mb-4 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                {/* Footer: Author & Read More */}
                <div className="pt-3 border-t border-[#F0E7DE] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                    <User className="w-3.5 h-3.5 text-[#F28C28]" />
                    <span>{post.author}</span>
                  </div>

                  <button
                    onClick={() => onSelectPost(post)}
                    className="text-xs font-semibold text-[#F28C28] hover:text-[#E07B18] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Blogs Button (Homepage Only) */}
        {!isFullBlogsPage && onViewAll && (
          <div className="mt-10 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] rounded-xl transition-all shadow-2xs group"
            >
              <span>View More Blogs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#F28C28]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
