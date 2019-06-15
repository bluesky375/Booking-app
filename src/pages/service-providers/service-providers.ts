import { Component, Injector, Renderer } from "@angular/core";
import { Platform } from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { ServicesProvider } from "../../providers/services";
import { User } from "../../providers/user";
import { ImgLoader } from "ionic-image-loader";

@Component({
  selector: "page-service-providers",
  templateUrl: "service-providers.html"
})
export class ServiceProvidersPage extends BasePage {
  providers: any = [];
  loaded: boolean = false;
  num: number = 0;
  loadMore: boolean = true;

  constructor(
    injector: Injector,
    public platform: Platform,
    public sp: ServicesProvider,
    public user: User,
    public renderer: Renderer
  ) {
    super(injector);
    this.firebase_CurrentScreen("Service Providers Screen");
  }

  ionViewDidLoad() {
    // this.showLoadingView('service-providers');
    this.loadData("");
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, "fade-in", true);
  }

  async loadData(type) {
    await this.sp.getPersonnel(this.num).subscribe(
      data => {
        if (type !== "more") this.providers = [];

        if (data.length > 0) {
          if (data.length < 6) this.loadMore = false;

          for (let i of data) {
            this.providers.push(i);
          }

          this.showContentView();
        } else {
          this.loadMore = false;
          if (type !== "more") this.showEmptyView();
        }

        this.loaded = true;

        this.onRefreshComplete();
      },
      e => {
        this.loaded = true;
        console.log(e);
        this.showErrorView();
        this.onRefreshComplete();
      }
    );
  }

  onReload(refresher) {
    this.num = 0;
    this.loadMore = true;
    this.refresher = refresher;
    this.loadData("");
  }

  onLoadMore(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.num = this.num + 6;
    this.loadData("more");
  }
}
