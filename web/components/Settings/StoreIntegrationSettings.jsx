import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Store, ExternalLink, ToggleLeft, ToggleRight, Check, Shield } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

const StoreIntegrationSettings = () => {
  const [isIntegrated, setIsIntegrated] = useState(false);
  const { toast } = useToast();

  const handleToggleIntegration = () => {
    const newStatus = !isIntegrated;
    setIsIntegrated(newStatus);

    toast({
      title: newStatus ? "Integration Enabled" : "Integration Disabled",
      description: newStatus
        ? "Tariff Shield is now integrated with your store"
        : "Tariff Shield integration has been disabled",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="h-5 w-5 text-tariff" />
            Add Tariff Shield to your Shopify store
          </CardTitle>
          <CardDescription>
            Integrate the Tariff Shield widget directly into your Shopify checkout experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-md p-2">
                <Shield className="h-8 w-8 text-tariff" />
              </div>
              <div>
                <p className="font-medium">Tariff Shield Integration</p>
                <p className="text-sm text-muted-foreground">
                  {isIntegrated ? 'Active on your store' : 'Not active'}
                </p>
              </div>
            </div>
            <button
              onClick={handleToggleIntegration}
              className="focus:outline-none"
              aria-label={isIntegrated ? "Disable integration" : "Enable integration"}
            >
              {isIntegrated ? (
                <ToggleRight className="h-10 w-10 text-tariff" />
              ) : (
                <ToggleLeft className="h-10 w-10 text-gray-400" />
              )}
            </button>
          </div>

          {isIntegrated && (
            <div className="mt-6 border border-green-200 bg-green-50 rounded-md p-4">
              <div className="flex items-center text-green-700 mb-2">
                <Check className="h-5 w-5 mr-2" />
                <span className="font-medium">Integration Active</span>
              </div>
              <p className="text-sm text-green-700">
                Tariff Shield is now active on your Shopify store checkout
              </p>
            </div>
          )}

          <div className="mt-6">
            <h3 className="font-medium text-lg mb-4">Integration Steps</h3>
            <ol className="space-y-3 list-decimal pl-5">
              <li>Click on "Open Shopify Theme Setting" button below</li>
              <li>It will redirect you to Shopify Theme Setting</li>
              <li>
                Click on the "Save" button at the top right to add Tariff
                Shield to your store
              </li>
              <li>And then come back to this window</li>
            </ol>

            <div className="mt-6">
              <Button className="flex items-center">
                <span>Open Shopify Theme Setting</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Tariff Shield will not be visible on your store until you complete this step. Please complete now
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoreIntegrationSettings;
