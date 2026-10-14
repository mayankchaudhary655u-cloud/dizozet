import React from 'react';
import { DigitalProductItem } from '../types';
import { MessageCircle, Download, Info, Sparkles, Check } from 'lucide-react';
import { getProductBuyWhatsAppUrl } from '../data/config';

interface ProductCardProps {
  product: DigitalProductItem;
  onViewDetails?: (product: DigitalProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const whatsappUrl = getProductBuyWhatsAppUrl(product.name, product.price);

  return (
    <div
      onClick={() => onViewDetails && onViewDetails(product)}
      className="rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all duration-200 p-5 flex flex-col justify-between group shadow-2xs hover:shadow-xs cursor-pointer relative"
    >
      <div>
        {/* Compact Product Thumbnail Image */}
        {product.image && (
          <div className="relative rounded-lg overflow-hidden mb-3.5 border border-[#F0E7DE] bg-black aspect-16/9 shadow-2xs group-hover:scale-[1.01] transition-transform">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
              <Download className="w-3 h-3 text-[#F28C28]" />
              <span>{product.format}</span>
            </span>
          </div>
        )}

        {/* Category Pill */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-2 py-0.5 rounded-md">
            {product.category}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-base font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors mb-1.5">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-[#6B7280] line-clamp-2 mb-3 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Quick Highlights Checklist */}
        <div className="space-y-1.5 py-2.5 border-t border-b border-[#F0E7DE] my-2.5">
          <div className="flex items-center gap-1.5 text-xs text-[#252525]">
            <Check className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
            <span>2,000+ Viral HD AI Reels</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#252525]">
            <Check className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
            <span>100% Without Watermark</span>
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Action Buttons */}
      <div className="pt-3 border-t border-[#F0E7DE] mt-2">
        <div className="flex items-baseline justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] text-[#6B7280] block font-medium uppercase tracking-wider">Price</span>
            <span className="text-2xl font-extrabold text-[#252525] font-mono tabular-nums">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#94A3B8] line-through font-mono">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-md">
            90% OFF
          </span>
        </div>

        {/* Action Buttons: View Details & Buy Now */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onViewDetails) onViewDetails(product);
            }}
            className="w-full flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg text-xs font-semibold text-[#252525] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-colors shadow-2xs active:scale-98 cursor-pointer"
            aria-label={`View details of ${product.name}`}
          >
            <Info className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>View Details</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-colors shadow-2xs active:scale-98"
            aria-label={`Buy Now ${product.name} for ₹${product.price}`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Buy Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
