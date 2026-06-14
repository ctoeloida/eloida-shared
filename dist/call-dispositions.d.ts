export type Disposition = 'booked' | 'booking_link_sent' | 'booking_failed' | 'info_only' | 'transferred' | 'dropped' | 'abandoned' | 'spam' | 'error';
export declare const DISPOSITION_ORDER: Disposition[];
export declare const DISPOSITION_LABELS: Record<Disposition, string>;
export declare const DISPOSITION_DESCRIPTIONS: Record<Disposition, string>;
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
//# sourceMappingURL=call-dispositions.d.ts.map