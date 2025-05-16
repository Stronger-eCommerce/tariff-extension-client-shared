
import React from 'react';
import { useTariff } from '../../../contexts/TariffContext';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { CreditCard, Percent, CircleDollarSign } from 'lucide-react';
import { Separator } from '../../ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../ui/collapsible';
import { Switch } from '../../ui/switch';

const PricingSettings = () => {
  const { settings, updateSettings } = useTariff();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Pricing Settings</h3>
      <Separator />

      {settings.autoCalculate ? (
        <div className="space-y-2">
          <Label htmlFor="percentOfGoods" className="flex items-center gap-2">
            <Percent className="h-4 w-4 text-tariff" />
            Auto-Calculate Percentage
          </Label>
          <div className="flex items-center">
            <Input
              id="percentOfGoods"
              type="number"
              step="1"
              value={settings.percentOfGoods}
              onChange={(e) => updateSettings({ percentOfGoods: parseInt(e.target.value) || 150 })}
              className="flex-1"
            />
            <span className="ml-2">%</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Tariff protection is automatically calculated as a percentage of cost of goods
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="price" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-tariff" />
            Fixed Protection Price
          </Label>
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={settings.price}
              onChange={(e) => updateSettings({ price: parseFloat(e.target.value) || 0 })}
              className="flex-1"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Set the fixed price customers will pay for tariff protection
          </p>
        </div>
      )}

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
        <CollapsibleTrigger className="text-sm text-blue-600 hover:text-blue-800">
          {isOpen ? "Hide advanced pricing options" : "Show advanced pricing options"}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Tiered Pricing</h4>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="tieredPricing" className="flex items-center gap-2">
                  <CircleDollarSign className="h-4 w-4 text-tariff" />
                  Order Value Pricing
                </Label>
                <p className="text-sm text-muted-foreground">
                  Adjust tariff cost based on order value
                </p>
              </div>
              <Switch
                id="tieredPricing"
                checked={settings.tieredPricing}
                onCheckedChange={(checked) => updateSettings({ tieredPricing: checked })}
              />
            </div>

            {settings.tieredPricing && (
              <div className="space-y-3 p-4 bg-gray-50 rounded-md">
                <div className="space-y-2">
                  <Label className="text-sm">Order Value Threshold ($)</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tier1Threshold" className="text-xs text-muted-foreground">Tier 1 Threshold</Label>
                      <Input
                        id="tier1Threshold"
                        type="number"
                        value={settings.tier1Threshold}
                        onChange={(e) => updateSettings({ tier1Threshold: parseFloat(e.target.value) || 50 })}
                        placeholder="50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tier1Price" className="text-xs text-muted-foreground">Tier 1 Price ($)</Label>
                      <Input
                        id="tier1Price"
                        type="number"
                        step="0.01"
                        value={settings.tier1Price}
                        onChange={(e) => updateSettings({ tier1Price: parseFloat(e.target.value) || 4.99 })}
                        placeholder="4.99"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label htmlFor="tier2Threshold" className="text-xs text-muted-foreground">Tier 2 Threshold</Label>
                      <Input
                        id="tier2Threshold"
                        type="number"
                        value={settings.tier2Threshold}
                        onChange={(e) => updateSettings({ tier2Threshold: parseFloat(e.target.value) || 100 })}
                        placeholder="100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tier2Price" className="text-xs text-muted-foreground">Tier 2 Price ($)</Label>
                      <Input
                        id="tier2Price"
                        type="number"
                        step="0.01"
                        value={settings.tier2Price}
                        onChange={(e) => updateSettings({ tier2Price: parseFloat(e.target.value) || 9.99 })}
                        placeholder="9.99"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label htmlFor="tier3Price" className="text-xs text-muted-foreground">Tier 3+ Price ($)</Label>
                      <Input
                        id="tier3Price"
                        type="number"
                        step="0.01"
                        value={settings.tier3Price}
                        onChange={(e) => updateSettings({ tier3Price: parseFloat(e.target.value) || 14.99 })}
                        placeholder="14.99"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Applied for orders above Tier 2 threshold</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PricingSettings;
