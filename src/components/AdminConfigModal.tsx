import React, { useState } from 'react';
import { SubscriptionItem, ServiceItem } from '../types';
import { getContactConfig, saveContactConfig } from '../data/config';
import { getSubscriptions, saveSubscriptions } from '../data/subscriptions';
import { getServices, saveServices } from '../data/services';
import { X, Check, RotateCcw, Plus, Trash2, Settings } from 'lucide-react';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataUpdated: () => void;
}

export const AdminConfigModal: React.FC<AdminConfigModalProps> = ({
  isOpen,
  onClose,
  onDataUpdated,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'contact' | 'subscriptions' | 'services'>('contact');

  // Contact State
  const initialContact = getContactConfig();
  const [whatsappNumber, setWhatsappNumber] = useState(initialContact.whatsappNumber);
  const [whatsappDisplay, setWhatsappDisplay] = useState(initialContact.whatsappDisplay);
  const [email, setEmail] = useState(initialContact.email);
  const [instagram, setInstagram] = useState(initialContact.instagram);
  const [instagramHandle, setInstagramHandle] = useState(initialContact.instagramHandle);

  // Subscriptions State
  const [subs, setSubs] = useState<SubscriptionItem[]>(getSubscriptions());
  const [newSubName, setNewSubName] = useState('');
  const [newSubPrice, setNewSubPrice] = useState('299');
  const [newSubDuration, setNewSubDuration] = useState('1 month');
  const [newSubCategory, setNewSubCategory] = useState<SubscriptionItem['category']>('AI Subscriptions');
  const [newSubDesc, setNewSubDesc] = useState('');

  // Services State
  const [servicesList, setServicesList] = useState<ServiceItem[]>(getServices());

  const [savedSuccess, setSavedSuccess] = useState(false);

  // Handle Save Contact
  const handleSaveContact = () => {
    saveContactConfig({
      whatsappNumber,
      whatsappDisplay,
      email,
      instagram,
      instagramHandle,
    });
    setSavedSuccess(true);
    onDataUpdated();
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  // Handle Subscription Price Edit
  const handleUpdateSubPrice = (id: string, price: number, origPrice?: number) => {
    const updated = subs.map((s) => (s.id === id ? { ...s, sellingPrice: price, originalPrice: origPrice } : s));
    setSubs(updated);
    saveSubscriptions(updated);
    onDataUpdated();
  };

  // Handle Service Price Edit
  const handleUpdateServicePrice = (id: string, price: number) => {
    const updated = servicesList.map((srv) => (srv.id === id ? { ...srv, startingPrice: price } : srv));
    setServicesList(updated);
    saveServices(updated);
    onDataUpdated();
  };

  // Handle Add Subscription
  const handleAddSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim()) return;

    const newSub: SubscriptionItem = {
      id: `custom-sub-${Date.now()}`,
      slug: newSubName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: newSubName.trim(),
      category: newSubCategory,
      shortDescription: newSubDesc.trim() || 'Access digital plan with active warranty and support.',
      planDuration: newSubDuration,
      sellingPrice: Number(newSubPrice) || 299,
      originalPrice: (Number(newSubPrice) || 299) * 2,
      discountBadge: '50% OFF',
      benefits: ['Genuine account access', 'Direct WhatsApp setup', 'Full duration warranty'],
      iconName: 'Package',
      brandColor: '#F28C28',
    };

    const updated = [newSub, ...subs];
    setSubs(updated);
    saveSubscriptions(updated);
    setNewSubName('');
    setNewSubDesc('');
    onDataUpdated();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  // Handle Delete Subscription
  const handleDeleteSub = (id: string) => {
    const updated = subs.filter((s) => s.id !== id);
    setSubs(updated);
    saveSubscriptions(updated);
    onDataUpdated();
  };

  // Reset to Defaults
  const handleResetDefaults = () => {
    if (window.confirm('Reset catalog and settings to initial Dizozet defaults?')) {
      localStorage.removeItem('dizozet_contact_config_v2');
      localStorage.removeItem('dizozet_subscriptions_exact_v3');
      localStorage.removeItem('dizozet_services');
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white border border-[#F0E7DE] rounded-2xl p-6 sm:p-8 shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F0E7DE]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#252525]">Dizozet Business Manager</h3>
              <p className="text-xs text-[#6B7280]">Update WhatsApp contact & live pricing</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#252525] p-2 rounded-xl hover:bg-[#FFF5EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Banner */}
        {savedSuccess && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Changes successfully updated and applied across the entire website!</span>
          </div>
        )}

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-[#F0E7DE] pb-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'contact'
                ? 'bg-[#F28C28] text-white font-bold shadow-2xs'
                : 'text-[#6B7280] hover:text-[#252525] hover:bg-[#FFF5EB]'
            }`}
          >
            WhatsApp & Contact Config
          </button>
          <button
            onClick={() => setActiveTab('subscriptions')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'subscriptions'
                ? 'bg-[#F28C28] text-white font-bold shadow-2xs'
                : 'text-[#6B7280] hover:text-[#252525] hover:bg-[#FFF5EB]'
            }`}
          >
            Subscription Prices & Products ({subs.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'services'
                ? 'bg-[#F28C28] text-white font-bold shadow-2xs'
                : 'text-[#6B7280] hover:text-[#252525] hover:bg-[#FFF5EB]'
            }`}
          >
            Services Starting Prices ({servicesList.length})
          </button>
        </div>

        {/* TAB 1: CONTACT CONFIG */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            <p className="text-xs text-[#6B7280]">
              Update your central WhatsApp number and support email. All order buttons on the website will automatically route inquiries here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#252525] mb-1">
                  WhatsApp Number (with Country Code)
                </label>
                <input
                  type="text"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="e.g. 917895768118"
                  className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-xl text-xs text-[#252525] focus:outline-none focus:border-[#F28C28]"
                />
                <span className="text-[10px] text-[#6B7280] mt-1 block">
                  Digits only for wa.me links
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252525] mb-1">
                  WhatsApp Display Text
                </label>
                <input
                  type="text"
                  value={whatsappDisplay}
                  onChange={(e) => setWhatsappDisplay(e.target.value)}
                  placeholder="e.g. +91 78957 68118"
                  className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-xl text-xs text-[#252525] focus:outline-none focus:border-[#F28C28]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252525] mb-1">
                  Support Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dizozet.org@gmail.com"
                  className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-xl text-xs text-[#252525] focus:outline-none focus:border-[#F28C28]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252525] mb-1">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  value={instagramHandle}
                  onChange={(e) => setInstagramHandle(e.target.value)}
                  placeholder="@dizozet"
                  className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-xl text-xs text-[#252525] focus:outline-none focus:border-[#F28C28]"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleSaveContact}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-all shadow-xs"
              >
                Save Contact Details
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: SUBSCRIPTIONS PRICING & PRODUCTS */}
        {activeTab === 'subscriptions' && (
          <div className="space-y-6">
            {/* Add New Subscription Form */}
            <form onSubmit={handleAddSubscription} className="p-4 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] space-y-3">
              <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Plus className="w-3.5 h-3.5 text-[#F28C28]" /> Add New Subscription Product
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Product Name (e.g. Midjourney)"
                  value={newSubName}
                  onChange={(e) => setNewSubName(e.target.value)}
                  className="px-3 py-2 bg-white border border-[#F0E7DE] rounded-lg text-xs text-[#252525] focus:outline-none focus:border-[#F28C28]"
                />
                <input
                  type="number"
                  required
                  placeholder="Selling Price (₹)"
                  value={newSubPrice}
                  onChange={(e) => setNewSubPrice(e.target.value)}
                  className="px-3 py-2 bg-white border border-[#F0E7DE] rounded-lg text-xs text-[#252525] focus:outline-none focus:border-[#F28C28]"
                />
                <input
                  type="text"
                  placeholder="Duration (e.g. 1 month)"
                  value={newSubDuration}
                  onChange={(e) => setNewSubDuration(e.target.value)}
                  className="px-3 py-2 bg-white border border-[#F0E7DE] rounded-lg text-xs text-[#252525] focus:outline-none focus:border-[#F28C28]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F28C28] hover:bg-[#E07B18] text-white text-xs font-bold rounded-lg transition-all"
                >
                  + Add Product
                </button>
              </div>
            </form>

            {/* List of Existing Subscriptions */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider font-mono">
                Existing Catalog Products
              </h4>
              <div className="divide-y divide-[#F0E7DE] bg-white rounded-xl border border-[#F0E7DE] overflow-hidden">
                {subs.map((item) => (
                  <div key={item.id} className="p-3 flex items-center justify-between gap-3 text-xs">
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[#252525] truncate">{item.name}</div>
                      <div className="text-[11px] text-[#6B7280] truncate">
                        {item.category} · {item.planDuration}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1">
                        <span className="text-[#6B7280]">₹</span>
                        <input
                          type="number"
                          value={item.sellingPrice}
                          onChange={(e) => handleUpdateSubPrice(item.id, Number(e.target.value) || 0, item.originalPrice)}
                          className="w-20 px-2 py-1 bg-[#FFF5EB] border border-[#F0E7DE] rounded text-xs text-[#252525] font-mono tabular-nums focus:border-[#F28C28]"
                        />
                      </div>

                      <button
                        onClick={() => handleDeleteSub(item.id)}
                        className="text-[#9CA3AF] hover:text-red-500 p-1.5 rounded transition-colors"
                        title="Delete product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SERVICES PRICING */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            <p className="text-xs text-[#6B7280]">
              Edit the starting prices for your digital services. WhatsApp inquiries will reflect these rates.
            </p>

            <div className="divide-y divide-[#F0E7DE] bg-white rounded-xl border border-[#F0E7DE] overflow-hidden">
              {servicesList.map((srv) => (
                <div key={srv.id} className="p-3.5 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-semibold text-[#252525]">{srv.name}</div>
                    <div className="text-[11px] text-[#6B7280]">{srv.timeline} · {srv.category}</div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[#6B7280] font-mono">From ₹</span>
                    <input
                      type="number"
                      value={srv.startingPrice}
                      onChange={(e) => handleUpdateServicePrice(srv.id, Number(e.target.value) || 0)}
                      className="w-24 px-2 py-1 bg-[#FFF5EB] border border-[#F0E7DE] rounded text-xs text-[#252525] font-mono tabular-nums focus:border-[#F28C28]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-[#F0E7DE] flex items-center justify-between">
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-red-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Everything to Defaults</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-[#252525] bg-[#FFF5EB] hover:bg-[#F0E7DE] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
