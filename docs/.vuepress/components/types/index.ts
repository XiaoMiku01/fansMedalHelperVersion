export interface ICol {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

export interface IOption {
    prop: string;
    name: string;
    type: string;
    info?: string;
}

export interface IConfig {
    col: ICol;
    items: IOption[];
}
