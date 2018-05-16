: ${LANG:=en_US.UTF-8}; export LANG
LC_CTYPE=en_US.UTF-8
LC_MESSAGES=en_US.UTF-8
LC_ALL=en_US.UTF-8

export _JAVA_AWT_WM_NONREPARENTING=1
export GOPATH=/media/removable/horo/.go
export MPD_HOST=/home/chieri/.mpd/socket
export PYTHONPATH=/home/chieri:/home/chieri/slim:/media/removable/horo/Projects/models/models/research:/media/removable/horo/Projects/models/models/research/slim
export PATH=$PATH:$GOPATH/bin
export TEXMFHOME=~/.texmf

sxhkd &
tint2 &
trackma-gtk &
compton -b
xrdb -merge /home/chieri/.config/urxvt/Xresources
feh --bg-fill /home/chieri/dotfiles/utils/1524336084033.jpg
xsetroot -cursor_name left_ptr &
xmodmap -e "pointer = 1 0 3 4 5"
xinput --set-prop 'Elan Touchpad' 'libinput Tapping Enabled' 1
xinput --set-prop 'Elan Touchpad' 'libinput Horizontal Scroll Enabled' 0
mpd
mpc stop
wmname LG3D
exec bspwm
