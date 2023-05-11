import {useFetch} from "../useFetch";

export const useDeleteUser = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFetch() && ((id: string) => useFetch().DELETE(`/api/user/${id}`, null));
};
