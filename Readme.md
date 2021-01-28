# What is this
Just a simple tool to reload your webextension. It uses a Websocket to update

# Install
```npm i extension-reloader -g```

### add this to your background.js
```javascript
const connectReloader = () => {
    try {
        const ws = new WebSocket("ws://localhost:6699/");
        ws.onopen = () => {
            console.log(" |");
            console.log(" |>  connected to websocket");
        };
        ws.onmessage = (msg) => {
            if(msg.data === "reload") {
                console.log("reload");
                chrome.runtime.reload();
            }
        }
        ws.onclose = () => {
            setTimeout(connectReloader, 300);
        }
    } catch (e) {
        setTimeout(connectReloader, 300);
        return
    }

}

connectReloader();
```

# Run in the root of the webextension (where the manifest.json is). 
### Or in the folder where you wanna watch
```javascript
reloader
```


# full example
https://github.com/zoutepopcorn/simple-extension