export interface SignupInitParams {
    readonly email: string;
    readonly password: string;
}

export interface Signup {
    readonly token: string;
    readonly initParams: SignupInitParams;
    readonly selfie?: string;
    readonly frontDocumentPicture?: string;
    readonly backDocumentPicture?: string;
}