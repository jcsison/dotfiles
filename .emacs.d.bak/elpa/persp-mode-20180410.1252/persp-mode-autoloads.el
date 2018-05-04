;;; persp-mode-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "persp-mode" "../../../../.emacs.d/elpa/persp-mode-20180410.1252/persp-mode.el"
;;;;;;  "c09bfed04ab38107a2b1e32017547c11")
;;; Generated autoloads from ../../../../.emacs.d/elpa/persp-mode-20180410.1252/persp-mode.el

(autoload 'persp-def-auto-persp "persp-mode" "\


\(fn NAME &rest KEYARGS &key BUFFER-NAME FILE-NAME MODE MODE-NAME MINOR-MODE MINOR-MODE-NAME PREDICATE HOOKS DYN-ENV GET-NAME GET-BUFFER GET-PERSP SWITCH PARAMETERS NOAUTO WEAK USER-DATA ON-MATCH AFTER-MATCH DONT-PICK-UP-BUFFERS DELETE)" nil nil)

(define-obsolete-function-alias 'def-auto-persp 'persp-def-auto-persp "persp-mode 2.9.6")

(autoload 'persp-def-buffer-save/load "persp-mode" "\


\(fn &rest KEYARGS &key BUFFER-NAME FILE-NAME MODE MODE-NAME MINOR-MODE MINOR-MODE-NAME PREDICATE TAG-SYMBOL SAVE-VARS SAVE-FUNCTION LOAD-FUNCTION AFTER-LOAD-FUNCTION MODE-RESTORE-FUNCTION APPEND)" nil nil)

(define-obsolete-function-alias 'def-persp-buffer-save/load 'persp-def-buffer-save/load "persp-mode 2.9.6")

(defvar persp-mode nil "\
Non-nil if Persp mode is enabled.
See the command `persp-mode' for a description of this minor mode.
Setting this variable directly does not take effect;
either customize it (see the info node `Easy Customization')
or call the function `persp-mode'.")

(custom-autoload 'persp-mode "persp-mode" nil)

(autoload 'persp-mode "persp-mode" "\
Toggle the persp-mode.
When active, keeps track of multiple 'perspectives',
named collections of buffers and window configurations.
Here is a keymap of this minor mode:
\\{persp-mode-map}

\(fn &optional ARG)" t nil)

;;;***

;;;### (autoloads nil nil ("../../../../.emacs.d/elpa/persp-mode-20180410.1252/persp-mode-autoloads.el"
;;;;;;  "../../../../.emacs.d/elpa/persp-mode-20180410.1252/persp-mode.el")
;;;;;;  (23266 3858 203278 114000))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; persp-mode-autoloads.el ends here
