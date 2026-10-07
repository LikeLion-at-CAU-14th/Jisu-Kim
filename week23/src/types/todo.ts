export interface Todo {
    id:number;
    text:string;
    isDone : boolean;
}

export interface QuoteResponse{
    id:number;
    quote:string;
    author:string;
}

export type FilterType = 'all' | 'active' | 'completed'; //FilterType을 Union Type으로 정의하기.