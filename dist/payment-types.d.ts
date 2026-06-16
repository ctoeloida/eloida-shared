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
/**
 * Provider-agnostic invoice summary.
 * currency is intentionally string (uppercase ISO-4217) — consumers narrow to
 * their own Currency union as needed.
 */
export type InvoiceSummary = {
    id: string;
    number: string | null;
    amount_due: number;
    amount_paid: number;
    currency: string;
    status: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';
    created: number;
    due_date: number | null;
    period_start: number;
    period_end: number;
    hosted_invoice_url: string | null;
    invoice_pdf: string | null;
};
//# sourceMappingURL=payment-types.d.ts.map