interface ICol {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

type TOptionStyle = "input" | "check";

type TInputType = "number" | "text";

interface IOption {
    prop: string;
    name: string;
    style: TOptionStyle;
    type?: TInputType;
    info?: string;
    required?: boolean;
}

export interface IConfig {
    col: ICol;
    items: IOption[];
}
interface ICodePreviewHeaderItem {
    enable: boolean;
    prop?: string;
    config?: any;
}

interface ICodePreviewHeaders {
    [key: string]: ICodePreviewHeaderItem;
}

export interface ICodePreviewConfig {
    title: string;
    cache?: string;
    headers: ICodePreviewHeaders;
}
