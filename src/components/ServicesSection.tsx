import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { ServiceCard } from './ServiceCard';
import { Code2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService?: (srv: ServiceItem) => void;
  onViewAll?: () => void;
  isFullServicesPage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onViewAll,
  isFullServicesPage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Development', 'Marketing', 'Design', 'Custom'];

  const filteredServices = services.filter((srv) => {
    return selectedCategory === 'All' || srv.category === selectedCategory;
  });

  // HOMEPAGE REQUIREMENT: Display only the first 3 featured services!
  const displayedServices = isFullServicesPage
    ? filteredServices
    : filteredServices.slice(0, 3);

  return (
    <section id="services" className="py-12 md:py-16 bg-white border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3 py-1 rounded-full mb-2.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>Professional Online Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight text-balance">
            {isFullServicesPage ? 'All Professional Services' : 'Featured Digital Services'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            Web development, landing pages, and digital marketing tailored to your brand.
          </p>
        </div>

        {/* Category Tabs (Full page only) */}
        {isFullServicesPage && (
          <div className="flex items-center justify-center gap-1.5 p-1 bg-[#FFF5EB] border border-[#F0E7DE] rounded-xl max-w-fit mx-auto mb-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
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

        {/* Services Grid (3 items on Homepage, all on full page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* View More Services Button (Homepage Only) */}
        {!isFullServicesPage && onViewAll && (
          <div className="mt-10 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] rounded-xl transition-all shadow-2xs group"
            >
              <span>View More Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#F28C28]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
