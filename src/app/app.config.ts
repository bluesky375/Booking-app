export class AppConfig {

  /* Parse Server URL */
  public static get SERVER_URL(): string {
    return 'http://207.148.12.144:1003/';
  }

  /* Google Maps API Key */
  public static get GOOGLE_MAPS_API_KEY(): string {
    return 'AIzaSyBBfil0LevQE6xWdKL8YLFWKYPveOf_nVc';
  }

  /* Google Analytics Tracking ID  */
  public static get TRACKING_ID(): string {
    return '';
  }

  /* Header color (only Android Multitask view)  */
  public static get HEADER_COLOR(): string {
    return '#ac0150';
  }

}
