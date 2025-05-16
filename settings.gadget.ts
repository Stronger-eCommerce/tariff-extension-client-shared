import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.3.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2025-04",
        enabledModels: [
          "shopifyCheckout",
          "shopifyCustomer",
          "shopifyLocation",
          "shopifyOrder",
          "shopifyProduct",
          "shopifyProductVariant",
        ],
        type: "partner",
        scopes: [
          "read_orders",
          "read_customers",
          "read_products",
          "read_shipping",
          "write_checkouts",
          "write_orders",
          "read_locations",
          "read_inventory",
          "read_checkouts",
        ],
      },
    },
  },
};
