import { Card, Layout, Page, Text, Accordion } from "@shopify/polaris";
import { useState, useCallback } from "react";

export function Help() {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleExpansion = useCallback(
    (expandedItems) => {
      setExpandedItems(expandedItems);
    },
    []
  );

  const faqs = [
    {
      id: "what-is-tariff-guard",
      title: "What is Tariff Guard?",
      content:
        "Tariff Guard is a Shopify app that helps you automatically calculate and display tariff charges to your customers based on their location and order value. It helps you comply with international trade regulations and provides transparency to your customers.",
    },
    {
      id: "how-to-setup",
      title: "How do I set up Tariff Guard?",
      content:
        "Setting up Tariff Guard is easy! Just follow these steps:\n1. Install the app from the Shopify App Store\n2. Go to the Settings page\n3. Configure your tariff calculation method (percentage or fixed amount)\n4. Set your customer message\n5. Enable the app and you're done!",
    },
    {
      id: "calculation-methods",
      title: "What calculation methods are available?",
      content:
        "Tariff Guard offers three calculation methods:\n1. Percentage-based: Calculate tariffs as a percentage of the order value\n2. Fixed amount: Apply a fixed tariff amount to all qualifying orders\n3. Tiered pricing: Set different tariff amounts based on order value ranges",
    },
    {
      id: "warehouse-rules",
      title: "How do warehouse rules work?",
      content:
        "Warehouse rules allow you to apply tariffs only to orders shipped from specific warehouses. For example, you can set tariffs to apply only to orders from your China warehouse, while orders from your US warehouse remain tariff-free.",
    },
    {
      id: "customer-visibility",
      title: "When do customers see the tariff charges?",
      content:
        "Tariff charges are displayed to customers in their shopping cart before checkout. The charges are clearly labeled and explained through your custom message, ensuring transparency in the pricing.",
    },
  ];

  return (
    <Page title="Help & Support">
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <Text variant="headingMd" as="h2">
                Frequently Asked Questions
              </Text>
              <div style={{ marginTop: "1rem" }}>
                <Accordion
                  items={faqs.map((faq) => ({
                    id: faq.id,
                    content: faq.content,
                    title: faq.title,
                  }))}
                  expandedItems={expandedItems}
                  onExpansionChange={handleExpansion}
                />
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section secondary>
          <Card>
            <Card.Section>
              <Text variant="headingMd" as="h2">
                Need More Help?
              </Text>
              <Text variant="bodyMd" as="p">
                If you need additional support, please contact our support team at:
                <br />
                <a href="mailto:support@tariffguard.com">support@tariffguard.com</a>
              </Text>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
} 