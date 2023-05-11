import {useFetch} from "../useFetch";

export const useGetAllPost = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && (() => useFetch().GET("/api/post", null));
};

export const useGetReportView = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && (() => useFetch().GET("/api/post/report", null));
};

export const useGetPostByCity = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && ((city: string) => useFetch().GET(`/api/post/filter/${city}`, null));
};

export const useGetPostByCityOrTag = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && ((city: string, tag:string) => useFetch().POST(`/api/post/filter`, {city:city, tag:tag}));
};


