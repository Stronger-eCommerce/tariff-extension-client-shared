import {
  Card,
  Layout,
  Page,
  Text,
  FormLayout,
  Select,
  TextField,
  Checkbox,
  Button,
  Banner,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { api } from "../../api";

export function Settings() {
  const { shop } = useGadget();
  const [calculationType, setCalculationType] = useState("percentage");
  const [percentageRate, setPercentageRate] = useState("150");
  const [fixedAmount, setFixedAmount] = useState("");
  const [enabled, setEnabled] = useState(true);
  const [usOnly, setUsOnly] = useState(true);
  const [customerMessage, setCustomerMessage] = useState(
    "Additional tariff charges may apply to your order."
  );

  const handleCalculationTypeChange = useCallback(
    (value) => setCalculationType(value),
    []
  );

  const handlePercentageRateChange = useCallback(
    (value) => setPercentageRate(value),
    []
  );

  const handleFixedAmountChange = useCallback(
    (value) => setFixedAmount(value),
    []
  );

  const handleEnabledChange = useCallback(
    (value) => setEnabled(value),
    []
  );

  const handleUsOnlyChange = useCallback(
    (value) => setUsOnly(value),
    []
  );

  const handleCustomerMessageChange = useCallback(
    (value) => setCustomerMessage(value),
    []
  );

  const handleSubmit = async () => {
    try {
      // TODO: Implement save functionality
      console.log("Saving settings...");
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <Page
      title="Tariff Settings"
      primaryAction={{
        content: "Save",
        onAction: handleSubmit,
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <FormLayout>
                <Checkbox
                  label="Enable Tariff Calculation"
                  checked={enabled}
                  onChange={handleEnabledChange}
                />

                <Select
                  label="Calculation Type"
                  options={[
                    { label: "Percentage", value: "percentage" },
                    { label: "Fixed Amount", value: "fixed" },
                    { label: "Tiered Pricing", value: "tiered" },
                  ]}
                  value={calculationType}
                  onChange={handleCalculationTypeChange}
                />

                {calculationType === "percentage" && (
                  <TextField
                    label="Percentage Rate"
                    type="number"
                    value={percentageRate}
                    onChange={handlePercentageRateChange}
                    suffix="%"
                  />
                )}

                {calculationType === "fixed" && (
                  <TextField
                    label="Fixed Amount"
                    type="number"
                    value={fixedAmount}
                    onChange={handleFixedAmountChange}
                    prefix="$"
                  />
                )}

                <Checkbox
                  label="Apply to US Customers Only"
                  checked={usOnly}
                  onChange={handleUsOnlyChange}
                />

                <TextField
                  label="Customer Message"
                  value={customerMessage}
                  onChange={handleCustomerMessageChange}
                  multiline={4}
                />
              </FormLayout>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section secondary>
          <Card>
            <Card.Section>
              <Text variant="headingMd" as="h2">
                Live Preview
              </Text>
              <div style={{ marginTop: "1rem" }}>
                <Banner status="info">
                  <p>
                    {customerMessage}
                    {calculationType === "percentage" && (
                      <strong> ({percentageRate}% tariff)</strong>
                    )}
                    {calculationType === "fixed" && (
                      <strong> (${fixedAmount} tariff)</strong>
                    )}
                  </p>
                </Banner>
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
} 