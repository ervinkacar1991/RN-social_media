import { useMutation, useQueryClient } from "react-query";
import api from "../services/api";

const useDeleteUserPost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ username, post_id }: { username: string; post_id: string }) => {
      try {
        return await api.deleteUserPost(username, post_id);
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
};

export default useDeleteUserPost;
