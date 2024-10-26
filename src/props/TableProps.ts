
export interface TableProps<T> {
    table_id: string;
    thead_id: string;
    tbody_id: string;
    head: HeadField[];
    is_mutable: boolean;
    can_be_deleted: boolean;
    data: T[]
}

export interface HeadField {
    name: string;
    field: string;
}