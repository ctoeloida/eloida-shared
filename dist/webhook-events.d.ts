export type CallStartedPayload = {
    call: {
        sid: string;
        caller_number: string;
        started_at: string;
    };
};
export type CallCompletedPayload = {
    call: {
        sid: string;
        caller_number: string;
        started_at: string;
        ended_at: string;
        duration_seconds: number;
    };
    disposition: string;
    summary: {
        caller_intent: string;
        outcome: string;
        key_points: string[];
        follow_up_required: boolean;
        sentiment: string;
    } | null;
    transcript: Array<{
        role: string;
        content: string;
        timestamp: string;
    }>;
};
export type CallFailedPayload = CallCompletedPayload;
export type BookingCreatedPayload = {
    call: {
        sid: string;
    };
    booking: {
        appointment_type?: string;
        start_time: string;
        end_time: string | null;
        customer_name: string;
        customer_phone: string;
        customer_email?: string;
        provider: string;
        external_id: string | null;
    };
};
export type BookingLinkSentPayload = {
    call: {
        sid: string;
    };
    booking: {
        link: string;
        customer_phone: string;
        sent_via: 'sms';
        appointment_type?: string;
    };
};
export type BookingFailedPayload = {
    call: {
        sid: string;
    };
    booking: {
        reason: string;
        failure_reason?: {
            code: string;
            message: string;
        } | null;
        appointment_type?: string;
        requested_time?: string;
    };
};
export declare const WEBHOOK_EVENTS: readonly ["call.started", "call.completed", "call.failed", "booking.created", "booking.link_sent", "booking.failed"];
export type WebhookEventName = typeof WEBHOOK_EVENTS[number];
export declare function isValidWebhookEvent(name: string): name is WebhookEventName;
export declare const WEBHOOK_EVENT_LABELS: Record<WebhookEventName, {
    label: string;
    description: string;
}>;
//# sourceMappingURL=webhook-events.d.ts.map