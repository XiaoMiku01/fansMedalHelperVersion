import type { ICodePreviewConfig } from "../types";

const codePreviewConfig: ICodePreviewConfig = {
    title: "生成代码预览",
    cache: "json",
    headers: {
        copy: {
            enable: true,
        },
        select: {
            enable: true,
            prop: "language",
            config: {
                placeholder: "生成格式",
                items: [
                    {
                        value: "json",
                        label: "JSON",
                    },
                    {
                        value: "yaml",
                        label: "YAML",
                    },
                ],
            },
        },
    },
};

export { codePreviewConfig };
