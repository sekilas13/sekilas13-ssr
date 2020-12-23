import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/main/Deskripsi.module.css";

export default function Deskripsi() {
  return (
    <section id={styles.deskripsi}>
      <Container>
        <Row className="justify-content-center">
          <Col className="mt-3">
            <h2 className={`${styles.hadua} text-center`}>Apa itu KIR ?</h2>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3 text-center">
          <Col sm={5}>
            <p className={styles.paragrap}>
              Kir adalah salah satu ekstrakurikuler di{" "}
              <a href="https://smpn13kotabekasi.sch.id/">
                SMP Negeri 13 Bekasi
              </a>{" "}
              yang bertemakan ekstrakurikuler yang menyediakan berbagai kegiatan
              unik dan beragam, tentunya kegiatannya juga anti mainstream.
              Ekstrakurikuler kir berbeda dengan ekstrakulikuler kebanyakan, di
              kir kalian dapat menemukan segala sesuatu hal yang baru. Terkadang
              kir dalam 6 bulan akan mengikuti olimpiade.
            </p>
          </Col>
          <Col sm={5}>
            <p className={styles.paragrap}>
              Tidak ada senioritas di eksul kir ini, semua bebas berekspresi dan
              berpendapat. Kalian bisa belajar dan bertanya-tanya ke kakak kelas
              seputar hal sekolah ataupun luar sekolah. Selain itu jam
              ekstrakurikuler kir fleksibel, kalian bisa pulang ke rumah untuk
              berganti pakaian, jajan, makan, ataupun bermain game bersama.
              Ekskul nya pun tidak membosankan karena banyak suasana baru yang
              hadir menemani kalian.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
