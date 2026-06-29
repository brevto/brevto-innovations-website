import { useEffect, useState } from "react";

const usePageSkeleton = (loading) => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!loading) {
      setShowSkeleton(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowSkeleton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  return showSkeleton;
};

export default usePageSkeleton;