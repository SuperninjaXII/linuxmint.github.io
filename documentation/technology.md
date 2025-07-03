
# Technology

This chapter gives you an overview of the technology we're using.

## Computer Languages

We use a variety of computer languages in Linux Mint.You don't need to know them all and you don't need to know them well. It really depends on which project you want to work and what you want to achieve.Here are the languages we use the most.

### Python

Scripts which run in terminals or in the background are usually either written in [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) or in [Python](https://www.python.org/).Some software applications and most configuration tools are also written in Python.
The advantage of Python is that it is easy to learn and fast to develop with.[here is documentation](https://pygobject.gnome.org)

### C

Many software applications and most libraries are written in [C](https://en.wikipedia.org/wiki/C_(programming_language)).
The C language is low-level, hard to master and tedious to develop with, but it gives fast performance and it's the most supported language in Linux (everything is accessible from C).
The libraries most used [gtkmm](https://gtkmm.gnome.org/en/index.html) , some of the apps made with this are Inkscape, Ardour, GParted, and MySQL Workbench

### JavaScript

The graphical elements of Cinnamon, as well as Cinnamon applets, desklets and extensions are written in [Javascript](https://en.wikipedia.org/wiki/JavaScript).
To write applications you can `CJS(cinnamon for javascript)` or `GJS (gnome for javascript)`[here is documentation](https://gjs.guide)
.
### Vala

[Vala](https://wiki.gnome.org/Projects/Vala) is used in Slick Greeter (the login screen).Vala is a programming language which wraps GNOME libraries and outputs C code.[vala docs](https://vala.dev)

## GNOME Toolkit and Libraries

All our user interfaces use the [GTK3](https://developer.gnome.org/gtk3/stable/) toolkit.
Our development relies heavily on the [GNOME libraries](https://developer.gnome.org/), in particular we use Gio, GLib, GObject and dconf a lot.
In C we access these libraries directly while in Python and JavaScript we access them via [GObject Introspection](https://gi.readthedocs.io/en/latest/).

## Tools

### Development Environment

To write and edit code, you can use anything you want. Some people prefer lightweight editors while others prefer full-fledged IDE's. It's a matter of taste. Development is all about fun, so what matters the most is that you love the tools you use.

If you're not sure what to use, have a look around and try a few editors/IDE's until you find your favourite one.

Many developers within the team use [Sublime](https://www.sublimetext.com/).

```bash
apt update
apt install sublime-text
````

If you install Sublime, also install its [Package Control](https://packagecontrol.io/installation) and then use it to install the `GitGutter` and `TrailingSpaces` extensions.
[Visual Studio Code](https://code.visualstudio.com/) is also very popular within the team.
You can also check out [emacs](), [kate](https://apps.kde.org/kate/) and [neovim](https://neovim.io).
And if you want a complete IDE, there's also [jetbrains ides](https://www.jetbrains.com/ides/#choose-your-ide) and [gnome builder](https://apps.gnome.org/Builder/).

### Version Control

There's less choice when it comes to version control because we're all using git and nothing else. All our code is version-controlled with it.

That being said, you don't necessarily have to use the git command line.
Here are a few tools you can use to make using git easier. `Sublime merge` is very amazing free application for version control its beautiful and user freindly [sublime merge](https://www.sublimemerge.com).Another one is `git kraken` it is a very user freindly and proffesional tool [git kraken](https://www.gitkraken.com/lp/e3)

You can also look at`gitg` which is very similar and it looks better (it's using Gtk), but its feature set is slightly different.

```bash
apt update
apt install gitg
cd ~/Sandbox/
git clone https://github.com/linuxmint/mintsystem.git
cd mintsystem
gitg
```

> **Note:** gitg is included in [mint-dev-tools](https://linuxmint-developer-guide.readthedocs.io/en/latest/setup.html#install-mint-dev-tools/). You can find gitg and other tools that will help with development on mint already installed.

From the repository you can also look at `git-cola` and `git-gui`.

If you're looking for a more complete solution, have a look at [Gitkraken](https://www.gitkraken.com/).
And last but not least, check the plugins and features available in your IDE/editor. Visual Studio Code, [neovim](https://astronvim.com) and Sublime in particular come with a lot of support for Git and Github.

### Glade

We can write our user interfaces in programming language, or we can use Glade and draw them with the mouse.

[Glade](https://glade.gnome.org/) is a tool to design and edit GTK user interfaces and save them in XML (in a `.glade` or `.ui` file).

```bash
apt update
apt install glade
```

Once a user interface is saved, we simply tell our program to open that file and we can access the widgets from it programmatically.

Many of our projects separate the code from the user interface.

### Devhelp

Devhelp shows the reference manuals for the development libraries installed on your computer. For most libraries, the documentation is included in their `-dev` or `-doc` package (for instance, if you're working with GTK3, make sure to install `libgtk-3-dev` and `libgtk-3-doc`).

```bash
apt update
apt install devhelp
```

You can launch DevHelp from the applications menu and use it to browse or search the libraries reference manuals. You'll often need to check the syntax or the arguments of a particular function. It's nice to be able to get the information locally without having to search online.

### d-feet

Some programs use DBus to communicate with others. We use d-feet to browse and troubleshoot DBus.

```bash
apt update
apt install d-feet
```

With d-feet you can quickly find a service on DBus, browse its interface and even call some of its functions manually.

### Meld

Meld is a visual diff tool. It shows the differences between two files and it's great at it.

```bash
apt update
apt install meld
```

### Other Cool Tools

Most of our configuration is stored in dconf and we use gsettings (from the command line) to look at it or modify it. If you want to do it graphically, you can install dconf-editor.

awf is useful to test widgets when working on GTK themes.

```bash
apt update
apt install awf-gtk3 dconf-editor
```



