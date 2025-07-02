# Building Cinnamon

## General Build Instructions

### Create a Sandbox

When you build projects it produces `.deb` packages in their parent directory, so it's a good idea to create a directory for all your development needs, in which you'll have subdirectories for each project, or each group of projects. This keeps things tidy and well organized in your computer so it becomes easier to search for code across different projects.

We commonly call our main development directory "Sandbox" and place it in our home folder.

```bash
mkdir ~/Sandbox
```

Of course, you can call your "Sandbox" whatever you want and place it anywhere you want as well.

### Install mint-dev-tools

Install the `mint-dev-tools` package from the Linux Mint repositories.

```bash
apt update
apt install mint-dev-tools --install-recommends
```

It contains useful tools to help you compile and develop Linux Mint projects.



### Installing Source

```bash
cd ~/Sandbox
git clone https://github.com/linuxmint/mintinstall.git
```

### First-Time Build

```bash
cd ~/Sandbox/mintinstall
mint-build
```

### Faster Rebuild

```bash
cd ~/Sandbox/mintinstall
dpkg-buildpackage
```

### Build Order
Here is the build order for everything cinnamon
- `cinnamon-translations`
- `cinnamon-desktop`
- `cinnamon-menus`
- `cinnamon-session`
- `cinnamon-settings-daemon`
- `cinnamon-screensaver`
- `cjs`
- `cinnamon-control-center`
- `muffin`
- `cinnamon`
- `nemo`



## For Debian-based Systems

### Add APT Source Repositories

Edit `/etc/apt/sources.list`:

```bash
deb http://packages.linuxmint.com wilma main upstream import
deb-src http://packages.linuxmint.com wilma main upstream import
```

### Install Build Dependencies

```bash
sudo apt-get update
sudo apt-get install dpkg-dev
sudo apt-get build-dep cinnamon cinnamon-control-center cinnamon-desktop \
  cinnamon-menus cinnamon-screensaver cinnamon-session \
  cinnamon-settings-daemon cinnamon-translations cjs muffin nemo
```

### Clone All Repositories

```bash
git clone git://github.com/linuxmint/cinnamon.git
git clone git://github.com/linuxmint/cinnamon-control-center.git
git clone git://github.com/linuxmint/cinnamon-desktop.git
git clone git://github.com/linuxmint/cinnamon-menus.git
git clone git://github.com/linuxmint/cinnamon-screensaver.git
git clone git://github.com/linuxmint/cinnamon-session.git
git clone git://github.com/linuxmint/cinnamon-settings-daemon.git
git clone git://github.com/linuxmint/cinnamon-translations.git
git clone git://github.com/linuxmint/cjs.git
git clone git://github.com/linuxmint/muffin.git
git clone git://github.com/linuxmint/nemo.git
```

### Compile Order

```text
cinnamon-translations
cinnamon-desktop
cinnamon-menus
**INSTALL**
cinnamon-session
cinnamon-settings-daemon
cinnamon-screensaver
cjs
**INSTALL**
cinnamon-control-center
muffin
**INSTALL**
cinnamon
nemo
**INSTALL**
```

### Build

```bash
cd package-name
dpkg-buildpackage
```

### Install

```bash
sudo dpkg -i ../*.deb
```

### Stable Branch

```bash
cd package-name
git checkout stable
dpkg-buildpackage
```



## Other Systems

### Build Dependencies

Install development packages (`*-dev`) for:

**Core:**

* `glib`, `gtk3`, `gobject-introspection`, `meson`, `pulseaudio`, `spidermonkey`, etc.

**Optional:**

* `cups`, `gstreamer`, `libwacom`, `wayland`, etc.

**Python:**

* `dbus-python`, `pexpect`, `pillow`, `pycairo`, `pygobject`, etc.

### Clone All Repositories

Same as in Debian section.

### Compile Order

Same as Debian.

### Compile with Meson

```bash
cd package-name
meson setup builddir
meson compile -C builddir
meson install -C builddir
```

### cinnamon-translations

```bash
cd cinnamon-translations
make
sudo cp -r usr /
```

### Stable Branch

```bash
cd package-name
git checkout stable
meson setup builddir
meson compile -C builddir
meson install -C builddir
```

For `cinnamon-translations`:

```bash
cd cinnamon-translations
git checkout stable
make
sudo cp -r usr /
```
