import {useQuery} from "@tanstack/react-query";

const useYogaClass = (id) => {
  const {
    data: clases = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5003/classes");
      return res.json();
    },
  });

  return [clases, loading, refetch];
};

export default useYogaClass;
