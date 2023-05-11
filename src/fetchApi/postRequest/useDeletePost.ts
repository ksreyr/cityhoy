import {useFetch} from "@/fetchApi/useFetch";

export const useDeletePost = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && ((id: string) => useFetch().DELETE(`/api/post/${id}`, null))
}