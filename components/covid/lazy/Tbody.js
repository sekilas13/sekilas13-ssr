import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function Tbody() {
  const [data, setData] = useState([]);

  const setDataProvinsi = useCallback((data) => setData(data), [data]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi/")
      .then((data) => data.data.data)
      .then((result) => setDataProvinsi(result));
  }, []);

  return <></>;
}
