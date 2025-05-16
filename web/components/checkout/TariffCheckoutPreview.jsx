import React from 'react';
import { Shield } from 'lucide-react';
import { useTariff } from '../../contexts/TariffContext';
import { Switch } from '../ui/switch';
import { Card, CardContent } from '../ui/card';

const TariffCheckoutPreview = () => {
    const { settings } = useTariff();

    return (
        <Card className="shadow-lg border-gray-200 max-w-md mx-auto">
            <CardContent className="p-0">
                <div className="p-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900">Your cart</h3>
                </div>

                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">PRODUCT</span>
                        <span className="font-medium text-gray-700">TOTAL</span>
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-100">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-200 rounded"></div>
                            <div>
                                <p className="font-medium">Please click Add to Cart to see the App effect</p>
                                <p className="text-gray-600">$99.99</p>
                            </div>
                        </div>
                        <p className="font-medium">$99.99</p>
                    </div>
                </div>

                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-medium">Estimated total</span>
                        <span className="text-xl font-medium">$99.99 USD</span>
                    </div>
                    <p className="text-gray-600 text-sm">Taxes, discounts and shipping calculated at checkout</p>
                </div>

                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Shield className="h-12 w-12 text-tariff" />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <p className="font-medium">Tariff protection (${settings.price.toFixed(2)})</p>
                                    <Switch checked={settings.enabled} />
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{settings.message}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <button className="w-full bg-black text-white py-4 rounded font-medium">
                        Check out
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default TariffCheckoutPreview;
