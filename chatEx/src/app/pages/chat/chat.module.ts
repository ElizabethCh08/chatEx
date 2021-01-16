import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { ChatPage } from './chat.page';
import { AngularFirestoreModule } from '@angular/fire/firestore/public_api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
        ChatPageRoutingModule,
        // FileUploadModule,
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
