# ~/.bashrc: xeecuted by bash(1) for non-login shells.

# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
*i*) ;;
*) return ;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
#[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
  debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
xterm-color) color_prompt=yes ;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
  if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
    # We have color support; assume it's compliant with Ecma-48
    # (ISO/IEC-6429). (Lack of such support is extremely rare, and such
    # a case would tend to support setf rather than setaf.)
    color_prompt=yes
  else
    color_prompt=
  fi
fi

git_branch() {
  git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1) /'
}

if [ "$color_prompt" = yes ]; then
  if [ "$HOSTNAME" = localhost ]; then
    PS1='\[\033[01;36m\]\u\[\033[01;34m\]@\[\033[01;36m\]clover \[\033[01;32m\]\w \[\033[01;31m\]$(git_branch)\[\033[01;36m\]> \[\033[00m\]'
  else
    # PS1='\[\033[01;36m\]\u\[\033[01;34m\]@\[\033[01;36m\]\h \[\033[01;32m\]\w \[\033[01;31m\]$(git_branch)\[\033[01;36m\]> \[\033[00m\]'
    PS1='\[\033[01;36m\]\u\[\033[01;34m\]@\[\033[01;36m\]rye \[\033[01;32m\]\w \[\033[01;31m\]$(git_branch)\[\033[01;36m\]> \[\033[00m\]'
  fi
else
  if [ "$HOSTNAME" = localhost ]; then
    PS1='\u@clover \w $(git_branch)> '
  else
    PS1='\u@\h $(git_branch)\w > '
  fi
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm* | rxvt* | alacritty)
  PS1="\[\e]0;\u: \w\a\]$PS1"
  ;;
*) ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
  test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
fi

if [ -f ~/.bash_aliases ]; then
  . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

if [ -z "$SSH_AUTH_SOCK" ]; then
  eval $(ssh-agent -s) &>/dev/null
  ssh-add &>/dev/null
fi

if [ -d "$HOME/dotfiles/utils/bin" ]; then
  PATH="$HOME/dotfiles/utils/bin:$PATH"
fi

if [ -d "$HOME/Android/Sdk/emulator" ]; then
  PATH="$HOME/Android/Sdk/emulator:$PATH"
fi

if [ -d "$HOME/Android/Sdk/platform-tools" ]; then
  PATH="$HOME/Android/Sdk/platform-tools:$PATH"
fi

set -o vi

export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

export HOST_IP="$(ip route | awk '/^default/{print $3}')"
export PULSE_SERVER="tcp:$HOST_IP"
export DISPLAY="$HOST_IP:0.0"

# partial prompt history
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'

_bun_check_completions() {
  # Check if the current command is 'bun check'
  if [ "${COMP_WORDS[1]}" = "check" ] && [ -d "./problems/" ]; then
    local current="${COMP_WORDS[COMP_CWORD]}"
    COMPREPLY=($(compgen -W "$(ls ./problems/)" -- "$current"))
  fi
}
complete -F _bun_check_completions bun
