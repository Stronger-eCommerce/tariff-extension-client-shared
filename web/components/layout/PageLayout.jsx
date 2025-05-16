
import React from 'react';
import Navbar from './Navbar';
import { FileText } from 'lucide-react';

const PageLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {title && (
            <h1 className="text-3xl font-bold mb-6 text-gray-900">{title}</h1>
          )}
          {children}
          
          {/* Shipping Terms and Conditions */}
          <div className="mt-8 mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-start space-x-4">
            <FileText className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Shipping Terms and Conditions</h3>
              <p className="text-sm text-gray-600">
                Please ensure your shipper uses Entry Type 11 under the Shipping Act, or relevant Shipping Methods, so that you, as the shipper, are responsible for the tariffs rather than your customers.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Tariff Shield. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
