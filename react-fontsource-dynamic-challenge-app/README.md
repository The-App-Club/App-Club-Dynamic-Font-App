- Reference
  - [fontsource](https://github.com/fontsource/fontsource)
  - [preview](https://fontsource.org/fonts)
  - [webfontloader](https://www.npmjs.com/package/webfontloader)
  - [react-webfont-loader](https://www.npmjs.com/package/@dr-kobros/react-webfont-loader)
  - [fonts](https://fonts.google.com/)
  - [google-fonts](https://github.com/honeysilvas/google-fonts)
  - [styling-the-good-old-button.html](https://coliss.com/articles/build-websites/operation/css/styling-the-good-old-button.html)

```bash
$ curl -sL https://api.fontsource.org/fontlist | jq '' >fontlist.json

$ cat fontlist.json | jq '.|to_entries|map(select(.value=="google"))|from_entries|keys|map(./"-"|map((.[:1]|ascii_upcase)+(.[2:]))|join(" "))'>google-font-list.json
```
