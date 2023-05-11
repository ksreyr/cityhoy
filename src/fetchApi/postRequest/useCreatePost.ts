import {useFetch} from "../useFetch";

export const useCreatePost = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && ((body: any) => useFetch().POST("/api/post", body));
};
