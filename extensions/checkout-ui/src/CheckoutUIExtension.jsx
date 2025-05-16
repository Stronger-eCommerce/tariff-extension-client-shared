import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  useApi,
  useShippingAddress,
  useCart,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';
import { useEffect, useState } from 'react';

export default reactExtension(
  "purchase.checkout.cart-line-list.render-after",
  () => <TariffBanner />
);

function TariffBanner() {
  const translate = useTranslate();
  const { extension } = useApi();
  const shippingAddress = useShippingAddress();
  const cart = useCart();
  const [tariffInfo, setTariffInfo] = useState(null);

  useEffect(() => {
    async function calculateTariff() {
      try {
        const response = await fetch("/api/calculate-tariff", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderValue: cart.totalPrice.amount,
            customerCountry: shippingAddress?.countryCode,
          }),
        });

        const data = await response.json();
        setTariffInfo(data);
      } catch (error) {
        console.error("Error calculating tariff:", error);
      }
    }

    if (cart.totalPrice.amount > 0) {
      calculateTariff();
    }
  }, [cart.totalPrice.amount, shippingAddress?.countryCode]);

  if (!tariffInfo || tariffInfo.amount === 0) {
    return null;
  }

  return (
    <BlockStack>
      <Banner status="info">
        <Text>
          {tariffInfo.message}
        </Text>
      </Banner>
    </BlockStack>
  );
} 