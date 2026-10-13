import React, { useState } from 'react';
import { Play, Sparkles, Film, Wand2, Flame, Layers, X, ZoomIn } from 'lucide-react';

interface StyleItem {
  id: string;
  title: string;
  tag: string;
  category: string;
  imageUrl: string;
  views: string;
  desc: string;
}

const AI_STYLES: StyleItem[] = [
  {
    id: 'cinematic',
    title: 'Cinematic Sci-Fi & Cyberpunk',
    tag: 'Cinematic AI',
    category: 'Epic Worlds',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    views: '4.8M Views',
    desc: 'Blade Runner aesthetic, glowing cyber cities, rain-drenched neon streets, and atmospheric lighting in 4K.',
  },
  {
    id: 'realistic_avatar',
    title: 'Photorealistic AI Humans & Characters',
    tag: 'Realistic Characters',
    category: 'Hyper-Realistic',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    views: '3.2M Views',
    desc: 'Studio lighting, lifelike facial expressions, cinematic rim light, and expressive talking-head avatars.',
  },
  {
    id: 'cartoon3d',
    title: '3D Pixar-Style Cartoon Animations',
    tag: '3D Animation',
    category: 'Viral Cartoon',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    views: '5.1M Views',
    desc: 'Vibrant 3D rendered animated characters, cute monsters, and high-retention visual storytelling shorts.',
  },
  {
    id: 'surreal',
    title: 'Surreal Mythical Creatures & Beasts',
    tag: 'Surreal AI Creatures',
    category: 'Fantasy & Lore',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    views: '2.9M Views',
    desc: 'Bioluminescent deep-sea organisms, mythical beasts, celestial dragons, and surreal wildlife phenomena.',
  },
  {
    id: 'viral_shorts',
    title: 'Viral Instagram Reels & YT Shorts Flow',
    tag: 'Viral Reels / Shorts',
    category: 'High-Retention',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    views: '6.4M Views',
    desc: 'Fast-paced vertical edits, sound wave timelines, hook overlays, and viral video pacing optimized for feeds.',
  },
];

