/**
 * Provider-agnostic summary of a saved payment method (card).
 * Shared between admin dashboard and partner portal so both surfaces
 * use the same shape without depending on the engine's internal types.
 */
export type PaymentMethodSummary = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  isDefault: boolean;
};
