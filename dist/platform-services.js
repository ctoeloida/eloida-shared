"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHIPPED_SERVICES = exports.SERVICE_SLUGS = exports.PLATFORM_SERVICES = void 0;
exports.PLATFORM_SERVICES = [
    {
        slug: 'faq_answering',
        label: 'FAQ Answering',
        status: 'shipped',
        description: 'AI answers questions using the tenant knowledge base.',
    },
    {
        slug: 'appointment_booking',
        label: 'Appointment Booking',
        status: 'shipped',
        description: 'AI books appointments via the connected calendar.',
    },
    {
        slug: 'outbound_campaigns',
        label: 'Outbound Campaigns',
        status: 'not_built',
        description: 'AI-driven outbound calling campaigns. Coming soon.',
    },
    {
        slug: 'order_taking',
        label: 'Order Taking',
        status: 'not_built',
        description: 'AI takes structured orders. Coming soon.',
    },
    {
        slug: 'tech_support',
        label: 'Technical Support',
        status: 'not_built',
        description: 'AI handles tier-1 technical support. Coming soon.',
    },
    {
        slug: 'operations_support',
        label: 'Operations Support',
        status: 'not_built',
        description: 'AI handles operational queries (status, account, billing). Coming soon.',
    },
];
exports.SERVICE_SLUGS = exports.PLATFORM_SERVICES.map((s) => s.slug);
exports.SHIPPED_SERVICES = exports.PLATFORM_SERVICES.filter((s) => s.status === 'shipped');
