import {
  reactExtension,
  BlockStack,
  Text,
  Checkbox,
  useSettings,
  useApplyAttributeChange,
} from "@shopify/checkout-ui-extensions-react";
import { useState } from "react";

export default reactExtension("Checkout::Dynamic::Render", () => <TariffProtectionBlock />);

function TariffProtectionBlock() {
  const settings = useSettings();
  const { applyAttributeChange } = useApplyAttributeChange();

  const [enabled, setEnabled] = useState(false);

  const price = settings?.tariffPrice || 10.99;
  const message =
    settings?.tariffMessage ||
    "Prepay your tariffs now to avoid unexpected charges and delays at customs. Guaranteed hassle-free delivery.";

  const handleToggle = async (checked) => {
    setEnabled(checked);
    await applyAttributeChange({
      key: "tariff_protection",
      type: "updateAttribute",
      value: checked ? "enabled" : "disabled",
    });
  };

  return (
    <BlockStack
      border="base"
      borderColor="critical"
      background="criticalSubdued"
      borderRadius="large"
      padding="base"
      spacing="tight"
    >
      <BlockStack spacing="none" inlineAlignment="center">
        <Text size="medium" emphasis="bold" appearance="critical">
          Tariff protection (${price})
        </Text>
        <Checkbox
          checked={enabled}
          onChange={handleToggle}
          accessibilityLabel="Enable tariff protection"
        />
      </BlockStack>
      <Text size="small" appearance="subdued">
        {message}
      </Text>
    </BlockStack>
  );

}