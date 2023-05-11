import {useFetch} from "@/fetchApi/useFetch";

export const useLikesPost = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useFetch()&&((id:string)=>useFetch().GET(`/api/post/${id}`, null))
}