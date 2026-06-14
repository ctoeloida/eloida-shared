export type Disposition =
  | 'booked'
  | 'booking_link_sent'
  | 'booking_failed'
  | 'info_only'
  | 'transferred'
  | 'dropped'
  | 'abandoned'
  | 'spam'
  | 'error';

// Fixed display order, best→worst, for UI rendering
export const DISPOSITION_ORDER: Disposition[] = [
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

export const DISPOSITION_LABELS: Record<Disposition, string> = {
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

export const DISPOSITION_DESCRIPTIONS: Record<Disposition, string> = {
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

export type DispositionBreakdown = {
  total: number;
  counts: Record<Disposition, number>;
  nullCount: number;
  funnel: {
    total: number;
    engaged: number;
    bookingIntent: number;
    converted: number;
  };
};
