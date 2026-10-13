import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  currentPath: string;
  onNavigateHome: () => void;
  onBack?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ currentPath, onNavigateHome, onBack }) => {
  // Never display the Back button on the homepage
  const isHomepage = !currentPath || currentPath === '/' || currentPath === '#/' || currentPath === '#';
  if (isHomepage) {
    return null;
  }

  const handleBack = () => {
    // If a custom onBack handler is provided, use it
    if (onBack) {
      onBack();
      return;
    }

    // Reliable fallback: navigate back in history if there is history, otherwise return to home
    if (window.history.length > 1) {
      window.history.back();
    } else {
      onNavigateHome();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-1">
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-[#F0E7DE] hover:border-[#F28C28] hover:text-[#F28C28] text-xs font-semibold text-[#6B7280] transition-colors shadow-2xs group focus:outline-none cursor-pointer"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-[#6B7280] group-hover:text-[#F28C28]" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default BackButton;
