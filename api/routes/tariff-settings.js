import { api } from "../api";

export default async function run({ params, context }) {
  const { action } = params;

  switch (action) {
    case "get":
      const settings = await api.tariffSettings.findFirst();
      return {
        success: true,
        settings: settings || {
          price: "10.99",
          message: "Prepay your tariffs now to avoid unexpected charges and delays at customs. Guaranteed hassle-free delivery."
        }
      };

    case "update":
      const { price, message } = params;
      const updatedSettings = await api.tariffSettings.update({
        id: (await api.tariffSettings.findFirst())?.id,
        data: {
          price: price,
          message: message
        }
      });
      return {
        success: true,
        settings: updatedSettings
      };

    default:
      return {
        success: false,
        error: "Invalid action"
      };
  }
} 