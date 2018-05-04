;;; move-text-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "move-text" "../../../../.emacs.d/elpa/move-text-20170908.2030/move-text.el"
;;;;;;  "6ca83e188b271ec78c608d18d4469f5f")
;;; Generated autoloads from ../../../../.emacs.d/elpa/move-text-20170908.2030/move-text.el

(autoload 'move-text--total-lines "move-text" "\
Convenience function to get the total lines in the buffer / or narrowed buffer.

\(fn)" nil nil)

(autoload 'move-text--at-first-line-p "move-text" "\
Predicate, is the point at the first line?

\(fn)" nil nil)

(autoload 'move-text--at-penultimate-line-p "move-text" "\
Predicate, is the point at the penultimate line?

\(fn)" nil nil)

(autoload 'move-text--last-line-is-just-newline "move-text" "\
Predicate, is last line just a newline?

\(fn)" nil nil)

(autoload 'move-text--at-last-line-p "move-text" "\
Predicate, is the point at the last line?

\(fn)" nil nil)

(autoload 'move-text-line-up "move-text" "\
Move the current line up.

\(fn)" t nil)

(autoload 'move-text-line-down "move-text" "\
Move the current line down.

\(fn)" t nil)

(autoload 'move-text-region "move-text" "\
Move the current region (START END) up or down by N lines.

\(fn START END N)" t nil)

(autoload 'move-text-region-up "move-text" "\
Move the current region (START END) up by N lines.

\(fn START END N)" t nil)

(autoload 'move-text-region-down "move-text" "\
Move the current region (START END) down by N lines.

\(fn START END N)" t nil)

(autoload 'move-text-up "move-text" "\
Move the line or region (START END) up by N lines.

\(fn &optional START END N)" t nil)

(autoload 'move-text-down "move-text" "\
Move the line or region (START END) down by N lines.

\(fn &optional START END N)" t nil)

(autoload 'move-text-default-bindings "move-text" "\
Use default bindings for move-text-up and move-text-down (M-up / M-down).

\(fn)" t nil)

;;;***

;;;### (autoloads nil nil ("../../../../.emacs.d/elpa/move-text-20170908.2030/move-text-autoloads.el"
;;;;;;  "../../../../.emacs.d/elpa/move-text-20170908.2030/move-text.el")
;;;;;;  (23266 3812 909463 879000))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; move-text-autoloads.el ends here
