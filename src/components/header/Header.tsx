import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default function Header() {
  return (
    <IonHeader>
      <IonToolbar class="ion-text-center">
        <IonTitle>Flickr photos App</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
