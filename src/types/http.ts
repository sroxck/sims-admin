
export type AxiosResponese = {
    [index: string | number]: any,
    data: Object | Array<any>
    code: number,
    message: string,
}

export type AxiosRespuest = {
    [index: string | number]: any,
    params?: Object | Array<any>
}