## a11yCan

## Description

A11yCan is a react JS application which tests for a preset list of website URLs for accessibility requirements based on search input of a type.

This project evolved from a reading about accessibility and learning about the a11y movement. I was curious to see what sites were more inclusive than others. The original ( and future) direction was to integrate accessibility testing for the input urls.

### Technical Used

- React App
- Ajax for API
- Cloud Firestore database
- Google lighthouse data from webpages ( generates accessibility score from 0-100)

### Wireframes

The design of data flows from the App component in the following way:
[a11yCan - Flowchart.pdf](https://github.com/SEI2-jeddah/README-Template/files/9034994/a11yCan.-.Flowchart.pdf)

Final product visual
<img width="883" alt="Screen Shot 2022-07-01 at 1 13 26 AM" src="https://user-images.githubusercontent.com/107122118/177045923-8d0acafe-ab55-4b01-a44d-c5f8db30dfa8.png">

### Future Directions

Extending function to incorporate an API or library to internally test for accessibility results in WCGA
Below are examples I have tried:

-> library a11y-sitechecker: [https://github.com/forsti0506/a11y-sitechecker] revied here [https://kandi.openweaver.com/typescript/forsti0506/a11y-sitechecker]

-> API [http://observatorioweb.ups.edu.ec/owa/apirest.jsf] retrieved from the paper [https://www.scitepress.org/Papers/2016/58324/58324.pdf] but ran into issues with CORS

Some accessibility checkers have APIs available but require paid subscriptions eg siteimprove

## APIs Used

Firebase REST API connecting to projecta11y database
[https://firestore.googleapis.com/v1/projects/projecta11y/databases/(default)/documents/domains]

Object stored in documents array containing one domain containing 'colllection' objects. See below for format of collection:

```
{
      "name": "projects/projecta11y/databases/(default)/documents/domains/4ZVVblRma5XP7eiqePWD",
      "fields": {
        "url": {
          "stringValue": "https://timesofindia.indiatimes.com/world"
        },
        "accScore": {
          "stringValue": "38"
        },
        "name": {
          "stringValue": "Times of India"
        },
        "type": {
          "stringValue": "news"
        }
      },
      "createTime": "2022-06-27T04:08:39.675915Z",
      "updateTime": "2022-06-29T15:12:17.203458Z"
    },

```

Example of endpoint data format :

```
"documents": [
    {
      "name": "projects/projecta11y/databases/(default)/documents/domains/4ZVVblRma5XP7eiqePWD",
      "fields": {
        "name": {
          "stringValue": "Times of India"
        },
        "type": {
          "stringValue": "news"
        },
        "accScore": {
          "stringValue": "38"
        },
        "url": {
          "stringValue": "https://timesofindia.indiatimes.com/world"
        }
      },
      "createTime": "2022-06-27T04:08:39.675915Z",
      "updateTime": "2022-06-29T15:12:17.203458Z"
    },
    {
      "name": "projects/projecta11y/databases/(default)/documents/domains/5NxbJ4sbrJtRSKO0MjwI",
      "fields": {
        "name": {
          "stringValue": "NPR"
        },
        "url": {
          "stringValue": "https://www.npr.org/sections/world/"
        },
        "type": {
          "stringValue": "news"
        },
        "accScore": {
          "stringValue": "88"
        }
      },
      "createTime": "2022-06-27T04:13:47.370531Z",
      "updateTime": "2022-06-29T15:11:59.654039Z"
    }
     ],
  "nextPageToken": "AFTOeJxDf0vLATa5kJ3bU5084ojJ3w4cj12ugQxY31gKFvdEBn3nj4WP6l9ij6nfI59D0znq6Q0A0gumaTurlAsZtG7hvvALQi7yGkJsJxYpLT9kC1_azxiLoqDusFbQJvk"
}
```

The limit for calls is 20 collections. If you require more collections add {?pageSize=200}, to the end of the API url, where 200 is the desired amount of calls.

---

## Acknowledgments

Thanks to the GA team - ZhenHao, Nyna and Desmond for help with the workflow, firestore access and object retreival!

---
