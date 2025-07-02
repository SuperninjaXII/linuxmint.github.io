# how to get started 
To get running you need to serve it over http. You can use live-server(vscode plugin), live-server (node package) look at the example using nodejs npm

#### download live-server 
Download the live-server application using npm globally 
```bash
npm i -g live-server
```

#### running it
To run it go to the folder (on the commandline just cd into the folder )
and run the live-server plugin or on the commandline 

```bash
live-server 
```

## writing documentation 
So , documentation should be written in markdown you can use any markdown editor you feel like
Save the file in the ```documentation```
folder, then Update the  
```index.json```.
##### index.js structure 
The index.json is structured in a category to topics structure,like
```json
{
  "introduction": ["welcome.md","contributing.md","building.md","romeo.md","guidelines.md","reporting-an-issue.md"],
  "cinnamon": [
    "cinnamon.md",
    "write-applet.md",
    "xlet-versioning.md",
    "xlet-settings.md",
    "xlet-settings-ref.md",
    "cjs-optimizations.md",
    "using-documentation.md",
    "documenting-tutorial.md",
    "documenting-source.md"
  ],
  "xapps":["xapps.md"],
  "mint tools":["mint-tools.md"]
}
```

In the example the "introduction is the heading and the files in the [..] are the file you want under that category"
## how to contribute 
1. Fork the reo
2. Make changes to your fork
3. Make a pull request 
Please feel free 