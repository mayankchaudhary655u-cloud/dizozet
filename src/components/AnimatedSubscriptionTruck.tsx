import React, { useState } from 'react';
import { SubscriptionItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { MessageCircle, Sparkles, ChevronRight, CheckCircle2, Pause, Play } from 'lucide-react';
import { getSubscriptionBuyWhatsAppUrl } from '../data/config';

interface AnimatedSubscriptionTruckProps {
  subscriptions: SubscriptionItem[];
}

// 6 Distinct Visual Truck Styles for the Convoy
const TRUCK_STYLES = [
  {
    cabGradient: 'from-[#F28C28] to-[#D97706]',
    cabBorder: 'border-amber-600',
    containerBg: 'from-[#FFFFFF] to-[#F8FAFC]',
    containerBorder: 'border-slate-300',
    darkTheme: false,
    badgeBg: 'bg-[#FFF5EB] text-[#F28C28] border-[#F0E7DE]',
    lightGlow: 'shadow-[0_0_12px_#FBBF24]',
  },
  {
    cabGradient: 'from-[#0284C7] to-[#0369A1]',
    cabBorder: 'border-sky-700',
    containerBg: 'from-[#0F172A] to-[#1E293B]',
    containerBorder: 'border-sky-500/50',
    darkTheme: true,
    badgeBg: 'bg-sky-950 text-sky-300 border-sky-800',
    lightGlow: 'shadow-[0_0_12px_#38BDF8]',
  },
  {
    cabGradient: 'from-[#059669] to-[#047857]',
    cabBorder: 'border-emerald-700',
    containerBg: 'from-[#FFFFFF] to-[#F0FDF4]',
    containerBorder: 'border-emerald-300',
    darkTheme: false,
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    lightGlow: 'shadow-[0_0_12px_#34D399]',
  },
  {
    cabGradient: 'from-[#7C3AED] to-[#6D28D9]',
    cabBorder: 'border-purple-800',
    containerBg: 'from-[#FAF5FF] to-[#F3E8FF]',
    containerBorder: 'border-purple-300',
    darkTheme: false,
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
    lightGlow: 'shadow-[0_0_12px_#A78BFA]',
  },
  {
    cabGradient: 'from-[#DC2626] to-[#B91C1C]',
    cabBorder: 'border-red-800',
    containerBg: 'from-[#18181B] to-[#27272A]',
    containerBorder: 'border-red-500/50',
    darkTheme: true,
    badgeBg: 'bg-red-950 text-red-300 border-red-800',
    lightGlow: 'shadow-[0_0_12px_#F87171]',
  },
  {
    cabGradient: 'from-[#D97706] to-[#B45309]',
    cabBorder: 'border-amber-700',
    containerBg: 'from-[#FFFBEB] to-[#FEF3C7]',
    containerBorder: 'border-amber-300',
    darkTheme: false,
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
    lightGlow: 'shadow-[0_0_12px_#FBBF24]',
  },
];

export const AnimatedSubscriptionTruck: React.FC<AnimatedSubscriptionTruckProps> = ({
  subscriptions,
}) => {
  // Truck-specific hover detection state:
  // Only pause when the mouse is directly hovering over an individual truck
  const [hoveredTruckCount, setHoveredTruckCount] = useState(0);
  const isPaused = hoveredTruckCount > 0;

  if (!subscriptions || subscriptions.length === 0) return null;

  const convoyList = subscriptions;
  // Duplicate list once for 100% seamless, infinite marquee scrolling
  const duplicatedConvoy = [...convoyList, ...convoyList];

  const handleTruckEnter = () => setHoveredTruckCount((c) => c + 1);
  const handleTruckLeave = () => setHoveredTruckCount((c) => Math.max(0, c - 1));

  return (
    <div className="w-full bg-[#111827] text-white py-6 overflow-hidden border-t-2 border-b-2 border-[#F28C28]/40 shadow-inner relative select-none">
      {/* Top Header Ticker Bar */}
      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                isPaused ? 'bg-amber-400 opacity-50' : 'bg-[#F28C28] opacity-75'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isPaused ? 'bg-amber-400' : 'bg-[#F28C28]'
              }`}
            />
          </span>

          <span className="font-extrabold text-[#F28C28] uppercase tracking-wider font-mono text-[11px] sm:text-xs">
            Live Subscription Convoy
          </span>

          <span className="hidden sm:inline text-gray-500">|</span>

          <span className="hidden sm:inline text-gray-300 text-[11px]">
            {isPaused
              ? 'Truck Paused (Hovering Truck) • Click to order on WhatsApp'
              : 'Express delivery across India • Hover directly on any truck to pause'}
          </span>
        </div>

        {/* Live Traffic Status Pill */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-gray-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1.5">
            {isPaused ? (
              <>
                <Pause className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-amber-300 font-semibold">Truck Hovered</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#16A34A] fill-[#16A34A]" />
                <span className="text-gray-300">Live Convoy</span>
              </>
            )}
          </span>
        </div>
      </div>

      {/* --- REALISTIC STATIONARY HORIZONTAL ASPHALT ROAD SECTION --- */}
      <div className="relative w-full h-44 sm:h-48 bg-[#1E293B] border-y-4 border-slate-700 overflow-hidden">
        {/* 1. Top Guardrail / Road Shoulder with Hazard Stripes (Fixed Position z-10) */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-repeating-stripe opacity-90 z-10 shadow-xs pointer-events-none" />

        {/* 2. Stationary Distant Highway Lamp Posts (Fixed Position z-10) */}
        <div className="absolute top-2 left-0 right-0 flex justify-between px-6 pointer-events-none opacity-25 z-10">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-1 h-9 bg-slate-400" />
              <div className="w-3 h-1 bg-amber-300 rounded-full shadow-[0_0_8px_#F6AD55]" />
            </div>
          ))}
        </div>

        {/* 3. Stationary Center Yellow Dashed Line (Fixed Position z-10) */}
        <div
          className="absolute top-[48%] left-0 right-0 h-1.5 -translate-y-1/2 bg-[linear-gradient(90deg,transparent_0%,transparent_35%,#F59E0B_35%,#F59E0B_65%,transparent_65%)] bg-[length:60px_100%] animate-road-move pointer-events-none z-10"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        />

        {/* 4. Stationary Solid White Shoulder Contact Line (Exact Surface Line for Wheels z-10) */}
        <div className="absolute bottom-[26px] left-0 right-0 h-[3px] bg-white/40 pointer-events-none z-10" />

        {/* 5. Asphalt Road Curb below Shoulder Line (z-10) */}
        <div className="absolute bottom-0 left-0 right-0 h-[26px] bg-[#131924] pointer-events-none z-10" />

        {/* --- MOVING MULTI-TRUCK CONVOY TRACK (RIGHT TO LEFT z-20) --- */}
        {/* Positioned so truck wheels rest EXACTLY on the bottom white road shoulder line at bottom-[26px] */}
        <div
          className="absolute bottom-[26px] left-0 flex items-end gap-12 sm:gap-16 whitespace-nowrap animate-convoy-drive z-20"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {duplicatedConvoy.map((sub, idx) => {
            const style = TRUCK_STYLES[idx % TRUCK_STYLES.length];
            const whatsappUrl = getSubscriptionBuyWhatsAppUrl(
              sub.name,
              sub.planDuration,
              sub.sellingPrice
            );

            return (
              <div
                key={`${sub.id}-${idx}`}
                onMouseEnter={handleTruckEnter}
                onMouseLeave={handleTruckLeave}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(whatsappUrl, '_blank');
                }}
                className="relative inline-flex items-end cursor-pointer group shrink-0"
              >
                {/* Hover Tooltip - Appears when hovering over THIS truck */}
                <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-[#252525] text-white text-[10px] font-bold px-3 py-1 rounded-md shadow-xl border border-[#F28C28] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5 z-50">
                  <Sparkles className="w-3 h-3 text-[#F28C28]" />
                  <span>Click to order {sub.name} on WhatsApp</span>
                </div>

                {/* --- SINGLE TRUCK BODY (FACING FORWARD LEFT / MOVING LEFT) --- */}
                {/* Left side = Front Cabin; Right side = Cargo Container */}
                <div
                  className="relative flex items-end animate-truck-bob"
                  style={{
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                >
                  {/* A. FRONT CABIN (LEFT SIDE OF TRUCK - FACING FORWARD LEFT) */}
                  <div
                    className={`relative w-20 sm:w-24 h-20 sm:h-22 bg-gradient-to-r ${style.cabGradient} rounded-l-2xl border-2 border-r-0 ${style.cabBorder} shadow-2xl flex flex-col justify-between p-1.5 overflow-hidden z-20`}
                  >
                    {/* Front Sloped Windshield Facing Left */}
                    <div className="relative w-12 sm:w-14 h-8 bg-slate-900 rounded-l-lg border border-white/20 mr-auto overflow-hidden">
                      {/* Glass Glare Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-400/25 to-white/40" />
                      {/* Silhouette Driver Facing Left */}
                      <div className="absolute bottom-1 left-2 w-3.5 h-4 bg-slate-950 rounded-t-full opacity-85" />
                    </div>

                    {/* Door Handle & Dizozet Brand Stamp */}
                    <div className="flex items-center justify-between px-1 my-0.5">
                      <div className="w-2.5 h-1 bg-white/80 rounded-xs border border-black/20" />
                      <span className="text-[8px] font-black text-white tracking-widest font-mono">
                        DIZOZET
                      </span>
                    </div>

                    {/* Front Chrome Bumper & Headlight Beam Pointing LEFT */}
                    <div className="relative flex items-center justify-between mt-auto">
                      {/* Headlight Bulb & Forward Light Beam Cone pointing LEFT */}
                      <div className="relative">
                        <div className={`w-3.5 h-3.5 bg-amber-100 rounded-full border border-amber-300 ${style.lightGlow}`} />
                        {/* Forward Headlight Beam Cone extending LEFT */}
                        <div className="absolute top-1/2 -left-18 -translate-y-1/2 w-18 h-10 bg-gradient-to-r from-transparent via-amber-200/15 to-amber-100/35 pointer-events-none rounded-l-full" />
                      </div>

                      {/* Chrome Grille */}
                      <div className="w-2 h-4 bg-slate-300 rounded-xs border border-slate-500" />
                    </div>
                  </div>

                  {/* B. CARGO CONTAINER (RIGHT SIDE OF TRUCK - ATTACHED BEHIND CABIN) */}
                  <div
                    className={`relative w-56 sm:w-68 h-24 sm:h-28 bg-gradient-to-b ${style.containerBg} rounded-r-xl border-2 ${style.containerBorder} shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden -ml-0.5 z-10`}
                  >
                    {/* Metallic Container Striped Background Texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.025)_50%,transparent_50%)] bg-[length:12px_100%] pointer-events-none" />

                    {/* Container Top Header Label */}
                    <div className="relative z-10 flex items-center justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold text-[#252525] tracking-widest uppercase font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse" />
                        DIZOZET EXPRESS
                      </span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${style.badgeBg}`}>
                        VERIFIED PLAN
                      </span>
                    </div>

                    {/* CARGO DISPLAY BOX: OFFICIAL SUBSCRIPTION LOGO + DETAILS */}
                    <div
                      className={`relative z-10 flex items-center gap-2.5 rounded-lg p-2 border shadow-inner my-auto transition-transform group-hover:scale-102 ${
                        style.darkTheme
                          ? 'bg-slate-900/90 border-slate-700 text-white'
                          : 'bg-white border-slate-200 text-[#252525]'
                      }`}
                    >
                      {/* Official Subscription Logo */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-1 shrink-0 shadow-2xs">
                        <BrandIcon
                          name={sub.slug}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                          color={sub.brandColor}
                        />
                      </div>

                      {/* Subscription Info Text */}
                      <div className="min-w-0 flex-1">
                        <h4
                          className={`text-xs sm:text-sm font-extrabold truncate ${
                            style.darkTheme ? 'text-white' : 'text-[#252525]'
                          } group-hover:text-[#F28C28] transition-colors`}
                        >
                          {sub.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs font-extrabold text-[#16A34A] font-mono">
                            ₹{sub.sellingPrice}
                          </span>
                          <span className="text-[10px] font-semibold text-[#F28C28] bg-[#FFF5EB] px-1.5 py-0.2 rounded border border-[#F0E7DE]">
                            {sub.planDuration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Cargo Container Bottom CTA */}
                    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <span className="flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                        100% Genuine Access
                      </span>
                      <span className="text-[#F28C28] font-bold flex items-center gap-0.5">
                        Order Now <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Rear Red Brake Light Reflectors (Far Right Edge of Container) */}
                    <div className="absolute top-2 right-0.5 w-1 h-4 bg-red-600 rounded-l-xs shadow-[0_0_8px_red]" />
                    <div className="absolute bottom-2 right-0.5 w-1 h-4 bg-red-600 rounded-l-xs shadow-[0_0_8px_red]" />
                  </div>

                  {/* C. TRUCK WHEELS & TIRE CONTACT SHADOWS (TOUCHING THE WHITE ROAD SURFACE LINE) */}
                  {/* Front Wheel (under Cabin on Left) */}
                  <div className="absolute -bottom-3 left-4 z-30">
                    {/* Wheel Rim & Tire */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-lg">
                      <div
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-400 border border-slate-200 flex items-center justify-center animate-spin-ccw"
                        style={{
                          animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                      >
                        <div className="w-1 h-3 bg-slate-900 rounded-full" />
                        <div className="w-3 h-1 bg-slate-900 rounded-full absolute" />
                      </div>
                    </div>
                    {/* Asphalt Contact Tire Shadow */}
                    <div className="w-7 sm:w-8 h-1 bg-black/80 rounded-full blur-[1px] -mt-0.5" />
                  </div>

                  {/* Rear Wheel 1 (under Container on Right) */}
                  <div className="absolute -bottom-3 right-18 sm:right-22 z-30">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-lg">
                      <div
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-400 border border-slate-200 flex items-center justify-center animate-spin-ccw"
                        style={{
                          animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                      >
                        <div className="w-1 h-3 bg-slate-900 rounded-full" />
                        <div className="w-3 h-1 bg-slate-900 rounded-full absolute" />
                      </div>
                    </div>
                    <div className="w-7 sm:w-8 h-1 bg-black/80 rounded-full blur-[1px] -mt-0.5" />
                  </div>

                  {/* Rear Wheel 2 (under Container on Far Right) */}
                  <div className="absolute -bottom-3 right-6 z-30">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-lg">
                      <div
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-400 border border-slate-200 flex items-center justify-center animate-spin-ccw"
                        style={{
                          animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                      >
                        <div className="w-1 h-3 bg-slate-900 rounded-full" />
                        <div className="w-3 h-1 bg-slate-900 rounded-full absolute" />
                      </div>
                    </div>
                    <div className="w-7 sm:w-8 h-1 bg-black/80 rounded-full blur-[1px] -mt-0.5" />
                  </div>

                  {/* Rear Exhaust Smoke Puff (Puffing behind truck on the Right) */}
                  <div
                    className="absolute bottom-1 -right-3 w-2 h-2 rounded-full bg-gray-400/50 animate-smoke pointer-events-none"
                    style={{
                      animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
