import Pascalize from "../../../utils/Pascalize";

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
      {typeof data === "object" &&
        data.map((d, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{Pascalize(d.provinsi).replace("Dki", "DKI")}</td>
            <td>{Number(d.kasus).toLocaleString()}</td>
            <td>{Number(d.sembuh).toLocaleString()}</td>
            <td>{Number(d.meninggal).toLocaleString()}</td>
          </tr>
        ))}
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
