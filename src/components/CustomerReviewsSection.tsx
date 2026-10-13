import React, { useState } from 'react';
import { ReviewItem } from '../types';
import { Star, MessageSquarePlus, ArrowRight, X, ShieldCheck } from 'lucide-react';

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
  const [authorName, setAuthorName] = useState('');
  const [productPurchased, setProductPurchased] = useState('Canva Pro');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    onAddReview({
      author: authorName.trim(),
      productOrService: productPurchased,
      rating,
      comment: comment.trim(),
      location: userLocation.trim() || 'Verified Customer',
      isSampleReview: false,
      verifiedPurchase: false,
    });

    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setWriteModalOpen(false);
      setAuthorName('');
      setComment('');
      setUserLocation('');
    }, 1500);
  };

  // HOMEPAGE REQUIREMENT: Display only 3 genuine customer reviews!
  const displayedReviews = isFullReviewsPage ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews" className="py-12 md:py-16 bg-[#FFF5EB]/30 border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3 py-1 rounded-full mb-2.5">
              <Star className="w-3.5 h-3.5 fill-[#F28C28] text-[#F28C28]" />
              <span>Customer Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight">
              {isFullReviewsPage ? 'All Customer Reviews' : 'Recent Customer Reviews'}
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              Transparent feedback from Indian creators, founders, and professionals using Dizozet.
            </p>
          </div>

          {/* Action: Write a Review */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setWriteModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] rounded-lg transition-colors shadow-2xs"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid (3 items on Homepage, all on full page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-xl bg-white border border-[#F0E7DE] p-5 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                {/* Rating Stars & Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#F28C28]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-[#F28C28] text-[#F28C28]' : 'text-[#E5D5C5]'
                        }`}
                      />
                    ))}
                  </div>

                  {rev.isSampleReview ? (
                    <span className="text-[10px] text-[#6B7280] bg-[#FFF5EB] border border-[#F0E7DE] px-2 py-0.5 rounded">
                      Sample Feedback
                    </span>
                  ) : (
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Client Feedback
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#252525] italic mb-4 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-3 border-t border-[#F0E7DE]">
                <div className="font-bold text-[#252525] text-sm">{rev.author}</div>
                <div className="text-xs text-[#F28C28] mt-0.5 font-medium">{rev.productOrService}</div>
                <div className="text-[11px] text-[#6B7280] mt-1 flex items-center justify-between">
                  <span>{rev.location || 'India'}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews Button (Homepage Only) */}
        {!isFullReviewsPage && onViewAll && (
          <div className="mt-10 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] rounded-xl transition-all shadow-2xs group"
            >
              <span>View More Reviews</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#F28C28]" />
            </button>
          </div>
        )}
      </div>

      {/* Write a Review Modal */}
      {writeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white border border-[#F0E7DE] rounded-2xl p-6 sm:p-8 shadow-xl">
            <button
              onClick={() => setWriteModalOpen(false)}
              className="absolute top-5 right-5 text-[#6B7280] hover:text-[#252525] p-1 rounded-lg hover:bg-[#FFF5EB]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#252525] mb-1">Write a Customer Review</h3>
            <p className="text-xs text-[#6B7280] mb-5">
              Share your genuine experience with Dizozet.
            </p>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#252525]">Review Submitted!</h4>
                <p className="text-xs text-[#6B7280]">
                  Thank you! Your feedback has been recorded.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-lg text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Product or Service *
                    </label>
                    <select
                      value={productPurchased}
                      onChange={(e) => setProductPurchased(e.target.value)}
                      className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-lg text-sm text-[#252525] focus:outline-none focus:border-[#F28C28]"
                    >
                      <option value="Google AI Pro">Google AI Pro</option>
                      <option value="Gemini Advanced">Gemini Advanced</option>
                      <option value="ChatGPT Plus">ChatGPT Plus</option>
                      <option value="Claude Pro">Claude Pro</option>
                      <option value="Canva Pro">Canva Pro</option>
                      <option value="CapCut Pro">CapCut Pro</option>
                      <option value="Disney+ Hotstar">Disney+ Hotstar</option>
                      <option value="Netflix">Netflix</option>
                      <option value="YouTube Premium">YouTube Premium</option>
                      <option value="Website Development">Website Development</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Other Service">Other Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      City / State
                    </label>
                    <input
                      type="text"
                      value={userLocation}
                      onChange={(e) => setUserLocation(e.target.value)}
                      placeholder="e.g. Delhi NCR"
                      className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-lg text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Rating (1 to 5 Stars)
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-[#F28C28] text-[#F28C28]' : 'text-[#E5D5C5]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono text-[#6B7280] ml-2">{rating} / 5</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Your Experience / Feedback *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe how the subscription or service worked for you..."
                    className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-lg text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setWriteModalOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-[#6B7280] hover:text-[#252525]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] rounded-lg transition-colors"
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
