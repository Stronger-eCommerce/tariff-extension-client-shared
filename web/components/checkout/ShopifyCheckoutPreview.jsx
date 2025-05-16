
import React from 'react';
import { useTariff } from '../../contexts/TariffContext';
import { Shield } from 'lucide-react';
import { Switch } from '../ui/switch';

const ShopifyCheckoutPreview = () => {
  const { settings } = useTariff();
  const { price, message, enabled } = settings;
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden max-w-lg mx-auto">
      {/* Checkout header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold">Your cart</h2>
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Product section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="font-medium text-gray-500">PRODUCT</span>
          <span className="font-medium text-gray-500">TOTAL</span>
        </div>
        
        <div className="flex items-start space-x-4 mb-4">
          <img 
            src="/lovable-uploads/42c475ef-cba3-42f1-a102-3c336665c93b.png" 
            alt="Product" 
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <p className="font-medium">Please click Add to Cart to see the App effect</p>
            <p className="text-gray-600">$99.99</p>
            <div className="flex items-center mt-2">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                1
              </div>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">$99.99</p>
            <button className="mt-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Total section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-xl font-medium">Estimated total</span>
          <span className="text-xl font-medium">$99.99 USD</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          Taxes, discounts and shipping calculated at checkout
        </p>
      </div>
      
      {/* Tariff protection section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-12 w-12 text-tariff" />
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Tariff protection (${price.toFixed(2)})</p>
                <Switch checked={enabled} />
              </div>
              <p className="text-sm text-gray-600 mt-1">{message}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout button */}
      <div className="p-4">
        <button className="w-full bg-black text-white py-3 rounded font-medium">
          Check out
        </button>
      </div>
    </div>
  );
};

export default ShopifyCheckoutPreview;
