# @realme

> github readme component api kit

## features

- 💅 code highlight
- 📽 sliders with animate

## usage

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
