export interface Link {
    rel: string;
    href: string;
}

export interface PointOfContact {
    fax: string | null;
    type: string;
    email: string;
    phone: string | null;
    title: string | null;
    fullName: string;
}

export interface OfficeAddress {
    zipcode: string;
    city: string;
    countryCode: string;
    state: string;
    streetAddress?: string;
    streetAddress2?: string;
}

export interface PlaceOfPerformance {
    country?: {
        code?: string;
        name?: string;
    };
    city?: {
        code?: string;
        name?: string;
    };
    state?: {
        code?: string;
        name?: string;
    };
    streetAddress?: string;
    streetAddress2?: string;
    zip?: string;
}

export interface OpportunitiesData {
    noticeId: string;
    title: string;
    solicitationNumber: string;
    fullParentPathName: string;
    fullParentPathCode: string;
    postedDate: string;
    type: string;
    baseType: string;
    archiveType: string;
    archiveDate: string;
    typeOfSetAsideDescription: string | null;
    typeOfSetAside: string | null;
    responseDeadLine: string;
    naicsCode: string;
    naicsCodes: string[];
    classificationCode: string;
    active: string;
    award: any | null;
    pointOfContact: PointOfContact[];
    description: string;
    organizationType: string;
    officeAddress: OfficeAddress;
    placeOfPerformance: PlaceOfPerformance |null ;
    additionalInfoLink: string | null;
    uiLink: string;
    links: Link[];
    resourceLinks: string[] | null;
}

export interface DataTy {
    totalRecords: number;
    limit: number;
    offset: number;
    opportunitiesData: OpportunitiesData[];
    links: Link[];
}


