// ---------------------------------------------------------------------------
// Payload interfaces — one per emittable event
// ---------------------------------------------------------------------------

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

// Same shape as CallCompletedPayload; the event name pins the semantics to an error disposition.
export type CallFailedPayload = CallCompletedPayload;

export type BookingCreatedPayload = {
  call: { sid: string };
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
  call: { sid: string };
  booking: {
    link: string;
    customer_phone: string;
    sent_via: 'sms';
    appointment_type?: string;
  };
};

export type BookingFailedPayload = {
  call: { sid: string };
  booking: {
    reason: string;
    failure_reason?: { code: string; message: string } | null;
    appointment_type?: string;
    requested_time?: string;
  };
};

// ---------------------------------------------------------------------------

export const WEBHOOK_EVENTS = [
  'call.started',
  'call.completed',
  'call.failed',
  'booking.created',
  'booking.link_sent',
  'booking.failed',
] as const;

export type WebhookEventName = typeof WEBHOOK_EVENTS[number];

export function isValidWebhookEvent(name: string): name is WebhookEventName {
  return (WEBHOOK_EVENTS as readonly string[]).includes(name);
}

export const WEBHOOK_EVENT_LABELS: Record<WebhookEventName, { label: string; description: string }> = {
  'call.started': {
    label: 'Call started',
    description: 'Fires when the inbound call is answered and the session begins.',
  },
  'call.completed': {
    label: 'Call completed',
    description: 'Fires when a call ends normally and post-call processing has finished.',
  },
  'call.failed': {
    label: 'Call failed',
    description: 'Fires when a call ends due to a session or pipeline error.',
  },
  'booking.created': {
    label: 'Booking created',
    description: 'Fires when a calendar appointment is successfully confirmed.',
  },
  'booking.link_sent': {
    label: 'Booking link sent',
    description: 'Fires when a self-serve booking link is sent to the caller instead of a direct booking.',
  },
  'booking.failed': {
    label: 'Booking failed',
    description: 'Fires when the booking flow is attempted but cannot be completed.',
  },
};
