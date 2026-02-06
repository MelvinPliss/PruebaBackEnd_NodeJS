export interface ResponseEndpoint<T> {
    Status: boolean;
    Value?: T;
    Datos?: T[];
    Msg?: string;
    TotalRecords?: number;
    TotalPages?: number;
}