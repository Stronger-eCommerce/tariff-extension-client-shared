import { api } from "../api";

export async function run(params) {
  const {
    orderValue,
    calculationType,
    percentageRate,
    fixedAmount,
    pricingTiers,
    warehouseId,
    customerCountry,
    applyToUSCustomersOnly,
  } = params;

  if (applyToUSCustomersOnly && customerCountry !== "US") {
    return {
      amount: 0,
      message: "No tariff applies to your country.",
    };
  }

  if (warehouseId) {
    const warehouseRule = await api.tariffConfiguration.findFirst({
      filter: {
        warehouseRules: {
          warehouseId: { equals: warehouseId },
          applyTariff: { equals: false }
        }
      }
    });

    if (warehouseRule) {
      return {
        amount: 0,
        message: "No tariff applies to this warehouse.",
      };
    }
  }

  let tariffAmount = 0;

  switch (calculationType) {
    case "percentage":
      tariffAmount = (orderValue * percentageRate) / 100;
      break;

    case "fixed":
      tariffAmount = fixedAmount;
      break;

    case "tiered":
      if (pricingTiers && pricingTiers.length > 0) {
        const applicableTier = pricingTiers.find(
          (tier) =>
            orderValue >= tier.minOrderValue &&
            (!tier.maxOrderValue || orderValue <= tier.maxOrderValue)
        );
        if (applicableTier) {
          tariffAmount = applicableTier.tariffAmount;
        }
      }
      break;

    default:
      tariffAmount = 0;
  }

  return {
    amount: tariffAmount,
    message: `Tariff charge: $${tariffAmount.toFixed(2)}`,
  };
} 