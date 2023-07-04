import {useQuery} from "@tanstack/react-query";

const useYogaClass = (id) => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5003/postClasses");
      return res.json();
    },
  });
  return [classes, loading, refetch];
};

export default useYogaClass;
