import useProgressiveImage from "../hooks/useProgressiveImage";
import styles from "../../../styles/main/Gambar.module.css";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import { Image } from "react-bootstrap";

export default function WrapperImg({ src: srcTujuan, placeholder, alt }) {
  const { src, loading, onChangeVisible } = useProgressiveImage({
    srcTujuan,
    placeholder
  });

  return (
    <VisibilitySensor once onChange={onChangeVisible} offset={{ top: 10 }}>
      {({ isVisible }) => (
        <Spring delay={100} to={{ opacity: isVisible ? 1 : 0 }}>
          {({ opacity }) => (
            <Image
              src={src}
              alt={alt}
              style={{
                opacity,
                width: "100%",
                filter: loading ? "blur(10px)" : "none",
                transition: "all 0.40s linear"
              }}
              className={`${styles.gambar} img-fluid img-thumbnail mt-3`}
            />
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
}
