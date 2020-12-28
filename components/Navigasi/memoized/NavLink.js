import { useRouter } from "next/router";
import { memo, useState } from "react";
import Nav from "react-bootstrap/Nav";

const List = {
  "/": [
    { nama: "Deskripsi", to: ".deskripsi" },
    { nama: "Pandangan Orang", to: ".KataOrang" },
    { nama: "Gambar", to: ".gambar" }
  ],
  "/covid": [
    { nama: "Kondisi Terkini", to: "#all" },
    { nama: "Data Provinsi", to: "#provinsi" }
  ]
};

function NavLink({ getHeight, expanded, setExpandClose }) {
  const { pathname } = useRouter();
  const [key, setActiveKey] = useState();

  const renderer = List[pathname];
  const to = pathname === "/" ? "/covid" : "/";

  return (
    <Nav className="ml-auto text-center" activeKey={key}>
      {renderer && (
        <>
          <Nav.Link href={to}>
            {pathname === "/" ? "Informasi Covid 19" : "Halaman Utama"}
          </Nav.Link>
          {renderer.map((link, i) => {
            const [href] = useState(
              pathname === "/" ? link.to.split(".")[1] : link.to.split("#")[1]
            );

            const handleLink = (e) => {
              e.preventDefault();
              setExpandClose();

              const height = getHeight();
              const selector = "section" + link.to;

              if (height) {
                const el = document.querySelector(selector);
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
              setActiveKey();
            };

            return (
              <Nav.Link href={href} key={i} onClick={handleLink}>
                {link.nama}
              </Nav.Link>
            );
          })}
        </>
      )}
    </Nav>
  );
}

export default memo(NavLink);
