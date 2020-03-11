: ${LANG:=en_US.UTF-8}; export LANG
LC_CTYPE=en_US.UTF-8
LC_MESSAGES=en_US.UTF-8
LC_ALL=en_US.UTF-8

export _JAVA_AWT_WM_NONREPARENTING=1
export GOPATH=/media/removable/horo/.go
export GTK_IM_MODULE=ibus
export GTK_IM_MODULE_FILE=/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules.cache
export MPD_HOST=/home/chieri/.mpd/socket
export PYTHONPATH=/home/chieri:/home/chieri/slim:/media/removable/horo/Projects/models/models/research:/media/removable/horo/Projects/models/models/research/slim
export PATH=$PATH:$GOPATH/bin
export QT_IM_MODULE=ibus
export QT_QPA_PLATFORMTHEME=qt5ct
export TEXMFHOME=~/.texmf
export XMODIFIERS=@im=ibus

sxhkd &
tint2 &
# trackma-gtk &
compton -b
xrdb -merge /home/chieri/.config/urxvt/Xresources
feh --bg-fill /home/chieri/dotfiles/utils/1572143388899.png
xsetroot -cursor_name left_ptr &
xmodmap -e "pointer = 1 0 3 4 5"
xinput --set-prop 'Elan Touchpad' 'libinput Tapping Enabled' 1
xinput --set-prop 'Elan Touchpad' 'libinput Horizontal Scroll Enabled' 0
xset s off
mpd
mpc stop
pulseaudio -D
ibus-daemon -d
wmname LG3D
exec bspwm
