import { Card, Layout, Page, Text, LegacyCard, Button } from "@shopify/polaris";
import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { api } from "../../api";

export function Dashboard() {
  const { shop } = useGadget();

  return (
    <Page
      title="Tariff Guard Dashboard"
      primaryAction={{
        content: "Configure Settings",
        onAction: () => {},
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <Text variant="headingMd" as="h2">
              Welcome to Tariff Guard
            </Text>
            <Text variant="bodyMd" as="p">
              Configure your tariff settings to automatically calculate and display charges to your customers.
            </Text>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <LegacyCard title="Active Tariffs" sectioned>
            <Text variant="headingLg" as="h2">
              0
            </Text>
            <Text variant="bodyMd" as="p">
              Configured tariff rules
            </Text>
          </LegacyCard>
        </Layout.Section>

        <Layout.Section oneThird>
          <LegacyCard title="Total Revenue" sectioned>
            <Text variant="headingLg" as="h2">
              $0.00
            </Text>
            <Text variant="bodyMd" as="p">
              From tariff charges
            </Text>
          </LegacyCard>
        </Layout.Section>

        <Layout.Section oneThird>
          <LegacyCard title="Orders with Tariffs" sectioned>
            <Text variant="headingLg" as="h2">
              0
            </Text>
            <Text variant="bodyMd" as="p">
              Processed orders
            </Text>
          </LegacyCard>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <Text variant="headingMd" as="h2">
              Quick Actions
            </Text>
            <div style={{ marginTop: "1rem" }}>
              <Button primary>Configure Tariffs</Button>
              <Button style={{ marginLeft: "1rem" }}>View Reports</Button>
              <Button style={{ marginLeft: "1rem" }}>Help & Support</Button>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
} 