import { useState, useEffect, useMemo, useCallback } from "react";

const loadRealImage = (src) =>
  new Promise((resolve) => {
    const image = new window.Image();
    image.onload = resolve;
    image.src = src;
  });

export default function useProgressiveImage({ srcTujuan, placeholder }) {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState(placeholder);
  const [firstTimeVisible, setFTV] = useState(false);

  useEffect(() => {
    if (firstTimeVisible) {
      loadRealImage(srcTujuan).then(() => {
        setSrc(srcTujuan);
        setLoading(false);
      });
    }
  }, [firstTimeVisible, src]);

  const onChangeVisible = useCallback(
    (isVisible) => {
      if (!firstTimeVisible) {
        if (isVisible) setFTV(true);
      }
    },
    [firstTimeVisible]
  );

  const returnValue = useMemo(
    () => ({
      src,
      loading,
      onChangeVisible
    }),
    [src, loading]
  );

  return returnValue;
}
