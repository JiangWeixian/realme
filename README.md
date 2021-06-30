<div align='center'>

![logo](./assets/realme.svg)

_github readme component api kit_

</div>

## features

- 💅 code highlight
- 📽 sliders with animate

## usage

### `code-highlight`

<div align='center'>

![image-caption](./docs/snapshots/code-highlight.png)  
_▲ code-highlight_

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

<div align='center'>

![image-caption](./docs/snapshots/sliders.png)  
_▲ sliders_

</div>

<details>
  <summary>params</summary>

| name  | description                 |  type  | default | required |
| :---: | :-------------------------- | :----: | :-----: | :------- |
| props | siders props remote raw url | string |    -    | true     |

</details>
