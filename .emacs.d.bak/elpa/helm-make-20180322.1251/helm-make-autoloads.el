;;; helm-make-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "helm-make" "../../../../.emacs.d/elpa/helm-make-20180322.1251/helm-make.el"
;;;;;;  "b3d90940253b5dbdfd185c15a319ad7b")
;;; Generated autoloads from ../../../../.emacs.d/elpa/helm-make-20180322.1251/helm-make.el

(autoload 'helm-make "helm-make" "\
Call \"make -j ARG target\". Target is selected with completion.

\(fn &optional ARG)" t nil)

(autoload 'helm-make-reset-cache "helm-make" "\
Reset cache, see `helm-make-cache-targets'.

\(fn)" t nil)

(autoload 'helm-make-projectile "helm-make" "\
Call `helm-make' for `projectile-project-root'.
ARG specifies the number of cores.

By default `helm-make-projectile' will look in `projectile-project-root'
followed by `projectile-project-root'/build, for a makefile.

You can specify an additional directory to search for a makefile by
setting the buffer local variable `helm-make-build-dir'.

\(fn &optional ARG)" t nil)

;;;***

;;;### (autoloads nil nil ("../../../../.emacs.d/elpa/helm-make-20180322.1251/helm-make-autoloads.el"
;;;;;;  "../../../../.emacs.d/elpa/helm-make-20180322.1251/helm-make.el")
;;;;;;  (23266 3796 494892 445000))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; helm-make-autoloads.el ends here
