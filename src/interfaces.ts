export interface IactionGlobalStateConfigurationMachine {
    isMobileDevice: boolean,
    language: string;
    serial: string | null;
    hasCart: boolean;
    emailConfirmation: boolean;
    isCheckingTechBreak: boolean;
    technical_break: boolean;
    devMode: boolean;
    QRCodeMode: boolean;
    animatedQR: boolean;
    employeeMode: boolean;
    mobileAppMode: boolean;
    discountCodeMode: boolean;
    discountCodeValue: string | null;
    terminal_preauthorization_payment: boolean;
    checkTechnicalBreakTimeout: number;
    clientTimeoutIdle: number;
    qrTimeoutIdle: number;
    terminalTimeoutIdle: number;
    serviceTimeoutIdle: number;
    languages: string[];
    currency: string;
    swiperSettings: IswiperSettings;
}

export interface IactionGlobalStateDataMachine {
    cart: IcartProduct[];
    products: Iproduct[]
}

export interface Iproduct {
    [key: string] : any
}

export interface IcartProduct {
    [key: string] : any
}

interface IswiperSettings {
    effect: string;
    loop: boolean;
    cardsPerSlide: number;
}

type LangConfigLangOption = {
    [key: string]: string;
};

export type LangConfigTranslations = {
    [languageCode: string]: {
        [section: string]: LangConfigLangOption;
    };
};