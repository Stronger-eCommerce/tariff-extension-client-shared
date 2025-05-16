
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { CreditCard } from 'lucide-react';

const Billing = () => {
  return (
    <PageLayout title="Billing">
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="text-center mb-6">
          <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Billing Settings</h3>
          <p className="text-gray-600 mb-4">
            Manage your subscription and billing details.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-medium mb-2">Current Plan</h4>
            <p className="text-sm text-gray-600">You are currently on the <span className="font-medium">Basic Plan</span></p>
          </div>
          
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-medium mb-2">Payment Method</h4>
            <p className="text-sm text-gray-600">No payment methods added yet.</p>
          </div>
          
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-medium mb-2">Billing History</h4>
            <p className="text-sm text-gray-600">No billing history available.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Billing;
