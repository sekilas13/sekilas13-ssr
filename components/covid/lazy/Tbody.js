export default function Tbody({ data, error }) {
  return (
    <>
      {!error && !data && (
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
      {typeof data === "object" && (
        <>
          {data.data
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
      {error && !data && (
        <>
          <tr>
            <td colSpan={5} className="text-center">
              Mohon maaf, data tidak dapat ditampilkan.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="text-center">
              Error: {error.message}
            </td>
          </tr>
        </>
      )}
    </>
  );
}
