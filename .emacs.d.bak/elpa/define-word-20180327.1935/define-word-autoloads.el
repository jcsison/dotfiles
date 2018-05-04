;;; define-word-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "define-word" "../../../../.emacs.d/elpa/define-word-20180327.1935/define-word.el"
;;;;;;  "0f5ed560e93d2558a390d8a4e94728ec")
;;; Generated autoloads from ../../../../.emacs.d/elpa/define-word-20180327.1935/define-word.el

(autoload 'define-word "define-word" "\
Define WORD using various services.

By default uses `define-word-default-service', but a prefix arg
lets the user choose service.

\(fn WORD SERVICE &optional CHOOSE-SERVICE)" t nil)

(autoload 'define-word-at-point "define-word" "\
Use `define-word' to define word at point.
When the region is active, define the marked phrase.
Prefix ARG lets you choose service.

In a non-interactive call SERVICE can be passed.

\(fn ARG &optional SERVICE)" t nil)

;;;***

;;;### (autoloads nil nil ("../../../../.emacs.d/elpa/define-word-20180327.1935/define-word-autoloads.el"
;;;;;;  "../../../../.emacs.d/elpa/define-word-20180327.1935/define-word.el")
;;;;;;  (23266 3742 691479 364000))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; define-word-autoloads.el ends here
