:${LANG:=en_US.UTF-8}; export LANG
LC_ALL=en_US.UTF-8
LC_CTYPE=en_US.UTF-8
LC_MESSAGES=en_US.UTF-8

export GTK_IM_MODULE=ibus
export MPD_HOST=/home/$USER/.mpd/socket
export QT_IM_MODULE=ibus
export QT_QPA_PLATFORMTHEME=qt5ct
export TEXMFHOME=~/.texmf
export XMODIFIERS=@im=ibus
export _JAVA_AWT_WM_NONREPARENTING=1

mpc stop
compton -b
tint2 &
sxhkd &
dunst &
xrdb -merge ~/.config/urxvt/Xresources

today=$(date +'%m%d')
if [[ "$today" > "1220" || "$today" < "0319" ]]; then
  feh --bg-fill ~/dotfiles/utils/wallpaper/winter.png
elif [[ "$today" > "0921" ]]; then
  echo fall
  feh --bg-fill ~/dotfiles/utils/wallpaper/winter.png
elif [[ "$today" > "0619" ]]; then
  feh --bg-fill ~/dotfiles/utils/wallpaper/summer.jpg
else
  echo spring
  feh --bg-fill ~/dotfiles/utils/wallpaper/winter.png
fi

setxkbmap -option caps:super
xcape -e 'Super_L=Escape'
xsetroot -cursor_name left_ptr &
xmodmap -e "pointer = 1 0 3 4 5"
xinput --set-prop 'Elan Touchpad' 'libinput Tapping Enabled' 1
xinput --set-prop 'Elan Touchpad' 'libinput Horizontal Scroll Enabled' 0
xset s off

redshift &
pulseaudio -D
ibus-daemon -d --xim
discord &
trackma-qt &
wmname LG3D

exec bspwm
