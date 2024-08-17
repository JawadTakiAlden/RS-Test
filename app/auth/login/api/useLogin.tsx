import { request } from "@/app/apiFetch/request";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";

const useLogin = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const loginUser = (data: { username: string; password: string }) => {
    return request({
      url: "/auth",
      method: "post",
      data: data,
    });
  };

  const mutation = useMutation({
    mutationKey: ["login-user-in"],
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/admin");
    },
    onError: (error: AxiosError<{
      data : any,
      message : string
    }>) => {
      enqueueSnackbar(error.response?.data.message, {
        variant: "error",
      });
    },
  });

  return mutation;
};

export default useLogin;