export const AIVideoStylesCollage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [previewStyle, setPreviewStyle] = useState<StyleItem | null>(null);

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-radial from-[#1e1b4b] via-[#0f172a] to-[#020617] border border-[#334155] p-4 sm:p-6 lg:p-7 shadow-2xl relative">
      {/* Decorative ambient neon glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#F28C28]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Collage Top Banner Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2000+ Trending AI Video Styles Included</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Visual Showcase: Trending AI Video Styles</span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
              4K Ultra HD
            </span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Tap or click any style below to expand preview. Featuring cinematic scenes, realistic AI characters, 3D animations, surreal creatures, and viral Reels.
          </p>
        </div>

        {/* Quick Style Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden lg:inline mr-1">
            Styles:
          </span>
          {['all', 'cinematic', 'realistic_avatar', 'cartoon3d', 'surreal', 'viral_shorts'].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all capitalize whitespace-nowrap cursor-pointer ${
                activeTab === key
                  ? 'bg-[#F28C28] text-white shadow-xs'
                  : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border border-slate-700/60'
              }`}
            >
              {key === 'all'
                ? 'All 5 Styles'
                : key === 'realistic_avatar'
                ? 'Characters'
                : key === 'viral_shorts'
                ? 'Viral Reels'
                : key}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Bento Grid Collage */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4">
        {/* Item 1: Large Featured Card - Cinematic AI Scene (Spans 7 cols on lg) */}
        {(activeTab === 'all' || activeTab === 'cinematic') && (
          <div
            onClick={() => setPreviewStyle(AI_STYLES[0])}
            className="lg:col-span-7 group relative rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 aspect-16/10 sm:aspect-16/9 shadow-lg cursor-pointer"
          >
            <img
              src={AI_STYLES[0].imageUrl}
              alt={AI_STYLES[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold text-white bg-indigo-600/90 backdrop-blur-xs flex items-center gap-1 shadow-xs">
                <Film className="w-3 h-3" />
                <span>{AI_STYLES[0].tag}</span>
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-amber-300 bg-black/60 backdrop-blur-xs border border-amber-500/30 flex items-center gap-1">
                <Flame className="w-3 h-3 fill-amber-400" />
                <span>{AI_STYLES[0].views}</span>
              </span>
            </div>

            {/* Tap to Preview Badge */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-1 rounded-md flex items-center gap-1">
              <ZoomIn className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Click to Preview</span>
            </div>

            {/* Floating Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#F28C28] transition-all shadow-xl">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <p className="text-[11px] font-bold text-[#F28C28] uppercase tracking-wider">
                {AI_STYLES[0].category}
              </p>
              <h5 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                {AI_STYLES[0].title}
              </h5>
              <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                {AI_STYLES[0].desc}
              </p>
            </div>
          </div>
        )}

        {/* Item 2: Realistic AI Characters & Avatars (Spans 5 cols on lg) */}
        {(activeTab === 'all' || activeTab === 'realistic_avatar') && (
          <div
            onClick={() => setPreviewStyle(AI_STYLES[1])}
            className="lg:col-span-5 group relative rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 aspect-16/10 sm:aspect-16/9 shadow-lg cursor-pointer"
          >
            <img
              src={AI_STYLES[1].imageUrl}
              alt={AI_STYLES[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold text-white bg-emerald-600/90 backdrop-blur-xs flex items-center gap-1 shadow-xs">
                <Wand2 className="w-3 h-3" />
                <span>{AI_STYLES[1].tag}</span>
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-300 bg-black/60 backdrop-blur-xs border border-emerald-500/30">
                {AI_STYLES[1].views}
              </span>
            </div>

            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-1 rounded-md flex items-center gap-1">
              <ZoomIn className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Click to Preview</span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-left">
              <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                {AI_STYLES[1].category}
              </p>
              <h5 className="text-base font-extrabold text-white leading-snug">
                {AI_STYLES[1].title}
              </h5>
              <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                {AI_STYLES[1].desc}
              </p>
            </div>
          </div>
        )}

        {/* Item 3: 3D Cartoon Animations (Spans 4 cols on lg) */}
        {(activeTab === 'all' || activeTab === 'cartoon3d') && (
          <div
            onClick={() => setPreviewStyle(AI_STYLES[2])}
            className="lg:col-span-4 group relative rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 aspect-16/10 sm:aspect-16/9 shadow-lg cursor-pointer"
          >
            <img
              src={AI_STYLES[2].imageUrl}
              alt={AI_STYLES[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold text-white bg-amber-600/90 backdrop-blur-xs flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>{AI_STYLES[2].tag}</span>
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-left">
              <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                {AI_STYLES[2].category}
              </p>
              <h5 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                {AI_STYLES[2].title}
              </h5>
              <p className="text-[10px] text-slate-300 mt-0.5 line-clamp-1">
                {AI_STYLES[2].desc}
              </p>
            </div>
          </div>
        )}

        {/* Item 4: Surreal AI Creatures & Fantasy (Spans 4 cols on lg) */}
        {(activeTab === 'all' || activeTab === 'surreal') && (
          <div
            onClick={() => setPreviewStyle(AI_STYLES[3])}
            className="lg:col-span-4 group relative rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 aspect-16/10 sm:aspect-16/9 shadow-lg cursor-pointer"
          >
            <img
              src={AI_STYLES[3].imageUrl}
              alt={AI_STYLES[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold text-white bg-purple-600/90 backdrop-blur-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>{AI_STYLES[3].tag}</span>
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-left">
              <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                {AI_STYLES[3].category}
              </p>
              <h5 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                {AI_STYLES[3].title}
              </h5>
              <p className="text-[10px] text-slate-300 mt-0.5 line-clamp-1">
                {AI_STYLES[3].desc}
              </p>
            </div>
          </div>
        )}

        {/* Item 5: Viral Instagram Reels & YouTube Shorts Visuals (Spans 4 cols on lg) */}
        {(activeTab === 'all' || activeTab === 'viral_shorts') && (
          <div
            onClick={() => setPreviewStyle(AI_STYLES[4])}
            className="lg:col-span-4 group relative rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 aspect-16/10 sm:aspect-16/9 shadow-lg cursor-pointer"
          >
            <img
              src={AI_STYLES[4].imageUrl}
              alt={AI_STYLES[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold text-white bg-rose-600/90 backdrop-blur-xs flex items-center gap-1">
                <Flame className="w-3 h-3" />
                <span>{AI_STYLES[4].tag}</span>
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-rose-300 bg-black/60 backdrop-blur-xs border border-rose-500/30">
                {AI_STYLES[4].views}
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-left">
              <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                {AI_STYLES[4].category}
              </p>
              <h5 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                {AI_STYLES[4].title}
              </h5>
              <p className="text-[10px] text-slate-300 mt-0.5 line-clamp-1">
                {AI_STYLES[4].desc}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4 pt-4 border-t border-slate-800 text-center">
        <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <span className="text-[10px] text-slate-400 block font-medium uppercase">Format</span>
          <span className="text-xs sm:text-sm font-extrabold text-white">9:16 Full HD &amp; 4K</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <span className="text-[10px] text-slate-400 block font-medium uppercase">Watermark</span>
          <span className="text-xs sm:text-sm font-extrabold text-emerald-400">100% Logo-Free</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <span className="text-[10px] text-slate-400 block font-medium uppercase">Commercial</span>
          <span className="text-xs sm:text-sm font-extrabold text-[#F28C28]">Full Resell / Post</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <span className="text-[10px] text-slate-400 block font-medium uppercase">Delivery</span>
          <span className="text-xs sm:text-sm font-extrabold text-indigo-300">Instant Drive Link</span>
        </div>
      </div>

      {/* Full Image Preview Modal with prominent × (cross) button in top-right */}
      {previewStyle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setPreviewStyle(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prominent × (cross) close button in the top-right corner */}
            <button
              onClick={() => setPreviewStyle(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F28C28] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer border border-white/20"
              aria-label="Close preview"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Image display */}
            <div className="relative aspect-16/9 bg-black overflow-hidden">
              <img
                src={previewStyle.imageUrl}
                alt={previewStyle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#F28C28] shadow-md">
                  {previewStyle.tag}
                </span>
              </div>
            </div>

            {/* Description footer */}
            <div className="p-5 text-left bg-slate-900">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider">
                  {previewStyle.category}
                </span>
                <span className="text-xs text-amber-300 font-bold bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-md">
                  🔥 {previewStyle.views}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {previewStyle.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {previewStyle.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIVideoStylesCollage;
