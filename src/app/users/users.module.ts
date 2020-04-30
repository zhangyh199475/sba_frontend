export class Users {
    public userId?: number;
    public userName?: string;
    public password?: string;
    public roleId?: number;
    public active?: number;
    public email?: string;
    public createDate?: Date;
    public workTimingStart?: Date;
    public workTimingEndt?: Date;
    public linkedinUrl?: string;
    public mentorProfile?: string;
    public expYear?: number;
}

export class FunctionMapping {
    public searchTrainingsMapping?: boolean;
    public editSkillsMapping?: boolean;
    public usersMapping?: boolean;
    public technologiesMapping?: boolean;
}