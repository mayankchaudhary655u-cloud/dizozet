import React, { useState } from 'react';
import { ReviewItem } from '../types';
import {
  Star,
  MessageSquarePlus,
  ArrowRight,
  X,
  ShieldCheck,
  Users,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Filter,
} from 'lucide-react';

interface CustomerReviewsSectionProps {
  reviews: ReviewItem[];
  onAddReview: (review: Omit<ReviewItem, 'id' | 'date'>) => void;
  onViewAll?: () => void;
  isFullReviewsPage?: boolean;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = ({
  reviews,
  onAddReview,
  onViewAll,
  isFullReviewsPage = false,
}) => {
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [showAllExpanded, setShowAllExpanded] = useState(isFullReviewsPage);
  const [filterProduct, setFilterProduct] = useState('All');

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [productPurchased, setProductPurchased] = useState('Canva Pro');
  const [customProduct, setCustomProduct] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [userLocation, setUserLocation] = useState('');
  
  // Validation & Anti-Spam state
  const [formError, setFormError] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const cleanName = authorName.trim();
    const cleanComment = comment.trim();
    const selectedProd = productPurchased === 'Other' ? (customProduct.trim() || 'Dizozet Service') : productPurchased;

    // Required Field & Input Length Validation
    if (!cleanName || cleanName.length < 2) {
      setFormError('Please enter your valid name (at least 2 characters).');
      return;
    }

    if (!cleanComment || cleanComment.length < 10) {
      setFormError('Please write a detailed review message (at least 10 characters).');
      return;
    }

    // Spam Protection / Moderation Check (Reject URLs / suspicious spam patterns)
    const urlPattern = /(https?:\/\/|www\.|\.com|\.net|\.org|\.ru|\.cn)/i;
    if (urlPattern.test(cleanComment) || urlPattern.test(cleanName)) {
      setFormError('Links and promotional URLs are not allowed in customer reviews.');
      return;
    }

    onAddReview({
      author: cleanName,
      productOrService: selectedProd,
      rating,
      comment: cleanComment,
      location: userLocation.trim() || 'Customer Review',
      isSampleReview: false,
      verifiedPurchase: false, // Honest policy: not marked as staff verified
    });

    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setWriteModalOpen(false);
      setAuthorName('');
      setComment('');
      setUserLocation('');
      setCustomProduct('');
      setFormError('');
    }, 1800);
  };

  // Filter reviews if a filter is selected
  const filteredReviews = reviews.filter((rev) => {
    if (filterProduct === 'All') return true;
    if (filterProduct === 'Subscriptions') {
      return !rev.productOrService.toLowerCase().includes('website') && !rev.productOrService.toLowerCase().includes('bundle');
    }
    if (filterProduct === 'Digital Products') {
      return rev.productOrService.toLowerCase().includes('bundle') || rev.productOrService.toLowerCase().includes('videos');
    }
    if (filterProduct === 'Services') {
      return rev.productOrService.toLowerCase().includes('website') || rev.productOrService.toLowerCase().includes('app');
    }
    return true;
  });

  // Display count: on homepage show 6 unless expanded, on full page or when expanded show all
  const displayedReviews = showAllExpanded ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section id="reviews" className="py-12 md:py-16 bg-[#FFF5EB]/30 border-b border-[#F0E7DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 fill-[#F28C28] text-[#F28C28]" />
            <span>Real Customer Testimonials & Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
            Loved by 2700+ Indian Creators & Businesses
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            Transparent customer reviews regarding subscription activation, digital bundles, and web services.
          </p>
        </div>

        {/* 2. PROMINENT CUSTOMER STATISTICS BAR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-12">
          {/* Stat 1: 2700+ Happy Clients */}
          <div className="bg-white border border-[#F0E7DE] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs hover:border-[#F28C28]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center shrink-0 text-[#F28C28]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-[#252525] tracking-tight font-mono">
                2700+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#6B7280]">
                Happy Clients
              </div>
            </div>
          </div>

          {/* Stat 2: 20+ Customer Reviews */}
          <div className="bg-white border border-[#F0E7DE] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs hover:border-[#F28C28]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-500">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-[#252525] tracking-tight font-mono">
                20+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#6B7280]">
                Customer Reviews
              </div>
            </div>
          </div>

          {/* Stat 3: Fast WhatsApp Support */}
          <div className="bg-white border border-[#F0E7DE] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs hover:border-[#16A34A]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-[#16A34A]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#252525] leading-snug">
                Fast Support
              </div>
              <div className="text-xs text-[#16A34A] font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                WhatsApp Direct
              </div>
            </div>
          </div>

          {/* Stat 4: Quick Activation */}
          <div className="bg-white border border-[#F0E7DE] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs hover:border-[#F28C28]/40 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center shrink-0 text-[#F28C28]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#252525] leading-snug">
                Quick Activation
              </div>
              <div className="text-xs text-[#6B7280] font-medium">
                15 - 30 Mins Setup
              </div>
            </div>
          </div>
        </div>

        {/* 3. TOOLBAR: CATEGORY FILTER & WRITE A REVIEW BUTTON */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white border border-[#F0E7DE] p-3.5 rounded-2xl shadow-2xs">
          {/* Review Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1 sm:pb-0">
            <span className="text-xs font-bold text-[#6B7280] px-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {['All', 'Subscriptions', 'Digital Products', 'Services'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterProduct(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors shrink-0 cursor-pointer ${
                  filterProduct === cat
                    ? 'bg-[#F28C28] text-white shadow-2xs'
                    : 'bg-[#FFF5EB] text-[#6B7280] hover:text-[#252525] border border-[#F0E7DE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Write a Review Button */}
          <button
            onClick={() => {
              setFormError('');
              setWriteModalOpen(true);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-[#F28C28] hover:bg-[#E07B18] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* 4. REVIEWS GRID (DISPLAY AT LEAST 20 CARDS WHEN EXPANDED) */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#F0E7DE] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div>
                  {/* Rating Stars & Honest Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-[#F28C28]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rev.rating ? 'fill-[#F28C28] text-[#F28C28]' : 'text-[#E5D5C5]'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Accurate Non-Deceptive Labeling */}
                    {rev.isSampleReview ? (
                      <span className="text-[10px] font-medium text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                        Sample Review
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Customer Feedback
                      </span>
                    )}
                  </div>

                  {/* Review Quote Message */}
                  <p className="text-xs sm:text-sm text-[#252525] italic leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Author Info & Product Purchased */}
                <div className="pt-3.5 border-t border-[#F0E7DE] mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-extrabold text-[#252525] text-sm">
                        {rev.author}
                      </div>
                      <div className="text-xs font-semibold text-[#F28C28] mt-0.5">
                        {rev.productOrService}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-medium text-[#9CA3AF] mt-2 flex items-center justify-between">
                    <span>{rev.location || 'India'}</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-white border border-[#F0E7DE] rounded-2xl">
            <p className="text-sm text-[#6B7280]">No reviews match this category filter.</p>
            <button
              onClick={() => setFilterProduct('All')}
              className="mt-2 text-xs font-bold text-[#F28C28] hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* 5. VIEW ALL / TOGGLE BUTTON */}
        {!isFullReviewsPage && (
          <div className="mt-10 text-center">
            {showAllExpanded ? (
              <button
                onClick={() => setShowAllExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] rounded-xl transition-all shadow-2xs cursor-pointer"
              >
                <span>Show Top Reviews</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  if (onViewAll) onViewAll();
                  else setShowAllExpanded(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-extrabold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] rounded-xl transition-all shadow-2xs group cursor-pointer"
              >
                <span>View All 20+ Reviews</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#F28C28]" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* 6. WRITE A REVIEW MODAL WITH FORM VALIDATION & SPAM PROTECTION */}
      {writeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white border border-[#F0E7DE] rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* Top Close Cross Button */}
            <button
              onClick={() => setWriteModalOpen(false)}
              className="absolute top-5 right-5 text-[#6B7280] hover:text-[#252525] p-1.5 rounded-xl hover:bg-[#FFF5EB] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3 py-1 rounded-full w-fit mb-2">
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Customer Feedback</span>
            </div>

            <h3 className="text-xl font-extrabold text-[#252525] mb-1">
              Write a Review
            </h3>
            <p className="text-xs text-[#6B7280] mb-5">
              Share your genuine feedback on subscription setup, service delivery, or digital assets.
            </p>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#252525]">Review Saved &amp; Published!</h4>
                <p className="text-xs text-[#6B7280] max-w-xs mx-auto">
                  Thank you for your valuable feedback. Your review is saved and displayed in the testimonials section.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Error Banner */}
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label className="block text-xs font-bold text-[#252525] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#F0E7DE] rounded-xl text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28]"
                  />
                </div>

                {/* Product / Service Dropdown & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#252525] mb-1">
                      Product or Service Purchased *
                    </label>
                    <select
                      value={productPurchased}
                      onChange={(e) => setProductPurchased(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#F0E7DE] rounded-xl text-sm text-[#252525] focus:outline-none focus:border-[#F28C28]"
                    >
                      <option value="Canva Pro">Canva Pro</option>
                      <option value="2000+ AI Videos Bundle">2000+ AI Videos Bundle (₹99)</option>
                      <option value="Gemini Pro (18 Months)">Gemini Pro (18 Months)</option>
                      <option value="ChatGPT Plus">ChatGPT Plus</option>
                      <option value="Claude Pro">Claude Pro</option>
                      <option value="CapCut Pro">CapCut Pro</option>
                      <option value="ZEE5 1-Year">ZEE5 1-Year</option>
                      <option value="Disney+ Hotstar">Disney+ Hotstar</option>
                      <option value="Netflix 4K">Netflix 4K</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Landing Page Development">Landing Page Development</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Other">Other Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#252525] mb-1">
                      Your City / State
                    </label>
                    <input
                      type="text"
                      value={userLocation}
                      onChange={(e) => setUserLocation(e.target.value)}
                      placeholder="e.g. Delhi, Mumbai"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#F0E7DE] rounded-xl text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28]"
                    />
                  </div>
                </div>

                {productPurchased === 'Other' && (
                  <div>
                    <label className="block text-xs font-bold text-[#252525] mb-1">
                      Specify Product / Service Name
                    </label>
                    <input
                      type="text"
                      value={customProduct}
                      onChange={(e) => setCustomProduct(e.target.value)}
                      placeholder="e.g. Graphic Asset Pack"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#F0E7DE] rounded-xl text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28]"
                    />
                  </div>
                )}

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-bold text-[#252525] mb-1">
                    Rating (1 to 5 Stars) *
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            star <= rating ? 'fill-[#F28C28] text-[#F28C28]' : 'text-[#E5D5C5]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#6B7280] ml-2 font-mono">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Comment Text Area */}
                <div>
                  <label className="block text-xs font-bold text-[#252525] mb-1">
                    Review Message * (Min 10 characters)
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe how the subscription activation or service worked for you..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#F0E7DE] rounded-xl text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28]"
                  />
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#F0E7DE]">
                  <button
                    type="button"
                    onClick={() => setWriteModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#6B7280] hover:text-[#252525] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-[#F28C28] hover:bg-[#E07B18] rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
