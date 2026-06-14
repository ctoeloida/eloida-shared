"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISPOSITION_DESCRIPTIONS = exports.DISPOSITION_LABELS = exports.DISPOSITION_ORDER = void 0;
// Fixed display order, best→worst, for UI rendering
exports.DISPOSITION_ORDER = [
    'booked',
    'booking_link_sent',
    'booking_failed',
    'transferred',
    'info_only',
    'dropped',
    'abandoned',
    'spam',
    'error',
];
exports.DISPOSITION_LABELS = {
    booked: 'Booked',
    booking_link_sent: 'Link sent',
    booking_failed: 'Booking failed',
    transferred: 'Transferred',
    info_only: 'Info only',
    dropped: 'Dropped',
    abandoned: 'Abandoned',
    spam: 'Spam',
    error: 'Error',
};
exports.DISPOSITION_DESCRIPTIONS = {
    booked: 'Appointment confirmed via direct API booking.',
    booking_link_sent: 'Booking link sent to caller via SMS.',
    booking_failed: 'Booking attempted but did not complete.',
    transferred: 'Call escalated to a human.',
    info_only: 'Caller got their answer; no booking intent.',
    dropped: 'Caller engaged then hung up mid-call without resolution.',
    abandoned: 'Caller hung up before any real exchange.',
    spam: 'Identified as robocall, silence, or known spam pattern.',
    error: 'Engine failure during the call.',
};
