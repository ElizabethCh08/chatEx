import { Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
 
  messages: Observable<Message[]>;
    newMsg = '';
    archivo;
    nombreArchivo: string;
    urlImagen = 'https://firebasestorage.googleapis.com/v0/b/chatex-8c38e.appspot.com/o/';
  
    constructor(
        private chatService: ChatService,
        private router: Router,
        private storage: AngularFireStorage,
    ) { }

  ngOnInit() {
      this.messages = this.chatService.getChatMessages();
      
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
    }

    sendImage() {
        this.chatService.addChatMessage({ url: this.urlImagen + this.nombreArchivo }).then(() => {
            this.newMsg = '';
            this.archivo = undefined;
            this.content.scrollToBottom();
        });
    }

  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
    }

    subirArchivo(evento) {
        console.log('e', evento);
        const path = 'imagen/';
        const fileList: FileList = evento.target.files;
        const existeArchivo = fileList.length > 0;
        console.log('existe', existeArchivo);
        if (existeArchivo) {
            const file = fileList.item(0);
            this.nombreArchivo = file.name;
            const reader = new FileReader();
            reader.onload = (eventoLectura: any) => {
                const src = eventoLectura.target.result;
            };
            reader.readAsDataURL(file);
            this.archivo = file;
        }
    }

    async guardarArchivo() {
        console.log('guardar', this.nombreArchivo);
        this.nombreArchivo = this.nombreArchivo + new Date().getTime();

        await this.storage.upload(`${this.nombreArchivo}`, this.archivo)
            .then(
                respuesta => {
                    console.log('res', respuesta);
                }
            ).catch(
                error => {
                    console.log('error', error);
                }
        );
        this.sendImage();
    }

    obtenerTipo(ext: string) {
        if (ext === 'jpg') return {type: 'image/jpg'}
    }

    async obtenerImg(path) {
        console.log('path', path);
        let urlDown = '';
        if (path) {
            this.chatService.cargarArchivos(path)
        }
        //await  this.storage.refFromURL(path).getDownloadURL().subscribe(
          // res => {
            //    console.log('res', res);
            //}, error => {
              //  console.log('errir', error);
            //}
        //);
        console.log('download', urlDown);
        return urlDown;
    }
}
