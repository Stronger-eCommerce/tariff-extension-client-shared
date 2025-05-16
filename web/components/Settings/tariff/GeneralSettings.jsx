
import React from 'react';
import { useTariff } from '../../../contexts/TariffContext';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';
import { Calculator } from 'lucide-react';

const GeneralSettings = () => {
  const { settings, updateSettings } = useTariff();

  const handleAutoCalculateToggle = (checked) => {
    updateSettings({
      autoCalculate: checked,
      price: checked ? 0 : 10.99 // Reset price to default when auto-calculate is enabled
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="enabled">Enable Tariff Protection</Label>
          <p className="text-sm text-muted-foreground">
            Toggle to enable or disable tariff protection on your store
          </p>
        </div>
        <Switch
          id="enabled"
          checked={settings.enabled}
          onCheckedChange={(checked) => updateSettings({ enabled: checked })}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="autoCalculate" className="flex items-center gap-2">
            <Calculator className="h-4 w-4 text-tariff" />
            Auto-Calculate Tariffs
          </Label>
          <p className="text-sm text-muted-foreground">
            Automatically calculate tariffs as 150% of cost of goods
          </p>
        </div>
        <Switch
          id="autoCalculate"
          checked={settings.autoCalculate}
          onCheckedChange={handleAutoCalculateToggle}
        />
      </div>
    </div>
  );
};

export default GeneralSettings;
