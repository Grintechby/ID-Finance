export interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: any) => void;
};

export interface IRadio {
    value: string;
    onChange: (e: any) => void;
    name: string;
    id: string;
    children: React.ReactNode;
};

export interface InformWindowProps {
    visible: boolean;
};

export interface IMainTemplate {
    children: React.ReactNode;
};

export interface IButton {
    onClick: () => void;
    children: React.ReactNode;
};

export interface ICheckbox {
    id: string;
    value: string;
    children: React.ReactNode;
    onChange?: (e: any) => void;
    checked?: boolean;
};

export interface IDate {
    min: string;
    max: string;
    id: string;
    placeholder: string;
    children: React.ReactNode;
    onChange?: (e:any) => void;
    value?: string;
};

export interface IHobbies {
    firstName: string;
    lastName: string;
    birthday: number;
    year: string;
    month: string;
    day: string;
    sex: string;
    ocean: string;
    hobby: any;
    hobbies?: any[] | undefined;
};