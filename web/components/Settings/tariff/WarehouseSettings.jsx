
import React from 'react';
import { useTariff } from '../../../contexts/TariffContext';
import { Label } from '../../ui/label';
import { Switch } from '../../ui/switch';
import { Checkbox } from '../../ui/checkbox';
import { Warehouse } from 'lucide-react';

// Available warehouses for the store
const availableWarehouses = [
  { id: 'us-east', name: 'US East (New York)' },
  { id: 'us-west', name: 'US West (Los Angeles)' },
  { id: 'eu-central', name: 'EU Central (Germany)' },
  { id: 'asia-east', name: 'Asia East (Hong Kong)' },
  { id: 'canada', name: 'Canada (Toronto)' },
];

const WarehouseSettings = () => {
  const { settings, updateSettings } = useTariff();

  const toggleWarehouseSelection = (warehouseId) => {
    const isSelected = settings.selectedWarehouses.includes(warehouseId);
    let newSelectedWarehouses = [...settings.selectedWarehouses];

    if (isSelected) {
      newSelectedWarehouses = newSelectedWarehouses.filter(id => id !== warehouseId);
    } else {
      newSelectedWarehouses.push(warehouseId);
    }

    updateSettings({ selectedWarehouses: newSelectedWarehouses });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="warehouseRestricted" className="flex items-center gap-2">
            <Warehouse className="h-4 w-4 text-tariff" />
            Warehouse Restriction
          </Label>
          <p className="text-sm text-muted-foreground">
            Only show tariff protection for items shipped from specific warehouses
          </p>
        </div>
        <Switch
          id="warehouseRestricted"
          checked={settings.warehouseRestricted}
          onCheckedChange={(checked) => updateSettings({ warehouseRestricted: checked })}
        />
      </div>

      {settings.warehouseRestricted && (
        <div className="space-y-3 p-4 bg-gray-50 rounded-md mt-4">
          <Label className="text-sm font-medium">Select eligible warehouses:</Label>
          <p className="text-xs text-muted-foreground mb-2">
            Tariff protection will only show for items from these warehouses
          </p>
          <div className="space-y-2">
            {availableWarehouses.map((warehouse) => (
              <div key={warehouse.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`warehouse-${warehouse.id}`}
                  checked={settings.selectedWarehouses.includes(warehouse.id)}
                  onCheckedChange={() => toggleWarehouseSelection(warehouse.id)}
                />
                <Label
                  htmlFor={`warehouse-${warehouse.id}`}
                  className="text-sm font-normal"
                >
                  {warehouse.name}
                </Label>
              </div>
            ))}
          </div>

          {settings.selectedWarehouses.length === 0 &&
            <p className="text-sm text-amber-600">
              Warning: No warehouses selected. Tariff protection will not be shown.
            </p>
          }
        </div>
      )}
    </div>
  );
};

export default WarehouseSettings;
