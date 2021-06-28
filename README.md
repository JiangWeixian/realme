# @realme
> api components design for github readme

## usage

### `sliders`

[sliders]: https://realme-ten.vercel.app/api/v1/sliders

![sliders]

*usage ▼*

```markdown
![sliders](https://realme-ten.vercel.app/api/v1/sliders?props=https://raw.githubusercontent.com/JiangWeixian/realme/master/assets/sliders.json)
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

[codehighlight]: https://realme-ten.vercel.app/api/v1/code-highlight?url=https://raw.githubusercontent.com/JiangWeixian/realme/master/components/Layout.tsx&range=L17-L20

![codehighlight]