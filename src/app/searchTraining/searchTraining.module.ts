export class TechnologiesCriteria{
    public techName?: string;
    public userName?: string;
    public price?: number;
    public linkedinUrl?: string;
    public mentorProfile?: string;
    public expYear?: number;
}

export class Trainings{
    private trainId?: number;
    private techName?: string;
    private startDate?: string;
    private endDate?: string;
    private studentName?: string;
    private mentorName?: string;
    private received?: number;
    private active?: string;
    private price?: number;
    private currentPrice?: number;
    private currentPercent?: number;
    private rate?: number;
}