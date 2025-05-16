
import React from 'react';
import { useTariff } from '../../../contexts/TariffContext';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';
import { Textarea } from '../../ui/textarea';
import { MessageSquare, Flag } from 'lucide-react';

const DisplaySettings = () => {
  const { settings, updateSettings } = useTariff();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="usaOnly" className="flex items-center gap-2">
            <Flag className="h-4 w-4 text-tariff" />
            USA Customers Only
          </Label>
          <p className="text-sm text-muted-foreground">
            Only show tariff protection to customers with US shipping addresses
          </p>
        </div>
        <Switch
          id="usaOnly"
          checked={settings.usaOnly}
          onCheckedChange={(checked) => updateSettings({ usaOnly: checked })}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-tariff" />
          Customer Message
        </Label>
        <Textarea
          id="message"
          value={settings.message}
          onChange={(e) => updateSettings({ message: e.target.value })}
          rows={3}
          className="resize-none"
        />
        <p className="text-sm text-muted-foreground">
          Explain to customers why they should add tariff protection
        </p>
      </div>
    </div>
  );
};

export default DisplaySettings;
