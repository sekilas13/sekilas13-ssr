import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import { memo } from "react";

const List = {
  "/": [
    { nama: "Deskripsi", to: ".deskripsi" },
    { nama: "Pandangan Orang", to: ".KataOrang" },
    { nama: "Gambar", to: ".gambar" },
  ],
  "/covid": [
    { nama: "Kondisi Terkini", to: "#all" },
    { nama: "Data Provinsi", to: "#provinsi" },
  ],
};

function NavLink({ getHeight, expanded, setExpandClose }) {
  const { pathname } = useRouter();

  const handleLink = (target) => {
    setExpandClose();
    const height = getHeight();
    if (height) {
      const el = document.querySelector(`section${target}`);
      if (expanded) {
        setTimeout(() => {
          const tujuan = el.offsetTop - height;
          window.scrollTo(0, tujuan);
        }, 150);
      } else {
        const tujuan = el.offsetTop - height;
        window.scrollTo(0, tujuan);
      }
    }
  };

  const renderer = List[pathname];
  const to = pathname === "/" ? "/covid" : "/";

  return (
    <>
      {renderer && (
        <>
          <Nav.Link href={to}>
            {pathname === "/" ? "Informasi Covid 19" : "Halaman Utama"}
          </Nav.Link>
          {renderer.map((link, i) => (
            <Nav.Link
              key={i}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLink(link.to);
              }}
            >
              {link.nama}
            </Nav.Link>
          ))}
        </>
      )}
    </>
  );
}

export default memo(NavLink);
