;;; eyebrowse-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "eyebrowse" "../../../../.emacs.d/elpa/eyebrowse-20171216.944/eyebrowse.el"
;;;;;;  "9d08e85c15de653bda6884874dd1c193")
;;; Generated autoloads from ../../../../.emacs.d/elpa/eyebrowse-20171216.944/eyebrowse.el

(autoload 'eyebrowse-setup-evil-keys "eyebrowse" "\
Set up key bindings specific to Evil.
Currently only gt, gT, gc and zx are supported.

\(fn)" nil nil)

(autoload 'eyebrowse-setup-opinionated-keys "eyebrowse" "\
Set up more opinionated key bindings for using eyebrowse.

M-0..M-9, C-< / C->, C-'and C-\" are used for switching.  If Evil
is detected, extra key bindings will be set up with
`eyebrowse-setup-evil-keys' as well.

\(fn)" nil nil)

(defvar eyebrowse-mode nil "\
Non-nil if Eyebrowse mode is enabled.
See the command `eyebrowse-mode' for a description of this minor mode.
Setting this variable directly does not take effect;
either customize it (see the info node `Easy Customization')
or call the function `eyebrowse-mode'.")

(custom-autoload 'eyebrowse-mode "eyebrowse" nil)

(autoload 'eyebrowse-mode "eyebrowse" "\
Toggle `eyebrowse-mode'.
This global minor mode provides a set of keybindings for
switching window configurations.  It tries mimicking the tab
behaviour of `ranger`, a file manager.

\(fn &optional ARG)" t nil)

;;;***

;;;### (autoloads nil nil ("../../../../.emacs.d/elpa/eyebrowse-20171216.944/eyebrowse-autoloads.el"
;;;;;;  "../../../../.emacs.d/elpa/eyebrowse-20171216.944/eyebrowse.el")
;;;;;;  (23266 3786 191232 498000))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; eyebrowse-autoloads.el ends here
