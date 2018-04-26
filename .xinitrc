: ${LANG:=en_US.UTF-8}; export LANG
LC_CTYPE=en_US.UTF-8
LC_MESSAGES=en_US.UTF-8
LC_ALL=en_US.UTF-8

export QT_QPA_PLATFORMTHEME=gtk2
export _JAVA_AWT_WM_NONREPARENTING=1

sxhkd &
tint2 &
# redshift &
trackma-gtk &
sudo --user=chieri compton -b
sudo --user=chieri xrdb -merge /home/chieri/.config/urxvt/Xresources
feh --bg-fill /home/chieri/^o^/.etc/1524336084033.jpg
xsetroot -cursor_name left_ptr &
xmodmap -e "pointer = 1 0 3 4 5"
xinput --set-prop 'Elan Touchpad' 'libinput Tapping Enabled' 1
xinput --set-prop 'Elan Touchpad' 'libinput Horizontal Scroll Enabled' 0
sudo --user=chieri mpd
mpc stop
# cd ~/.8080/; python -m SimpleHTTPServer 8080 &
# volumeicon &
# qbittorrent &
sudo --user=chieri wmname LG3D
sudo hostname clover
# sudo hostnamectl set-hostname clover
exec bspwm
