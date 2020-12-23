import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import { memo } from "react";
import Link from "next/link";

const List = {
  "/": [
    { nama: "Deskripsi", to: "#deskripsi" },
    { nama: "Pandangan Orang", to: "#KataOrang" },
    { nama: "Gambar", to: "#gambar" },
  ],
  "/covid": [
    { nama: "Kondisi Terkini", to: "#all" },
    { nama: "Data Provinsi", to: "#provinsi" },
  ],
};

function NavLink() {
  const { pathname } = useRouter();

  const handleLink = (e) => {
    e.preventDefault();
  };

  const renderer = List[pathname];
  const to = pathname === "/" ? "/covid" : "/"

  return (
    <>
      {renderer && (
        <>
        <Link href={to}>
          <Nav.Link href={to}>
            {pathname === "/" ? "Informasi Covid 19" : "Halaman Utama"}
          </Nav.Link>
        </Link>
          {renderer.map((link, i) => (
            <Nav.Link key={i} href={link.to} id={link.to} onClick={handleLink}>
              {link.nama}
            </Nav.Link>
          ))}
        </>
      )}
    </>
  );
}

export default memo(NavLink);
