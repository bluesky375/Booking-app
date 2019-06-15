import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonData {

  constructor(public http: Http) {}

  getServices(){
    return {
      "categories": [
        {
          "name": "Makeup",
          "image": "naomimakeup_b.svg",
          "image_hover": "naomimakeup_g.svg",
          "services":[
            {
              "info": [
                {
                  "title": "Makeup Session Process",
                  "description": "kindly remove makeup before appointment if possible,\n" +
                  "clean face and hydrate skin. Before appointment and if applicable the Naomi team will\n" +
                  "contact you to know your wishes and your type of skin."
                }
              ]
            },
            {
              "services":[
                {
                  "title": "Nude Makeup",
                  "description": "In nude makeup, a particular attention is given to the skin and\n" +
                  "complexion. The colours are washed and the face looks fresh and neat. Our\n" +
                  "beauty advisors adapt the nude type to your face morphology and use basic\n" +
                  "nude colours from our luxury product selection.",
                  "duration":"30 minutes",
                  "price":"150GHc ($30)"
                },
                {
                  "title": "Contour and Highlight Makeup",
                  "description": "Our Beauty Advisors analyse your specific\n" +
                  "features and come up with a diagnostic of your face shape. They share with you\n" +
                  "the best techniques to enhance your own beauty by playing with shades and\n" +
                  "light.",
                  "duration":"40 minutes",
                  "price":"GHS170 ($35)"
                },
                {
                  "title": "Evening Makeup",
                  "description": "Evening look is crucial and you need to look classy and\n" +
                  "impeccable all night without necessarily touching up. We want you to enjoy the\n" +
                  "night eating, drinking, talking, dancing. The evening look puts the accent on an\n" +
                  "ultramodern eye makeup and natural yet defined and gorgeous lips.",
                  "duration":"50 minutes",
                  "price":"GHS170 ($35)"
                },
                {
                  "title": "Bold Colours",
                  "description": "Lift up your look with strong daring colours. Our Beauty Advisors\n" +
                  "will guide you to choose the right colours; enhance your look and match your\n" +
                  "skin tone. Includes eye lashes.",
                  "duration":"50 minutes",
                  "price":"GHS200 ($45)"
                },
                {
                  "title": "Glamorous Evening Makeup",
                  "description": "Full glamorous makeup always look classy and\n" +
                  "elegant. This look is perfect for your parties and red carpet events. Our Beauty\n" +
                  "Advisors help you define the perfect style and look for an amazing evening.\n" +
                  "Includes eye lashes.",
                  "duration":"50 minutes",
                  "price":"GHS200 ($45)"
                },
                {
                  "title": "Trial & Wedding Day",
                  "description": "Your wedding day is the biggest, happiest, and most memorable days of your\n" +
                  "life! Get into our expertise, our brushes and luxurious products to make this day\n" +
                  "unprecedented for yourself, your groom and loved ones.",
                  "duration":"",
                  "price":"GHS1000 ($220)"
                }
              ]
            }
          ]
        },
        {
          "name": "Hair",
          "image": "naomihair_b.svg",
          "image_hover": "naomihair_g.svg",
          "services":[
            {
              "info": [
                {
                  "title": "Hair Session Process",
                  "description": "kindly have hair clean and ready."
                }
              ]
            },
            {
              "services":[
                {
                  "title": "Natural Haircut & Styling",
                  "description": "",
                  "duration":"60 minutes",
                  "price":"GHS100 ($20)"
                },
                {
                  "title": "Weave (without hair)",
                  "description": "",
                  "duration":"90 minutes",
                  "price":"GHS200 ($40)"
                },
                {
                  "title": "Evening Makeup",
                  "description": "",
                  "duration":"50 minutes",
                  "price":"GHS170 ($35)"
                },
                {
                  "title": "Braids (Short)",
                  "description": "",
                  "duration":"90 minutes",
                  "price":"GHS200 ($40)"
                },
                {
                  "title": "Braids (Long)",
                  "description": "",
                  "duration":"120 minutes",
                  "price":"GHS300 ($60)"
                },
                {
                  "title": "Braids (Cornrow)",
                  "description": "",
                  "duration":"90 minutes",
                  "price":"GHS200 ($40)"
                }
              ]
            }
          ]
        },
        {
          "name": "Nail",
          "image": "naominail_b.svg",
          "image_hover": "naominail_g.svg",
          "services":[
            {
              "info": [
                {
                  "title": "Nail Session Process",
                  "description": "kindly remove nail polish before appointment if possible and wash hands."
                }
              ]
            },
            {
              "services":[
                {
                  "title": "Nail Care and Manicure",
                  "description": "You use your hands all day and like any other\n" +
                  "parts of the body, your hands need to be loved and cared for. When your\n" +
                  "hands look good, they contribute to your fabulous total look. Our Beauty\n" +
                  "Advisors will help you identify the overall health of your nails and give you a\n" +
                  "magnificent manicure to go.",
                  "duration":"30 minutes",
                  "price":"GHS150 ($30)"
                },
                {
                  "title": "Nail Care and Semi-permanent Manicure",
                  "description": "You use your hands all day and\n" +
                  "like any other parts of the body, your hands need to be loved and cared for.\n" +
                  "When your hands look good, they contribute to your fabulous total look. Our\n" +
                  "Beauty Advisors will help you identify the overall health of your nails and give\n" +
                  "you a magnificent manicure to go.",
                  "duration":"40 minutes",
                  "price":"GHS170 ($35)"
                },
                {
                  "title": "Gel Manicure",
                  "description": "You use your hands all day and like any other parts of the\n" +
                  "body, your hands need to be loved and cared for. When your hands look\n" +
                  "good, they contribute to your fabulous total look. Our Beauty Advisors will\n" +
                  "help you identify the overall health of your nails and give you a magnificent\n" +
                  "manicure to go.",
                  "duration":"45 minutes",
                  "price":"GHS200 ($45)"
                },
                {
                  "title": "Semi-permanent Gel Manicure",
                  "description": "You use your hands all day and like any\n" +
                  "other parts of the body, your hands need to be loved and cared for. When\n" +
                  "your hands look good, they contribute to your fabulous total look. Our Beauty\n" +
                  "Advisors will help you identify the overall health of your nails and give you a\n" +
                  "magnificent manicure to go.",
                  "duration":"50 minutes",
                  "price":"GHS230 ($50)"
                }
              ]
            }
          ]
        }
      ],
      "offers": [
        {
          "name": "Makeup",
          "title": "Monday manicures",
          "description": "Monday manicures for GHS20!!",
          "expiry":"28th August - 30th August",
          "validity": "1 person"
        },
        {
          "name": "Nail",
          "title": "Monday manicures",
          "description": "Special Friday facials for GHS30!!",
          "expiry":"18th August - 20th August",
          "validity": "1 person"
        }
        ,
        {
          "name": "Nail",
          "title": "Monday manicures",
          "description": "Monday manicures for GHS20!!",
          "expiry":"18th August - 20th August",
          "validity": "1 person"
        },
        {
          "name": "Makeup",
          "title": "Monday manicures",
          "description": "Special facial and Manicure for GHS30!!",
          "expiry":"18th August - 20th August",
          "validity": "1 person"
        },
        {
          "name": "Hair",
          "title": "Monday manicures",
          "description": "Special facial and Manicure for GHS30!!",
          "expiry":"18th August - 20th August",
          "validity": "1 person"
        },
        {
          "name": "Hair",
          "title": "Monday manicures",
          "description": "Monday manicures for GHS20!!",
          "expiry":"18th August - 20th August",
          "validity": "1 person"
        },
        {
          "name": "Makeup",
          "title": "Monday manicures",
          "description": "Monday manicures for GHS20!!",
          "expiry":"18th August - 20th August",
          "validity": "1 person"
        },
        {
          "name": "Hair",
          "title": "Monday manicures",
          "description": "Monday manicures for GHS20!!",
          "expiry":"18th August - 20th August",
          "validity": "1 person"
        }
        ]
    }
  }
}
