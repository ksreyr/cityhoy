import {useFetch} from "../useFetch";

export const useGetCommentsByPost = () => {
    return (
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useFetch() && ((id: string) => useFetch().GET(`/api/comment/${id}`, null))
    );
};
