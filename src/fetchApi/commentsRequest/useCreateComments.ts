import {useFetch} from "../useFetch";

export const useCreateComment = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && ((body: any) => useFetch().POST("api/comment", body));
};
