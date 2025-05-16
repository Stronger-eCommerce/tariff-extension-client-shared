import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import TariffSettings from '../components/settings/TariffSettings';
import StoreIntegrationSettings from '../components/settings/StoreIntegrationSettings';
import TariffCheckoutPreview from '../components/checkout/TariffCheckoutPreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Shield, Store } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Settings = () => {
  return (
    <PageLayout title="Settings">
      <Tabs defaultValue="tariff" className="w-full">
        <div className="mb-8">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2">
            <TabsTrigger value="tariff" className="flex items-center">
              <Shield className="mr-2 h-4 w-4" />
              Tariff Protection
            </TabsTrigger>
            <TabsTrigger value="store" className="flex items-center">
              <Store className="mr-2 h-4 w-4" />
              Store Integration
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="tariff" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TariffSettings hideButtons={false} />
            </div>
            <div>
              <Card className="sticky top-4">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                  <div className="bg-white rounded-lg">
                    <TariffCheckoutPreview />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    This preview shows how tariff protection will appear to your customers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="store" className="mt-0">
          <StoreIntegrationSettings />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Settings;
