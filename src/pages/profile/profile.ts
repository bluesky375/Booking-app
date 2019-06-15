import { Component, Injector, Renderer } from "@angular/core";
import { Platform, App, ActionSheetController } from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { ServicesProvider } from "../../providers/services";
import { User } from "../../providers/user";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Facebook } from "@ionic-native/facebook";
import * as firebase from "firebase";
import { UploadImageProvider } from "../../providers/upload-image/upload-image";
import { Crop } from "@ionic-native/crop";
import { ImgLoader } from "ionic-image-loader";

@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage extends BasePage {
  username: string;
  email: string;
  phone: string;
  avatar: any = null;
  captureDataUrl: any;
  tabBarElement: any;
  location: string;
  firestore = firebase.storage();

  constructor(
    injector: Injector,
    public platform: Platform,
    public sp: ServicesProvider,
    public _app: App,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    public upload_image: UploadImageProvider,
    public user: User,
    public renderer: Renderer,
    private crop: Crop,
    public fb: Facebook
  ) {
    super(injector);
    this.tabBarElement = document.querySelector(".toolbar");
    this.firebase_CurrentScreen("User Settings Screen");
  }

  ionViewDidLoad() {
    this.username = this.user.getUserInfo().username;
    this.email = this.user.getUserInfo().email;
    this.phone = this.user.getUserInfo().phone;
    this.avatar = this.user.getUserInfo().avatar;
    console.log(this.avatar);
    if (!this.avatar) {
      this.avatar = { url: "./assets/imgs/avatar.png", name: "" };
    }
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, "fade-in", true);
  }

  myCallbackFunction = (_params: any) => {
    return new Promise((resolve, reject) => {
      this.username = this.user.getUserInfo().username;
      this.email = this.user.getUserInfo().email;
      this.phone = this.user.getUserInfo().phone;
      this.avatar = this.user.getUserInfo().avatar;
      resolve();
    });
  };

  EditInfo() {
    this.openPage("EditInfoPage", { callback: this.myCallbackFunction });
  }

  EditContact() {
    this.openPage("EditContactPage", { callback: this.myCallbackFunction });
  }

  EditPassword() {
    this.openPage("EditPassPage", { callback: this.myCallbackFunction });
  }

  chooseImage(sourceType: number) {
    let options: CameraOptions = {
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      quality: 50
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.crop.crop(imageData, { quality: 75 }).then(
          newImage => {
            this.captureDataUrl = newImage;

            console.log(this.captureDataUrl);

            this.showLoadingView("uploading..");

            this.upload_image
              .uploadImage(this.captureDataUrl)
              .then((snapshot: any) => {
                console.log("image:" + snapshot);

                let data = {
                  username: this.username,
                  avatar: { url: snapshot.url, name: snapshot.name },
                  id: this.user.getUserInfo()._id,
                  token: this.user.getUserInfo().token
                };

                this.user.editInfo(data).subscribe(
                  data => {
                    this.avatar = {
                      url: this.captureDataUrl,
                      name: snapshot.name
                    };
                    this.showContentView();
                  },
                  e => {
                    this.showContentView();
                    let error: string;
                    if (e._body) {
                      error = JSON.parse(e._body).message;
                    } else {
                      error = e.message;
                    }
                    this.showToast(error);
                    console.log(e);
                  }
                );
              })
              .catch(error => {
                console.log("error2", error);
                this.showContentView();
                this.showToast(error.message);
              });
          },
          error => {
            console.log("error1", error);
            this.showContentView();
            // this.showToast(error.message);
          }
        );
      },
      error => {
        console.log("error", error);
        this.showContentView();
        // this.showToast('Network Error');
      }
    );
  }

  async onUpload() {
    try {
      let actionSheet = this.actionSheetCtrl.create({
        title: "Choose an option",
        buttons: [
          {
            text: "Photo Library",
            handler: () => {
              this.chooseImage(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: "Camera",
            handler: () => {
              this.chooseImage(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: "Cancel",
            role: "cancel"
          }
        ]
      });

      actionSheet.present();
    } catch (error) {
      console.warn(error);
    }
  }

  LogOut() {
    this.showConfirm("Are you sure you want to log out?")
      .then(() => {
        this.showLoadingView("log-out");
        if (window.localStorage.getItem("type") === "facebook") {
          this.fb.logout().then(() => {
            this.showContentView();
            this.navigate();
          });
        } else {
          this.user.logout().subscribe(
            data => {
              if (data.success) {
                this.showContentView();
                this.navigate();
              }
            },
            e => {
              this.showContentView();
              let error: string;
              if (e._body) {
                error = JSON.parse(e._body).message;
              } else {
                error = e.message;
              }
              this.showToast(error);
              console.log(e);
            }
          );
        }
      })
      .catch(err => console.log(err));
  }

  navigate() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("type");
    window.localStorage.removeItem("user");
    this.tabBarElement.style.display = "none";
    this._app.getRootNav().setRoot("SigninPage");
  }
}
