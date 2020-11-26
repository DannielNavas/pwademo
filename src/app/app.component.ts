import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'podcastTrek';
  installEvent = null;

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
  ) { }
  ngOnInit(): void {
    this.updatePWA();
    this.requestPermision();
    this.listenNotifications();
  }

  updatePWA(): void {
    this.swUpdate.available.subscribe((value) => {
      console.log('update', value);
      window.location.reload();
    });
  }

  requestPermision(): void {
    this.messaging.requestToken.subscribe((token) => {
      console.log(token);
    });
  }

  listenNotifications(): void {
    this.messaging.messages.subscribe((message) => {
      console.log(message);
    });
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event): void {
    event.preventDefault();
    this.installEvent = event;
  }

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
