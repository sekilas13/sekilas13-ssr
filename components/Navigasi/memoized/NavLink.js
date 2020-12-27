import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import { memo } from "react";

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

function LinkNav({ link, getHeight, expanded, setExpandClose }) {
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

    document
      .querySelectorAll(".nav-link")
      .forEach((node) => node.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <Nav.Link href="#" onClick={handleLink}>
      {link.nama}
    </Nav.Link>
  );
}

function NavLink({ getHeight, expanded, setExpandClose }) {
  const { pathname } = useRouter();

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
            <LinkNav
              key={i}
              link={link}
              getHeight={getHeight}
              setExpandClose={setExpandClose}
              expanded={expanded}
            />
          ))}
        </>
      )}
    </>
  );
}

export default memo(NavLink);
