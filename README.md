# @realme
> api components design for github readme

## usage

### `sliders`

[sliders]: https://realme-ten.vercel.app/api/sliders

![sliders]

*usage ▼*

```markdown
![sliders](https://realme-ten.vercel.app/api/sliders?props=https://raw.githubusercontent.com/JiangWeixian/realme/master/assets/sliders.json)
```

params

- `props` - json url, josn format like below
  
  ```ts
  const props = {
    dataSource: {
      value: string // image-base64 string
    }[]
  }
  ```

### `code-highlight`

[codehighlight]: https://realme-ten.vercel.app/api/code-highlight?url=https://raw.githubusercontent.com/JiangWeixian/realme/master/components/Layout.tsx&range=L17-L20

![codehighlight]

<img src="./assets/code-highlight.svg" />
dd