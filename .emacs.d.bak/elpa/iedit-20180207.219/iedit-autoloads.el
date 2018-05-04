;;; iedit-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "iedit" "../../../../.emacs.d/elpa/iedit-20180207.219/iedit.el"
;;;;;;  "a6cd8b4b00fac3cba7503043b10ae56e")
;;; Generated autoloads from ../../../../.emacs.d/elpa/iedit-20180207.219/iedit.el

(autoload 'iedit-mode "iedit" "\
Toggle Iedit mode.
This command behaves differently, depending on the mark, point,
prefix argument and variable `iedit-transient-mark-sensitive'.

If Iedit mode is off, turn Iedit mode on.

When Iedit mode is turned on, all the occurrences of the current
region in the buffer (possibly narrowed) or a region are
highlighted.  If one occurrence is modified, the change are
propagated to all other occurrences simultaneously.

If region is not active, `iedit-default-occurrence' is called to
get an occurrence candidate, according to the thing at point.  It
might be url, email address, markup tag or current symbol(or
word).

In the above two situations, with digit prefix argument 0, only
occurrences in current function are matched.  This is good for
renaming refactoring in programming.

You can also switch to Iedit mode from isearch mode directly. The
current search string is used as occurrence.  All occurrences of
the current search string are highlighted.

With an universal prefix argument, the occurrence when Iedit mode
is turned off last time in current buffer is used as occurrence.
This is intended to recover last Iedit mode which is turned off.
If region active, Iedit mode is limited within the current
region.

With repeated universal prefix argument, the occurrence when
Iedit mode is turned off last time (might be in other buffer) is
used as occurrence.  If region active, Iedit mode is limited
within the current region.

With digital prefix argument 1, Iedit mode is limited on the
current symbol or the active region, which means just one
instance is highlighted.  This behavior serves as a start point
of incremental selection work flow.

If Iedit mode is on and region is active, Iedit mode is
restricted in the region, e.g. the occurrences outside of the
region is excluded.

If Iedit mode is on and region is active, with an universal
prefix argument, Iedit mode is restricted outside of the region,
e.g. the occurrences in the region is excluded.

Turn off Iedit mode in other situations.

Commands:
\\{iedit-mode-keymap}
Keymap used within overlays:
\\{iedit-mode-occurrence-keymap}

\(fn &optional ARG)" t nil)

(autoload 'iedit-mode-toggle-on-function "iedit" "\
Toggle Iedit mode on current function.

\(fn)" t nil)

;;;***

;;;### (autoloads nil "iedit-rect" "../../../../.emacs.d/elpa/iedit-20180207.219/iedit-rect.el"
;;;;;;  "0f0291574a9e269e5072c3d9d4e9ff4a")
;;; Generated autoloads from ../../../../.emacs.d/elpa/iedit-20180207.219/iedit-rect.el

(autoload 'iedit-rectangle-mode "iedit-rect" "\
Toggle Iedit-rect mode.

When Iedit-rect mode is on, a rectangle is started with visible
rectangle highlighting.  Rectangle editing support is based on
Iedit mechanism.

Commands:
\\{iedit-rect-keymap}

\(fn &optional BEG END)" t nil)

;;;***

;;;### (autoloads nil nil ("../../../../.emacs.d/elpa/iedit-20180207.219/iedit-autoloads.el"
;;;;;;  "../../../../.emacs.d/elpa/iedit-20180207.219/iedit-lib.el"
;;;;;;  "../../../../.emacs.d/elpa/iedit-20180207.219/iedit-pkg.el"
;;;;;;  "../../../../.emacs.d/elpa/iedit-20180207.219/iedit-rect.el"
;;;;;;  "../../../../.emacs.d/elpa/iedit-20180207.219/iedit.el")
;;;;;;  (23266 3766 108043 656000))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; iedit-autoloads.el ends here
