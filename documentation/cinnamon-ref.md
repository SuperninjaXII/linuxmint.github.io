
# Cinnamon Projects

Cinnamon is composed of many smaller, interconnected projects. Each project provides a core part of the Cinnamon desktop environment.

---

##  Cinnamon

- **Description**: The shell of Cinnamon (forked from GNOME Shell). Provides panels, menus, hot corners, etc.
- **Languages**: JavaScript (UI), C (core libs)
- **GitHub**: [linuxmint/Cinnamon](https://github.com/linuxmint/Cinnamon)

---

## CJS

- **Description**: A fork of GJS. Acts as the JavaScript bindings bridge (via GObject Introspection), powered by SpiderMonkey.
- **GitHub**: [linuxmint/cjs](https://github.com/linuxmint/cjs)

---

## Cinnamon Control Center

- **Description**: Forked from GNOME Control Center. Powers Cinnamon Settings (mostly in Python, with some C modules).
- **GitHub**: [linuxmint/cinnamon-control-center](https://github.com/linuxmint/cinnamon-control-center)

---

## Cinnamon Desktop

- **Description**: Provides schemas (e.g., `org.cinnamon.desktop.screensaver`) and helper libraries.
- **GitHub**: [linuxmint/cinnamon-desktop](https://github.com/linuxmint/cinnamon-desktop)

---

## MDM (MDM Display Manager)

- **Description**: Display manager forked from GDM. Not exclusive to Cinnamon.
- **GitHub**:
  - [linuxmint/mdm](https://github.com/linuxmint/mdm)
  - [mint-mdm-themes](https://github.com/mint-mdm-themes)
  - [mdm-themes](https://github.com/mdm-themes)

---

## Cinnamon Menus

- **Description**: Provides `libcinnamon-menu` and a simple menu editor.
- **Implements**: Freedesktop.org’s [Desktop Menu Specification](http://freedesktop.org/wiki/Specifications/menu-spec)

Links:
- [Menu Spec (Wiki)](http://freedesktop.org/wiki/Specifications/menu-spec)
- [Menu Spec (Latest)](http://specifications.freedesktop.org/menu-spec/menu-spec-latest.html)

- **GitHub**: [linuxmint/cinnamon-menus](https://github.com/linuxmint/cinnamon-menus)

---

##  Muffin

- **Description**: Cinnamon's window manager. Forked from Mutter (itself forked from Metacity).
- **Integration**: Cinnamon acts as a plugin to Muffin.
- **GitHub**: [linuxmint/muffin](https://github.com/linuxmint/muffin)

---

## 📁 Nemo

- **Description**: Cinnamon's file manager, forked from Nautilus.
- **GitHub**:
  - [linuxmint/nemo](https://github.com/linuxmint/nemo)
  - [linuxmint/nemo-extensions](https://github.com/linuxmint/nemo-extensions)

---

## 🔒 Cinnamon Screensaver

- **Description**: Fork of GNOME Screensaver. Supports xscreensaver hacks, WebKit screensavers, or plugin-based screensavers.
- **GitHub**: [linuxmint/cinnamon-screensaver](https://github.com/linuxmint/cinnamon-screensaver)

---

##  Cinnamon Session

- **Description**: Starts the Cinnamon session (used by MDM, XDM, or custom `.xinitrc`). Loads saved or default session.
- **GitHub**: [linuxmint/cinnamon-session](https://github.com/linuxmint/cinnamon-session)

---

## ⚙️ Cinnamon Settings Daemon

- **Description**: Forked from GNOME Settings Daemon. Provides session-wide services like theming, font configuration, clipboard management, etc.
- **Structure**: Built on a plugin-based architecture.

### 🔍 Plugin Debugging

To list plugins:

```bash
gsettings list-children org.cinnamon.settings-daemon.plugins