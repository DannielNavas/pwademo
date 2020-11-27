import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

interface Token {
  token: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo PWA';
  installEvent = null;
  private tokensCollections: AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private database: AngularFirestore
  ) {
    this.tokensCollections = this.database.collection<Token>('tokens');
  }
  ngOnInit(): void {
    this.updatePWA();
    this.requestPermision();
    this.listenNotifications();
  }

  // Funcion de actualizacion de la aplicacion cuando existe un nuevo release en el servidor
  updatePWA(): void {
    this.swUpdate.available.subscribe((value) => {
      console.log('update', value);
      window.location.reload();
    });
  }

  // Solicitud de permisos al usuario para las notificaciones push
  requestPermision(): void {
    this.messaging.requestToken.subscribe((token) => {
      console.log(token);
      this.tokensCollections.add({ token });
    });
  }
  // Escucha de las notificaciones utilizando Firebase
  listenNotifications(): void {
    this.messaging.messages.subscribe((message) => {
      console.log(message);
    });
  }

  // Evento para saber si el usuario instalo la aplicacion
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event): void {
    event.preventDefault();
    this.installEvent = event;
  }

  // Funcion que se lanza cuando el usuario le da click al boton de instalacion
  // el userChoise sabemos la respuesta de este a ese evento
  installByUser(): void {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice
        .then(rta => {
          console.log(rta);
        });
    }
  }
}
