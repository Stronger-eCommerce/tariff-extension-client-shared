import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Shield, ArrowRightCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout';
import Stats from '../components/dashboard/stats';
import TariffCheckoutPreview from '../components/checkout/TariffCheckoutPreview';
export default function Dashboard() {
  return (
    <PageLayout title="Dashboard">
      <Card className="mb-8 bg-tariff-light border-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-tariff-dark mb-2">Welcome to Tariff Shield</h2>
              <p className="text-gray-600 max-w-2xl">
                Protect Your business from tariff charges.<br />
                Click to set up Tariff Shield
              </p>
            </div>
            <Button asChild className="bg-tariff hover:bg-tariff-dark">
              <Link to="/settings">
                <span>Set Up Tariff Shield</span>
                <ArrowRightCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Stats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-tariff" />
                <span>Tariff Protection Preview</span>
              </CardTitle>
              <CardDescription>
                This is how tariff protection will appear in your Shopify checkout
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TariffCheckoutPreview />
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="recent">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Orders</CardTitle>
                  <TabsList>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="protected">Protected</TabsTrigger>
                  </TabsList>
                </div>
                <CardDescription>
                  Recent orders with tariff protection status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TabsContent value="recent" className="mt-0">
                  {/* Placeholder for recent orders */}
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">{`Order #10${i}${i + 2}${i + 4}`}</p>
                          <p className="text-sm text-gray-500">{`April ${10 + i}, 2025`}</p>
                        </div>
                        <div className="flex items-center">
                          <span className={`px-2 py-1 rounded-full text-xs ${i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {i % 2 === 0 ? 'Protected' : 'No Protection'}
                          </span>
                          <span className="ml-4 font-medium">${(99.99 + i * 10).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="protected" className="mt-0">
                  {/* Placeholder for protected orders */}
                  <div className="space-y-4">
                    {[2, 4].map((i) => (
                      <div key={i} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">{`Order #10${i}${i + 2}${i + 4}`}</p>
                          <p className="text-sm text-gray-500">{`April ${10 + i}, 2025`}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            Protected
                          </span>
                          <span className="ml-4 font-medium">${(99.99 + i * 10).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}