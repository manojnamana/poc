export interface DefCode {
    code: string;
    public_law: string;
    title: string;
    urls: string;
    disaster: string;
  };
  
  export interface Agency  {
    fiscal_year: number;
    toptier_code: string;
    name: string;
    abbreviation: string;
    agency_id: number;
    icon_filename: string;
    mission: string;
    website: string;
    congressional_justification_url: string;
    about_agency_data: string | null;
    subtier_agency_count: number;
    def_codes: DefCode[];
  };
  