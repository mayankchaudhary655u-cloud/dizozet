import React from 'react';
import { DigitalProductItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { MessageCircle, Download, Info, Sparkles } from 'lucide-react';
import { getProductBuyWhatsAppUrl } from '../data/config';

interface ProductCardProps {
  product: DigitalProductItem;
  onViewDetails?: (product: DigitalProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const whatsappUrl = getProductBuyWhatsAppUrl(product.name, product.price);

  return (
    <div className={`rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all duration-200 p-5 flex flex-col justify-between group shadow-2xs hover:shadow-xs ${
      product.image ? 'lg:col-span-2' : ''
    }`}>
      <div>
        {/* Large Attractive Product Image if present */}
        {product.image && (
          <div className="relative rounded-xl overflow-hidden mb-4 border border-[#F0E7DE] bg-black aspect-16/9 shadow-xs group-hover:scale-[1.01] transition-transform">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {product.badge && (
              <span className="absolute top-2.5 left-2.5 bg-[#F28C28] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>{product.badge}</span>
              </span>
            )}
            <span className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
              <Download className="w-3 h-3 text-[#F28C28]" />
              <span>{product.format}</span>
            </span>
          </div>
        )}

        {/* Top Header: Icon & Format (for cards without image) */}
        {!product.image && (
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="w-11 h-11 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center p-2.5 shrink-0 group-hover:scale-102 transition-transform text-[#F28C28]">
              <BrandIcon name={product.iconName} className="w-6 h-6" color="#F28C28" />
            </div>

            <span className="text-[11px] font-medium text-[#6B7280] bg-[#FFF5EB] border border-[#F0E7DE] px-2 py-0.5 rounded-md flex items-center gap-1">
              <Download className="w-3 h-3 text-[#F28C28]" />
              <span>{product.format}</span>
            </span>
          </div>
        )}

        {/* Category Pill for cards with image */}
        {product.image && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-2.5 py-0.5 rounded-md">
              {product.category}
            </span>
          </div>
        )}

        {/* Product Name */}
        <h3 className={`font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors mb-1.5 ${
          product.image ? 'text-lg sm:text-xl' : 'text-base'
        }`}>
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-[#6B7280] line-clamp-2 mb-3 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Bottom Footer: Price + Actions */}
      <div className="pt-3 border-t border-[#F0E7DE] mt-3">
        <div className="flex items-baseline justify-between mb-3.5">
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] text-[#6B7280] block font-medium uppercase tracking-wider">Price</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#252525] font-mono tabular-nums">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#94A3B8] line-through font-mono">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <span className="text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-md">
            Digital Access
          </span>
        </div>

        {/* Action Buttons: View Details (if provided) & Buy Now */}
        <div className={`grid gap-2 ${onViewDetails ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {onViewDetails && (
            <button
              onClick={() => onViewDetails(product)}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold text-[#252525] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-colors shadow-2xs active:scale-98"
              aria-label={`View details of ${product.name}`}
            >
              <Info className="w-4 h-4 text-[#F28C28]" />
              <span>View Details</span>
            </button>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-colors shadow-2xs active:scale-98"
            aria-label={`Buy Now ${product.name} for ₹${product.price}`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Buy Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
