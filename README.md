# @realme

> github readme component api kit

## features

- 💅 code highlight
- 📽 sliders with animate

## usage

### `code-highlight`

[codehighlight]: https://realme-ten.vercel.app/api/v1/code-highlight?url=https://raw.githubusercontent.com/JiangWeixian/realme/master/components/Layout.tsx&range=L17-L20

![codehighlight]

_usage ▼_

```markdown
![codehighlight](https://realme-ten.vercel.app/api/v1/code-highlight?url=https://raw.githubusercontent.com/JiangWeixian/realme/master/components/Layout.tsx&range=L17-L20)
```

endpoint

- `https://realme-ten.vercel.app/api/v1/code-highlight`

params

- `title` - code highlight title
- `url` - file remote url
- `range` - code line range in `file remote url`, like `L17-L20`
- `height` - define image height
- `bg` - background web-gradients type, like `Warm Flame`, you can find all kinds of `webgradients` [here](https://webgradients.com/)

### `sliders`

[sliders]: https://realme-ten.vercel.app/api/v1/sliders

![sliders]

_usage ▼_

```markdown
![sliders](https://realme-ten.vercel.app/api/v1/sliders?props=https://raw.githubusercontent.com/JiangWeixian/realme/master/assets/sliders.json)
```

endpoint

- `https://realme-ten.vercel.app/api/v1/sliders`

params

- `props` - json url, josn format like below

  ```ts
  const props = {
    dataSource: {
      value: string // image-base64 string
    }[]
  }
  ```
