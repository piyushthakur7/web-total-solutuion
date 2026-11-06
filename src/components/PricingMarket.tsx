'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { PRICING_MARKET_COOKIE, type PricingMarket } from '../pricing';

const PricingContext = createContext<PricingMarket>('international');
export const usePricingMarket = () => useContext(PricingContext);

export function PricingMarketProvider({ market, children }: { market: PricingMarket; children: ReactNode }) {
  return <PricingContext.Provider value={market}>{children}</PricingContext.Provider>;
}

export default function PricingMarketSwitch({ light = false }: { light?: boolean }) {
  const market = usePricingMarket();
  return <label className={`inline-flex flex-wrap items-center gap-2 text-sm ${light ? 'text-white' : 'text-ink'}`}>
    <span>Website pricing</span>
    <select aria-label="Website pricing region" value={market}
      onChange={(event) => {
        document.cookie = `${PRICING_MARKET_COOKIE}=${event.target.value}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
        // A fresh request keeps visible prices, metadata and enquiry defaults in sync.
        window.location.reload();
      }}
      className="min-h-11 rounded-full border border-current bg-transparent px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2">
      <option className="bg-white text-ink" value="india">India · INR</option>
      <option className="bg-white text-ink" value="international">International · USD</option>
    </select>
  </label>;
}
