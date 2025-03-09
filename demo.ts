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

export interface Data {
    totalRecords: number;
    limit: number;
    offset: number;
    opportunitiesData: OpportunitiesData[];
    links: Link[];
}


export const Data:Data[] = [
{
    "totalRecords": 10,
    "limit": 10,
    "offset": 0,
    "opportunitiesData": [
        {
            "noticeId": "622ed92c64644dc6b84bf0883bc13733",
            "title": "Force Protection Detachment Critical Skills Course High Risk Driving, Advanced Shooting, and Tactical Casualty Care",
            "solicitationNumber": "W912CL25Q0004A",
            "fullParentPathName": "DEPT OF DEFENSE.DEPT OF THE ARMY.AMC.ACC.ACC-OO.410TH CSB.0410 AQ HQ     CONTRACT",
            "fullParentPathCode": "021.2100.AMC.ACC.ACC-OO.410TH CSB.W912CL",
            "postedDate": "2025-03-07",
            "type": "Solicitation",
            "baseType": "Solicitation",
            "archiveType": "auto15",
            "archiveDate": "2025-03-29",
            "typeOfSetAsideDescription": "Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14)",
            "typeOfSetAside": "SDVOSBC",
            "responseDeadLine": "2025-03-14T14:00:00-05:00",
            "naicsCode": "611430",
            "naicsCodes": [
                "611430"
            ],
            "classificationCode": "U014",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "erika.g.barrera.civ@army.mil",
                    "phone": "2108089011",
                    "title": null,
                    "fullName": "Ms. Erika G. Barrera"
                },
                {
                    "fax": "",
                    "type": "secondary",
                    "email": "Craig.D.Dogger.civ@army.mil",
                    "phone": "2102957165",
                    "title": null,
                    "fullName": "Craig Dogger"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=622ed92c64644dc6b84bf0883bc13733",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "78234-5046",
                "city": "FORT SAM HOUSTON",
                "countryCode": "USA",
                "state": "TX"
            },
            "placeOfPerformance": {
                "country": {
                    "code": "USA",
                    "name": "UNITED STATES"
                }
            },
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/622ed92c64644dc6b84bf0883bc13733/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=622ed92c64644dc6b84bf0883bc13733&limit=1"
                }
            ],
            "resourceLinks": [
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/08a6a2717572496ab499e577e7ad81d2/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/136a387360ba42d2a2b86ef782887f88/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/889fa1bd08ae48e6b4733697de5ef300/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/cd0fc2e83541419db66b7d55500a7f14/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/ee72bfeeda334e6b9658f32fc74338ae/download"
            ]
        },
        {
            "noticeId": "2218c90d22384dc0b6992c66faa672b7",
            "title": "Impaired Driving Countermeasures Technical Assistance",
            "solicitationNumber": "693JJ925RQ000178",
            "fullParentPathName": "TRANSPORTATION, DEPARTMENT OF.NATIONAL HIGHWAY TRAFFIC SAFETY ADMINISTRATION.693JJ9 NHTSA OFFICE OF ACQUISTION",
            "fullParentPathCode": "069.6940.693JJ9",
            "postedDate": "2025-03-05",
            "type": "Sources Sought",
            "baseType": "Sources Sought",
            "archiveType": "auto15",
            "archiveDate": "2025-03-31",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2025-03-16T23:59:00-04:00",
            "naicsCode": "541611",
            "naicsCodes": [
                "541611"
            ],
            "classificationCode": "R499",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "michelle.shanahan@dot.gov",
                    "phone": "2023666715",
                    "title": null,
                    "fullName": "Michelle Shanahan"
                },
                {
                    "fax": "",
                    "type": "secondary",
                    "email": "Vincent.Lynch@dot.gov",
                    "phone": "2023669568",
                    "title": null,
                    "fullName": "Vincent Lynch"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=2218c90d22384dc0b6992c66faa672b7",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "20590",
                "city": "WASHINGTON",
                "countryCode": "USA",
                "state": "DC"
            },
            "placeOfPerformance": {
                "city": {
                    "code": "50000",
                    "name": "Washington"
                },
                "state": {
                    "code": "DC",
                    "name": "District of Columbia"
                },
                "zip": "20590",
                "country": {
                    "code": "USA",
                    "name": "UNITED STATES"
                }
            },
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/2218c90d22384dc0b6992c66faa672b7/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=2218c90d22384dc0b6992c66faa672b7&limit=1"
                }
            ],
            "resourceLinks": [
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/327023a13998413194d2365ee2bc89bc/download"
            ]
        },
        {
            "noticeId": "573836bf8e7d47dc9b6c22ce80f601fe",
            "title": "Axle, Differential, Driving",
            "solicitationNumber": "SPRDL125R0001",
            "fullParentPathName": "DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA LAND.DLA LAND WARREN MICHIGAN.DLA LAND WARREN",
            "fullParentPathCode": "097.97AS.DLA LAND.DLA LAND WARREN MI.SPRDL1",
            "postedDate": "2025-02-18",
            "type": "Solicitation",
            "baseType": "Solicitation",
            "archiveType": "autocustom",
            "archiveDate": "2025-07-31",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2025-03-17T23:59:00-04:00",
            "naicsCode": "336350",
            "naicsCodes": [
                "336350"
            ],
            "classificationCode": "2520",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "patricia.roussin@dla.mil",
                    "phone": "5864671174",
                    "title": null,
                    "fullName": "Patricia M. Roussin"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=573836bf8e7d47dc9b6c22ce80f601fe",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "48397",
                "city": "WARREN",
                "countryCode": "USA",
                "state": "MI"
            },
            "placeOfPerformance": {},
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/573836bf8e7d47dc9b6c22ce80f601fe/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=573836bf8e7d47dc9b6c22ce80f601fe&limit=1"
                }
            ],
            "resourceLinks": [
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/47e49a9e47014b268fbcd8a0872aae2f/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/7ef31904ec5a4447b3749dc010ba9cef/download"
            ]
        },
        {
            "noticeId": "683ec3dbadce44a0b5c81a09539dedf4",
            "title": "Differentials, Driving Axle",
            "solicitationNumber": "SPRDL1-24-R-0156",
            "fullParentPathName": "DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA LAND.DLA LAND WARREN MICHIGAN.DLA LAND WARREN",
            "fullParentPathCode": "097.97AS.DLA LAND.DLA LAND WARREN MI.SPRDL1",
            "postedDate": "2025-02-13",
            "type": "Solicitation",
            "baseType": "Solicitation",
            "archiveType": "autocustom",
            "archiveDate": "2025-07-31",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2025-03-03T15:00:00-05:00",
            "naicsCode": "336350",
            "naicsCodes": [
                "336350"
            ],
            "classificationCode": "2520",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "Stephen.Granch@dla.mil",
                    "phone": "5864671244",
                    "title": null,
                    "fullName": "Stephen Granch"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=683ec3dbadce44a0b5c81a09539dedf4",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "48397",
                "city": "WARREN",
                "countryCode": "USA",
                "state": "MI"
            },
            "placeOfPerformance": {
                "city": {
                    "code": "84000",
                    "name": "Warren"
                },
                "state": {
                    "code": "MI",
                    "name": "Michigan"
                },
                "country": {
                    "code": "USA",
                    "name": "UNITED STATES"
                }
            },
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/683ec3dbadce44a0b5c81a09539dedf4/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=683ec3dbadce44a0b5c81a09539dedf4&limit=1"
                }
            ],
            "resourceLinks": [
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/1594bf5e0d524054a8e7eb1e13ead0fc/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/15a289a99f8c4373af49439932eb8841/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/19e260fe5cfd470fa5d3fd278d8b6cbe/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/25cfd194640b493ea2d3e5f5b21a911b/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/466a992ab3374f1e92b3818b6c514018/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/7d8a302738ad4b00b8e33102d3696f04/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/85af5c4390544d0d9fbb1f30ad9d4972/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/a04999ec42c84762a2e4253f3250c4e5/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/b409f609c90d4a7d9c4dc2ca244008b3/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/d5a63975b3c9410bb4824e18a445ba81/download"
            ]
        },
        {
            "noticeId": "dec4e660f6974b00858ccdeecddae18d",
            "title": "25--PARTS KIT,DRIVING A",
            "solicitationNumber": "SPE7LX25U3807",
            "fullParentPathName": "DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA LAND.DLA LAND COLUMBUS.DLA LAND AND MARITIME",
            "fullParentPathCode": "097.97AS.DLA LAND.DLA LAND COLUMBUS.SPE7LX",
            "postedDate": "2025-02-09",
            "type": "Combined Synopsis/Solicitation",
            "baseType": "Combined Synopsis/Solicitation",
            "archiveType": "autocustom",
            "archiveDate": "2025-03-26",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2025-02-24",
            "naicsCode": "336350",
            "naicsCodes": [
                "336350"
            ],
            "classificationCode": "25",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": null,
                    "type": "primary",
                    "email": "DibbsBSM@dla.mil",
                    "phone": null,
                    "title": null,
                    "fullName": "Questions regarding this solicitation should be emailed to the buyer listed in block 5 of the solicitation document which can be found under the Additional Information link.\nIf the Additional Information link does not work, please go to https://www.dibbs.bsm.dla.mil/Solicitations/ and type the solicitation number in the Global Search box.\n"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=dec4e660f6974b00858ccdeecddae18d",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "43218-3990",
                "city": "COLUMBUS",
                "countryCode": "USA",
                "state": "OH"
            },
            "placeOfPerformance": null,
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/dec4e660f6974b00858ccdeecddae18d/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=dec4e660f6974b00858ccdeecddae18d&limit=1"
                }
            ],
            "resourceLinks": null
        },
        {
            "noticeId": "fa1f6f09cde9450c89b26efc7106c856",
            "title": "6515--DRIVING SIMULATOR",
            "solicitationNumber": "36C26225Q0458",
            "fullParentPathName": "VETERANS AFFAIRS, DEPARTMENT OF.VETERANS AFFAIRS, DEPARTMENT OF.262-NETWORK CONTRACT OFFICE 22 (36C262)",
            "fullParentPathCode": "036.3600.36C262",
            "postedDate": "2025-02-05",
            "type": "Sources Sought",
            "baseType": "Sources Sought",
            "archiveType": "autocustom",
            "archiveDate": "2025-04-14",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": "",
            "responseDeadLine": "2025-02-13T10:00:00-08:00",
            "naicsCode": "333310",
            "naicsCodes": [
                "333310"
            ],
            "classificationCode": "6515",
            "active": "Yes",
            "award": {
                "awardee": {}
            },
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "sam.choo@va.gov",
                    "phone": "sam.choo@va.gov",
                    "title": "Contract Specialist",
                    "fullName": "Choo, Sam"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=fa1f6f09cde9450c89b26efc7106c856",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "85297",
                "city": "Gilbert",
                "countryCode": "USA",
                "state": "AZ"
            },
            "placeOfPerformance": {
                "streetAddress": "Department of Veterans Affairs VAMC San Diego",
                "streetAddress2": "",
                "city": {
                    "name": "San Diego"
                },
                "state": {
                    "name": "CA"
                },
                "zip": "",
                "country": {
                    "code": "USA",
                    "name": "UNITED STATES"
                }
            },
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/fa1f6f09cde9450c89b26efc7106c856/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=fa1f6f09cde9450c89b26efc7106c856&limit=1"
                }
            ],
            "resourceLinks": [
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/322e6c4f5e1944049174c15b8193fdf8/download",
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/7394aaeb3c204010859ee9894359c838/download"
            ]
        },
        {
            "noticeId": "ee2ad15db384482abbaf2ccfa6137510",
            "title": "Axle, Vehicular, Non-driving (HEMTT)",
            "solicitationNumber": "SPRDL1-25-Q-0054",
            "fullParentPathName": "DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA LAND.DLA LAND WARREN MICHIGAN.DLA LAND WARREN",
            "fullParentPathCode": "097.97AS.DLA LAND.DLA LAND WARREN MI.SPRDL1",
            "postedDate": "2025-02-04",
            "type": "Solicitation",
            "baseType": "Sources Sought",
            "archiveType": "autocustom",
            "archiveDate": "2025-08-31",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2025-03-10T15:00:00-04:00",
            "naicsCode": "336992",
            "naicsCodes": [
                "336992"
            ],
            "classificationCode": "2530",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "Stephen.Granch@dla.mil",
                    "phone": "5864671244",
                    "title": null,
                    "fullName": "Stephen Granch"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=ee2ad15db384482abbaf2ccfa6137510",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "48397",
                "city": "WARREN",
                "countryCode": "USA",
                "state": "MI"
            },
            "placeOfPerformance": {},
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/ee2ad15db384482abbaf2ccfa6137510/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=ee2ad15db384482abbaf2ccfa6137510&limit=1"
                }
            ],
            "resourceLinks": [
                "https://sam.gov/api/prod/opps/v3/opportunities/resources/files/54744ac3b8c84e16b3f58d254b9129dd/download"
            ]
        },
        {
            "noticeId": "c0d4dd876c78419480c9792880bbc17b",
            "title": "Axle, Differential, Driving",
            "solicitationNumber": "SPRDL125R0001",
            "fullParentPathName": "DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA LAND.DLA LAND WARREN MICHIGAN.DLA LAND WARREN",
            "fullParentPathCode": "097.97AS.DLA LAND.DLA LAND WARREN MI.SPRDL1",
            "postedDate": "2025-02-03",
            "type": "Sources Sought",
            "baseType": "Sources Sought",
            "archiveType": "autocustom",
            "archiveDate": "2025-06-30",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2024-12-18T12:00:00-05:00",
            "naicsCode": "336350",
            "naicsCodes": [
                "336350"
            ],
            "classificationCode": "2520",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "patricia.roussin@dla.mil",
                    "phone": "5864671174",
                    "title": null,
                    "fullName": "Patricia M. Roussin"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=c0d4dd876c78419480c9792880bbc17b",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "48397",
                "city": "WARREN",
                "countryCode": "USA",
                "state": "MI"
            },
            "placeOfPerformance": null,
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/c0d4dd876c78419480c9792880bbc17b/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=c0d4dd876c78419480c9792880bbc17b&limit=1"
                }
            ],
            "resourceLinks": null
        },
        {
            "noticeId": "9f72c25f7a1e4fb58ff8931de4736c35",
            "title": "Axle, Differential, Driving",
            "solicitationNumber": "SPRDL125R0001",
            "fullParentPathName": "DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA LAND.DLA LAND WARREN MICHIGAN.DLA LAND WARREN",
            "fullParentPathCode": "097.97AS.DLA LAND.DLA LAND WARREN MI.SPRDL1",
            "postedDate": "2025-01-29",
            "type": "Presolicitation",
            "baseType": "Sources Sought",
            "archiveType": "auto15",
            "archiveDate": "2025-04-01",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2025-03-17T12:00:00-04:00",
            "naicsCode": "336350",
            "naicsCodes": [
                "336350"
            ],
            "classificationCode": "2520",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "patricia.roussin@dla.mil",
                    "phone": "5864671174",
                    "title": null,
                    "fullName": "Patricia M. Roussin"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=9f72c25f7a1e4fb58ff8931de4736c35",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "48397",
                "city": "WARREN",
                "countryCode": "USA",
                "state": "MI"
            },
            "placeOfPerformance": {},
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/9f72c25f7a1e4fb58ff8931de4736c35/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=9f72c25f7a1e4fb58ff8931de4736c35&limit=1"
                }
            ],
            "resourceLinks": null
        },
        {
            "noticeId": "ccc65412e7134ed497a21bb0189501f1",
            "title": "Axle, Vehicular, Non-driving (HEMTT)",
            "solicitationNumber": "2025-SPRDL125Q0054",
            "fullParentPathName": "DEPT OF DEFENSE.DEFENSE LOGISTICS AGENCY.DLA LAND.DLA LAND WARREN MICHIGAN.DLA LAND WARREN",
            "fullParentPathCode": "097.97AS.DLA LAND.DLA LAND WARREN MI.SPRDL1",
            "postedDate": "2025-01-24",
            "type": "Sources Sought",
            "baseType": "Sources Sought",
            "archiveType": "autocustom",
            "archiveDate": "2025-08-31",
            "typeOfSetAsideDescription": null,
            "typeOfSetAside": null,
            "responseDeadLine": "2025-02-07T15:00:00-05:00",
            "naicsCode": "336992",
            "naicsCodes": [
                "336992"
            ],
            "classificationCode": "2530",
            "active": "Yes",
            "award": null,
            "pointOfContact": [
                {
                    "fax": "",
                    "type": "primary",
                    "email": "Stephen.Granch@dla.mil",
                    "phone": "5864671244",
                    "title": null,
                    "fullName": "Stephen Granch"
                }
            ],
            "description": "https://api.sam.gov/prod/opportunities/v1/noticedesc?noticeid=ccc65412e7134ed497a21bb0189501f1",
            "organizationType": "OFFICE",
            "officeAddress": {
                "zipcode": "48397",
                "city": "WARREN",
                "countryCode": "USA",
                "state": "MI"
            },
            "placeOfPerformance": null,
            "additionalInfoLink": null,
            "uiLink": "https://sam.gov/opp/ccc65412e7134ed497a21bb0189501f1/view",
            "links": [
                {
                    "rel": "self",
                    "href": "https://api.sam.gov/prod/opportunities/v2/search?noticeid=ccc65412e7134ed497a21bb0189501f1&limit=1"
                }
            ],
            "resourceLinks": null
        }
    ],
    "links": [
        {
            "rel": "self",
            "href": "https://api.sam.gov/prod/opportunities/v2/search?limit=10&postedFrom=01/01/2025&postedTo=05/03/2025&title=Driving"
        }
    ]
}]