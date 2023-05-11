import {useFetch} from "@/fetchApi/useFetch";

export const useReportPost = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && ((body: any) => (useFetch().POST('/api/post/report', body)))
}