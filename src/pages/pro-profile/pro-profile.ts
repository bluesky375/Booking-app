import { Component, Injector, Renderer } from "@angular/core";
import { Platform, App, ActionSheetController } from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { ServicesProvider } from "../../providers/services";
import { User } from "../../providers/user";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Facebook } from "@ionic-native/facebook";
import * as firebase from "firebase";
import { UploadImageProvider } from "../../providers/upload-image/upload-image";
import { ImgLoader } from "ionic-image-loader";

@Component({
  selector: "page-pro-profile",
  templateUrl: "pro-profile.html"
})
export class ProProfilePage extends BasePage {
  provider: any;
  captureDataUrl: any;
  tabBarElement: any;
  service: any = null;
  services: any = [];
  categories: any = [];
  reviews: any = [];
  category: any;
  categoriesLoaded: boolean = false;
  servicesLoaded: boolean = false;
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
    public fb: Facebook
  ) {
    super(injector);
    this.tabBarElement = document.querySelector(".toolbar");
    this.firebase_CurrentScreen("Service Provider Settings Screen");
  }

  ionViewDidLoad() {
    this.showLoadingView("profile-page");
    this.provider = this.user.getUserInfo();
    this.loadData();
    this.loadProvider();
    if (!this.provider.url) {
      this.provider.url = "./assets/imgs/avatar.png";
    }
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, "fade-in", true);
  }

  myCallbackFunction = _params => {
    return new Promise((resolve, reject) => {
      this.provider = _params.data;
      if (_params.type && _params.type === "services") {
        this.services = [];
        this.categories = [];
        for (let service of this.provider.services) {
          for (let c of _params.categories) {
            if (service === c._id) {
              c.selected = false;
              this.categories.push(c);
            }
          }
        }
        for (let cat of this.provider.categories) {
          for (let s of _params.services) {
            if (cat === s._id) {
              s.selected = false;
              this.services.push(s);
            }
          }
        }
      }
      window.localStorage.setItem("user", JSON.stringify(this.provider));
      resolve();
    });
  };

  async loadData() {
    this.services = [];
    let services = [];
    let categories = [];
    if (
      (this.provider.categories && this.provider.categories.length > 0) ||
      (this.provider.services && this.provider.services.length > 0)
    ) {
      let i = 0,
        j = 0;
      for (let category of this.provider.categories) {
        await this.sp.getCategoryById(category).subscribe(
          (service: any) => {
            services.push(JSON.parse(service._body));
            i++;
            if (i === this.provider.categories.length) {
              for (let s of services) {
                s.selected = false;
                this.services.push(s);
              }

              this.servicesLoaded = true;
              if (this.categoriesLoaded) {
                this.showContentView();
                this.onRefreshComplete();
              }
            }
          },
          e => {
            console.error(e);
            this.showErrorView();
            this.onRefreshComplete();
          }
        );
      }

      for (let service of this.provider.services) {
        await this.sp.getServiceById(service).subscribe(
          (category: any) => {
            console.log(category);
            categories.push(JSON.parse(category._body));
            j++;
            if (j === this.provider.services.length) {
              for (let s of categories) {
                s.selected = false;
                this.categories.push(s);
              }

              this.categoriesLoaded = true;
              if (this.servicesLoaded) {
                this.showContentView();
                this.onRefreshComplete();
              }
            }
          },
          e => {
            console.error(e);
            this.showErrorView();
            this.onRefreshComplete();
          }
        );
      }
    } else {
      this.showContentView();
    }
  }

  async loadProvider() {
    await this.sp.getPersonnelById(this.provider._id).subscribe(
      (provider: any) => {
        this.provider = provider;
        this.reviews = provider.reviews;
        this.showContentView();
        this.onRefreshComplete();
      },
      e => {
        console.error(e);
        this.showErrorView();
        this.onRefreshComplete();
      }
    );
  }

  onReload(refresher) {
    this.refresher = refresher;
    this.loadData();
    this.loadProvider();
  }

  EditInfo() {
    this.openPage("EditProInfoPage", { callback: this.myCallbackFunction });
  }

  EditContact() {
    this.openPage("EditProContactPage", { callback: this.myCallbackFunction });
  }

  EditPassword() {
    this.openPage("EditProPassPage", { callback: this.myCallbackFunction });
  }

  EditServices() {
    this.openPage("EditProServicePage", { callback: this.myCallbackFunction });
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
        this.captureDataUrl = imageData;

        console.log(this.captureDataUrl);

        this.showLoadingView("uploading..");

        this.upload_image
          .uploadImage(this.captureDataUrl)
          .then((snapshot: any) => {
            console.log("image:" + snapshot);

            let data = {
              name: this.provider.name,
              avatar: { url: snapshot.url, name: snapshot.name },
              id: this.user.getUserInfo()._id,
              token: this.user.getUserInfo().token
            };

            this.user.editInfo(data).subscribe(
              data => {
                this.provider.url = this.captureDataUrl;
                this.showContentView();
              },
              error => {
                console.log("error3", error);
                this.showContentView();
                this.showToast(error.message);
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
        console.log("error", error);
        this.showContentView();
        // this.showToast('');
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
