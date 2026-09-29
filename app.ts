import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('appHospital');
}

function mostrarMensaje() {

    let mensaje = document.getElementById("mensaje");

    mensaje.textContent =
        "Gracias por contactarnos. Pronto nos comunicaremos contigo.";
}
