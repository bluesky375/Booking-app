import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { File } from '@ionic-native/file';
// import { FileChooser } from '@ionic-native/file-chooser';
// import { FilePath } from '@ionic-native/file-path';
import firebase from 'firebase';

@Injectable()
export class UploadServiceProvider {

  nativepath: any;
  firestore = firebase.storage();
  constructor(public http: HttpClient) {

  }

  // chooseFile() {
  //   let promise = new Promise((resolve, reject) => {
  //     this.filechooser.open().then((url) => {
  //       (<any>window).FilePath.resolveNativePath(url, (result) => {
  //         this.nativepath = result;
  //         resolve(this.nativepath);
  //       })
  //     })
  //   });
  //   return promise;
  // }

  uploadImage(path){
    let p = new Promise((resolve, reject) => {
      (<any>window).resolveLocalFileSystemURL(path, (res) => {
        res.file((resFile) => {
          let reader = new FileReader();
          reader.readAsArrayBuffer(resFile);
          reader.onloadend = (evt: any) => {
            let imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
            let date = new Date;
            let datestring = date.toString().replace(/[' "():+]/gi, "");
            let n = datestring.substring(0, 18)+""+Math.random().toString(36).substr(2, 10);
            let imageStore = this.firestore.ref('profileimages/'+n);
            imageStore.put(imgBlob).then((res) => {
              this.firestore.ref('profileimages/'+n).getDownloadURL().then((url) => {
                resolve(url);
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
