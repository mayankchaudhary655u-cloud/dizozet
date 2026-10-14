import React, { useState } from 'react';
import { DigitalProductItem } from '../types';
import { ProductCard } from './ProductCard';
import { ProductProcessModal } from './ProductProcessModal';
import { Package, ArrowRight } from 'lucide-react';

interface ProductsSectionProps {
  products: DigitalProductItem[];
  onViewAll?: () => void;
  isFullProductsPage?: boolean;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onViewAll,
  isFullProductsPage = false,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<DigitalProductItem | null>(null);

  if (!products || products.length === 0) {
    if (!isFullProductsPage) return null;
    return (
      <section className="py-12 bg-[#FFF5EB]/50 border-b border-[#F0E7DE]">
        <div className="max-w-7xl mx-auto px-4 text-center py-12">
          <p className="text-sm text-[#6B7280]">No digital products available right now.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-12 md:py-16 bg-[#FFF5EB]/40 border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Standard Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3 py-1 rounded-full mb-2.5">
            <Package className="w-3.5 h-3.5" />
            <span>Digital Assets &amp; Tools</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight text-balance">
            {isFullProductsPage ? 'All Digital Products' : 'Featured Digital Products'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            Practical creator bundles, toolkits, and digital assets ready for instant access.
          </p>
        </div>

        {/* Clean Compact Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        {/* View More Products Button if configured */}
        {!isFullProductsPage && onViewAll && products.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] rounded-xl transition-all shadow-2xs group cursor-pointer"
            >
              <span>View More Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#F28C28]" />
            </button>
          </div>
        )}
      </div>

      {/* Details & Process Modal */}
      <ProductProcessModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
