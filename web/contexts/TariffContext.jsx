import React, { createContext, useContext, useState, ReactNode } from 'react';

const defaultSettings = {
  enabled: true,
  price: 10.99,
  message: "Prepay your tariffs now to avoid unexpected charges and delays at customs. Guaranteed hassle-free delivery.",
  autoCalculate: false,
  percentOfGoods: 150,
  defaultCountries: ["US", "CA", "UK", "AU"],
  usaOnly: false,
  warehouseRestricted: false,
  selectedWarehouses: [],
  
  // Advanced pricing defaults
  tieredPricing: false,
  tier1Threshold: 50,
  tier1Price: 4.99,
  tier2Threshold: 100,
  tier2Price: 9.99,
  tier3Price: 14.99,
  
  countryRates: false,
  countryRateType: 'percentage',
  euAdjustment: 120,
  ukAdjustment: 110,
  caAdjustment: 105,
  auAdjustment: 115,
  euPrice: 11.99,
  ukPrice: 10.99,
  caPrice: 9.99,
  auPrice: 12.99,
};

const TariffContext = createContext(undefined);

export const TariffProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <TariffContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </TariffContext.Provider>
  );
};

export const useTariff = () => {
  const context = useContext(TariffContext);
  if (context === undefined) {
    throw new Error('useTariff must be used within a TariffProvider');
  }
  return context;
};
