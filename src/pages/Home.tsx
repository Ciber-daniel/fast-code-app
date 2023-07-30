import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonSpinner,
  IonButton,
} from "@ionic/react";
// styles
import "./Home.css";
// services
import { findPosts } from "../services/api-services";
// interfaces
import { Picture } from "../interfaces/picture.interfaces";

import Card from "../components/card/Card";
import Header from "../components/header/Header";
import Notification from "../components/notification/Notification";

const Home: React.FC = () => {
  const [searched, setSearched] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");
  const [cards, setCards] = useState<Picture[]>([]);

  function onSubmitCallback(e: any) {
    e.preventDefault();
    if (searchText) {
      setSearched(true);
      findPosts(setCards, setLoading, searchText);
    }
  }

  const handleInput = (ev: any) => {
    let query = "";
    const target = ev.target;
    if (target) query = target?.value!.toLowerCase();

    setSearchText(query.trim());
  };

  return (
    <IonPage id="home-page">
      <Header />
      <IonContent fullscreen>
        <form
          onSubmit={(e) => {
            onSubmitCallback(e);
          }}
        >
          <div className="search">
            <IonSearchbar
              value={searchText}
              onIonInput={(ev: any) => handleInput(ev)}
            />
            <IonButton className="search-button" type="submit">
              Buscar
            </IonButton>
          </div>
        </form>
        {searched ? (
          loading ? (
            <div className="spinner-container">
              <IonSpinner name="crescent" id="spinner" />
            </div>
          ) : cards.length === 0 ? (
            <Notification triggering={true} />
          ) : (
            <div id="content">
              {cards.map((picture) =>
                picture.link[picture.link.length - 1].$.href.includes(
                  "video"
                ) ? null : (
                  <Card key={picture.id} picture={picture} />
                )
              )}
            </div>
          )
        ) : (
          <Notification triggering={false} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
