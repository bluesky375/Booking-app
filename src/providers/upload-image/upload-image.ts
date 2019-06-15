import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UploadImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UploadImageProvider {
  firestore = firebase.storage();
  constructor(public http: HttpClient) {
    console.log('Hello UploadImageProvider Provider');
  }

  // uploadImage(imageString) : Promise<any>
  // {
  //   let storageRef = firebase.storage().ref();
  //
  //   const filename = Math.floor(Date.now() / 1000);
  //
  //   let parseUpload: any;
  //
  //   return new Promise((resolve, reject) => {
  //
  //     const imageRef = storageRef.child(`images/${filename}.jpg`);
  //
  //    parseUpload =  imageRef.putString(imageString, firebase.storage.StringFormat.DATA_URL);
  //
  //
  //     parseUpload.on('stage_change', (_snapshot) => {
  //
  //       },
  //       (_err) => {
  //         reject(_err);
  //       },
  //       (success) => {
  //         resolve(parseUpload.snapshot);
  //       });
  //   });
  // }

  uploadImage(path){

    let p = new Promise((resolve, reject) => {

      (<any>window).resolveLocalFileSystemURL(path, (res) => {

        res.file((resFile) => {

          let reader = new FileReader();

          reader.readAsArrayBuffer(resFile);

          reader.onloadend = (evt: any) => {

            let imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });

            console.log('imgBlob',imgBlob);

            const filename = Math.floor(Date.now() / 1000);

            let imageStore = this.firestore.ref('image/'+ filename);

            imageStore.put(imgBlob).then((res) => {

              this.firestore.ref('image/'+filename).getDownloadURL().then((url) => {

                resolve({url:url,name:filename});

              }).catch((err) => {

                reject(err);

              })

            }).catch((err) => {

              reject(err);

            })
          }

        })
      })
    });
    return p;

  }

}
