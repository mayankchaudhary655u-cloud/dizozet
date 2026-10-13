/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BackButton } from './components/BackButton';
import { Hero } from './components/Hero';
import { SubscriptionsSection } from './components/SubscriptionsSection';
import { ProductsComingSoon } from './components/ProductsComingSoon';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { BlogSection } from './components/BlogSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BlogDetailModal } from './components/BlogDetailModal';
import { LegalPage } from './pages/LegalPage';

import { SubscriptionItem, ServiceItem, BlogPost, ReviewItem } from './types';
import { getSubscriptions } from './data/subscriptions';
import { getServices } from './data/services';
import { getReviews, addReview } from './data/reviews';
import { getBlogPosts } from './data/blogs';

export default function App() {
  // Navigation State
  const [currentPath, setCurrentPath] = useState<string>('/');

  // Dynamic Data States
  const [subscriptions] = useState<SubscriptionItem[]>(getSubscriptions());
  const [services] = useState<ServiceItem[]>(getServices());
  const [reviews, setReviews] = useState<ReviewItem[]>(getReviews());
  const [blogs] = useState<BlogPost[]>(getBlogPosts());

  // Modal State
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Sync hash/pathname
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash.startsWith('/') ? hash : `/${hash}`);
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddReview = (newRev: Omit<ReviewItem, 'id' | 'date'>) => {
    addReview(newRev);
    setReviews(getReviews());
  };

  // Render subpage content based on currentPath
  const renderContent = () => {
    if (currentPath === '/terms') {
      return <LegalPage type="terms" onBack={() => navigateTo('/')} />;
    }
    if (currentPath === '/privacy') {
      return <LegalPage type="privacy" onBack={() => navigateTo('/')} />;
    }
    if (currentPath === '/refund-policy') {
      return <LegalPage type="refund-policy" onBack={() => navigateTo('/')} />;
    }

    // Dedicated All Subscriptions Page
    if (currentPath === '/subscriptions') {
      return (
        <div className="pt-2">
          <SubscriptionsSection
            subscriptions={subscriptions}
            isFullCatalogPage={true}
          />
          <WhyChooseUs />
          <FAQSection />
        </div>
      );
    }

    // Dedicated Digital Products Coming Soon Page
    if (currentPath === '/products') {
      return (
        <div className="pt-2">
          <ProductsComingSoon onBackToHome={() => navigateTo('/')} />
        </div>
      );
    }

    // Dedicated Services Page
    if (currentPath === '/services') {
      return (
        <div className="pt-2">
          <ServicesSection
            services={services}
            isFullServicesPage={true}
          />
          <HowItWorks />
          <ContactSection />
        </div>
      );
    }

    // Dedicated Reviews Page
    if (currentPath === '/reviews') {
      return (
        <div className="pt-2">
          <CustomerReviewsSection
            reviews={reviews}
            onAddReview={handleAddReview}
            isFullReviewsPage={true}
          />
          <WhyChooseUs />
        </div>
      );
    }

    // Dedicated Blogs Page
    if (currentPath === '/blogs') {
      return (
        <div className="pt-2">
          <BlogSection
            posts={blogs}
            onSelectPost={setSelectedBlog}
            isFullBlogsPage={true}
          />
        </div>
      );
    }

    // Dedicated About Us Page
    if (currentPath === '/about') {
      return (
        <div className="pt-2">
          <AboutSection />
          <WhyChooseUs />
          <ContactSection />
        </div>
      );
    }

    // Dedicated Contact Page
    if (currentPath === '/contact') {
      return (
        <div className="pt-2">
          <ContactSection />
          <FAQSection />
        </div>
      );
    }

    // Dedicated FAQ Page
    if (currentPath === '/faq') {
      return (
        <div className="pt-2">
          <FAQSection />
          <ContactSection />
        </div>
      );
    }

    // Default Homepage
    return (
      <>
        {/* Compact Hero Section */}
        <Hero
          onExploreSubscriptions={() => {
            const el = document.getElementById('subscriptions');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else navigateTo('/subscriptions');
          }}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else navigateTo('/services');
          }}
        />

        {/* 1. Featured Subscriptions */}
        <SubscriptionsSection
          subscriptions={subscriptions}
          onViewAll={() => navigateTo('/subscriptions')}
          isFullCatalogPage={false}
        />

        {/* 2. Featured Services */}
        <ServicesSection
          services={services}
          onViewAll={() => navigateTo('/services')}
          isFullServicesPage={false}
        />

        {/* Why Choose Dizozet? */}
        <WhyChooseUs />

        {/* How It Works */}
        <HowItWorks />

        {/* 3. Customer Reviews Section (Kept on Homepage as requested) */}
        <CustomerReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
          onViewAll={() => navigateTo('/reviews')}
          isFullReviewsPage={false}
        />

        {/* 4. Blog Guides Section (Kept on Homepage as requested) */}
        <BlogSection
          posts={blogs}
          onSelectPost={setSelectedBlog}
          onViewAll={() => navigateTo('/blogs')}
          isFullBlogsPage={false}
        />

        {/* About Dizozet */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#252525] flex flex-col font-sans selection:bg-[#F28C28] selection:text-white">
      {/* Clean, Responsive Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
      />

      {/* Top-Left Back Button (Hidden on homepage, visible on all inner pages/sections) */}
      <BackButton
        currentPath={currentPath}
        onNavigateHome={() => navigateTo('/')}
      />

      {/* Main Content Area */}
      <main className="flex-1">{renderContent()}</main>

      {/* Clean, Redesigned Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Blog Article Reader Modal */}
      <BlogDetailModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
}
