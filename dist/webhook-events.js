"use strict";
// ---------------------------------------------------------------------------
// Payload interfaces — one per emittable event
// ---------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEBHOOK_EVENT_LABELS = exports.WEBHOOK_EVENTS = void 0;
exports.isValidWebhookEvent = isValidWebhookEvent;
// ---------------------------------------------------------------------------
exports.WEBHOOK_EVENTS = [
    'call.started',
    'call.completed',
    'call.failed',
    'booking.created',
    'booking.link_sent',
    'booking.failed',
];
function isValidWebhookEvent(name) {
    return exports.WEBHOOK_EVENTS.includes(name);
}
exports.WEBHOOK_EVENT_LABELS = {
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
