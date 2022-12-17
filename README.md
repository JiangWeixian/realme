<div align='center'>

![logo](./assets/realme.svg)

_github readme component api kit_

</div>

<a href="https://www.producthunt.com/posts/realme?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-realme" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=302886&theme=light" alt="realme - some api kit help you write beautify markdown | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## usage

### `banner`

```md
![banner](
  https://realme-ten.vercel.app/api/v1/banner.svg
  ?colorA=831843
  &colorB=be185d
  &textColor=f472b6
  &title=World!
  &subtitle=Hello
)
```

👇

<div align='center'>


![banner](https://realme-ten.vercel.app/api/v1/banner.svg?colorA=831843&colorB=be185d&textColor=f472b6&title=World!&subtitle=Hello)

_▲ banner_ / [playground](https://realme-ten.vercel.app/editor/hero)

</div>

**(recommended)** pick color from [tailwindcss](https://tailwindcss.com/docs/customizing-colors), **900 -> colorA, 700 -> colorB, 400 -> textColor**

### `webgradients`

```md
![webgradients](
  https://realme-ten.vercel.app/api/v1/webgradients.svg
  ?title=hello+world
  &subtitle=indiehackers
  &desc=happy+hacking
  &radialgradiets=true
  &webgradientsName=HappyFisher
```

👇

<div align='center'>


![webgradients](https://realme-ten.vercel.app/api/v1/webgradients.svg?title=hello+world&subtitle=indiehackers&desc=happy+hacking&radialgradiets=true&webgradientsName=HappyFisher)

_▲ webgradients_ / [playground](https://realme-ten.vercel.app/editor/webgradients)

</div>

### `typical`

```md
![typical](
  https://realme-ten.vercel.app/api/v1/typical.svg
  ?steps=hello
  &steps=1000
  &steps=hello%20world
  &steps=500
  &steps=hello%20realme
```

👇

<div align='center'>


![typical](https://realme-ten.vercel.app/api/v1/typical.svg?steps=hello&steps=1000&steps=hello%20world&steps=500&steps=hello%20realme)

_▲ typical_ / [playground](https://realme-ten.vercel.app/editor/typical)

</div>

# 
<div align='right'>

*built with ❤️ by username*

</div>

<details>

<summary>unstable</summary>
<p>

### `code-highlight`


```md
![codehighlight](
  https://realme-ten.vercel.app/api/v1/code-highlight
  ?path=/JiangWeixian/realme/master/README.md
  &range=L10-L13&title=README.md
)
```

👇

<div align='center'>


![codehighlight](https://realme-ten.vercel.app/api/v1/code-highlight?path=/JiangWeixian/realme/master/README.md&range=L10-L13&title=README.md)

_▲ code-highlight_ / [demo](./docs/code-highlight.md)

</div>

<details>
  <summary>params</summary>

|  name  | description                                                                                                                 |  type  |   default    | required |
| :----: | :-------------------------------------------------------------------------------------------------------------------------- | :----: | :----------: | :------- |
| title  | code highlight title                                                                                                        | string |  Untitled-1  | false    |
|  url   | file remote raw url                                                                                                         | string |      -       | true     |
|  path  | file remote path, without github raw prefix, etc `/JiangWeixian/realme/master/README.md`                                    | string |      -       | true     |
| range  | line number range, etc `L17-L20`                                                                                            | string |      -       | true     |
| height | image height                                                                                                                | number |      -       | false    |
|   bg   | background web-gradients type, etc `Warm Flame`, you can find all kinds of `webgradients` [here](https://webgradients.com/) | string | `Warm Flame` | false    |

</details>

### `sliders`

```md
![sliders](
  https://realme-ten.vercel.app/api/v1/sliders
  ?props=https://jsonkeeper.com/b/5FE5
)
```

👇

<div align='center'>

![sliders](https://realme-ten.vercel.app/api/v1/sliders?props=https://jsonkeeper.com/b/5FE5) 
_▲ sliders_ / [demo](./docs/sliders.md)

</div>

<details>
  <summary>params</summary>

| name  | description                 |  type  | default | required |
| :---: | :-------------------------- | :----: | :-----: | :------- |
| props | siders props remote raw url | string |    -    | true     |

</details>


</p>
</details>

