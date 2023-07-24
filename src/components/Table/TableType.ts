import { ColumnsType } from "antd/es/table";
import { ReactNode } from "react";

type PropTypes = {
    title: string;
    onCreate?: {
        title: string;
        onClick: Function;
    };
    urlSearchParams?: {
        include?: string;
        filter?: object;
        extra?: object;
        sort?: string;
    };
    dataKey?: string;
    filterComponent?: ReactNode;
    url: string;
    columns: ColumnsType;
    rowSelect?: boolean;
    pageSize?: number;
    getSelectedRows?: Function;
    onEdit?: Function | null | undefined;
    onCancel?: Function | null | undefined;
    onDoubleClick?: Function | null | undefined;
    isDelete?: boolean;
    refetch: boolean;
};

export default PropTypes;
