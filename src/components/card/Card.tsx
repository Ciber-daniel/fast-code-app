import { IonCard, IonSpinner } from "@ionic/react";
import { useState, useEffect } from "react";
// styles
import "./Card.css";
// intefaces
import { Picture } from "../../interfaces/picture.interfaces";

export default function Card(props: { picture: Picture }) {
  const { picture } = props;
  const [loadedSrc, setLoadedSrc] = useState<string>("");
  const src = picture.link[picture.link.length - 1].$.href;
  useEffect(() => {
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad, { passive: true });
      image.src = src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [src]);

  return loadedSrc !== "" ? (
    <IonCard className="cards" key={picture.id}>
      <img src={loadedSrc} />
    </IonCard>
  ) : (
    <div
      className="spinner-container"
      style={{ height: "20vh", width: "20vw" }}
    >
      <IonSpinner name="crescent" className="card-spinner" id="spinner" />
    </div>
  );
}
