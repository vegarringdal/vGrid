export declare class WakCollection {
    baseUrl: string;
    attributes: any;
    rowno: Array<number>;
    keys: Array<any>;
    created: Array<Date>;
    data: Array<any>;
    length: number;
    pages: Array<number>;
    addToSet: Array<any>;
    currentPage: number;
    entityset: any;
    options: any;
    pagesFetching: Array<any>;
    entityModel: any;
    constructor(attributes: Array<any>, baseUrl: string);
    setDefaults(): void;
    clearCache(): Promise<{}>;
    getUnsaved(): any[];
    replace(data: any): void;
    getRow(row: number): any;
    getKey(key: any): void;
    getRowFromKey(key: any): number;
    getRowFromEntity(entity: any): number;
    getModified(): any[];
    addRow(): Promise<{}>;
    removeUnsavedRow(row: number): void;
    getClosestPage(row: number, pageSize: number): number;
    add(data: any): void;
    setValueToRow(attribute: string, value: any, row: number): void;
    insertData(data: any): void;
}
