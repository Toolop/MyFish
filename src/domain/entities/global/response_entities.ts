export interface ResponsePagingEntities {
  totalData: number | undefined;
  totalPage: number | undefined;
  pageNow: number | undefined;
}

export interface ResponseEntities {
  data: any;
  paging: ResponsePagingEntities;
}

export interface ResponseWithoutPagingEntities {
  data: any;
}
