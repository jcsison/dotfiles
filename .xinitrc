: ${LANG:=en_US.UTF-8}; export LANG
LC_ALL=en_US.UTF-8
LC_CTYPE=en_US.UTF-8
LC_MESSAGES=en_US.UTF-8

export GTK_IM_MODULE=ibus
export GTK_IM_MODULE_FILE=/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules.cache
export MPD_HOST=/home/$USER/.mpd/socket
export QT_IM_MODULE=ibus
export QT_QPA_PLATFORMTHEME=qt5ct
export TEXMFHOME=~/.texmf
export XMODIFIERS=@im=ibus
export _JAVA_AWT_WM_NONREPARENTING=1

sxhkd &
tint2 &
compton -b
xrdb -merge /home/$USER/.config/urxvt/Xresources
feh --bg-fill /home/$USER/dotfiles/utils/wallpaper/1572143388899.png

setxkbmap -option caps:super
xsetroot -cursor_name left_ptr &
xmodmap -e "pointer = 1 0 3 4 5"
xinput --set-prop 'Elan Touchpad' 'libinput Tapping Enabled' 1
xinput --set-prop 'Elan Touchpad' 'libinput Horizontal Scroll Enabled' 0
xset s off

/usr/lib/notification-daemon/notification-daemon &
pulseaudio -D
mpd
mpc stop
ibus-daemon -d
discord &
trackma-qt &
wmname LG3D

exec bspwm
