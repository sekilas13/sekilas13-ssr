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

  return (
    <>
      {!data && (
        <>
          <tr>
            <td>1</td>
            <td colSpan={4} className="text-center">
              Sedang mengambil data....
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td colSpan={4} className="text-center">
              Mohon tunggu....
            </td>
          </tr>
        </>
      )}
      {data && (
        <>
          {data
            .filter((d) => d.provinsi !== "Indonesia")
            .filter((d) => d.provinsi !== null)
            .map((d, i) => (
              <tr key={d.kodeProvi}>
                <td>{i + 1}</td>
                <td>{d.provinsi}</td>
                <td>{Number(d.kasusPosi).toLocaleString()}</td>
                <td>{Number(d.kasusSemb).toLocaleString()}</td>
                <td>{Number(d.kasusMeni).toLocaleString()}</td>
              </tr>
            ))}
        </>
      )}
    </>
  );
}
