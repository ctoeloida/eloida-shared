export type ServiceStatus = 'shipped' | 'beta' | 'not_built';
export type PlatformService = {
    slug: string;
    label: string;
    status: ServiceStatus;
    description: string;
};
export declare const PLATFORM_SERVICES: PlatformService[];
export declare const SERVICE_SLUGS: string[];
export declare const SHIPPED_SERVICES: PlatformService[];
//# sourceMappingURL=platform-services.d.ts.map