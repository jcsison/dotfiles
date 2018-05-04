;;; evil-iedit-state-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "evil-iedit-state" "../../../../.emacs.d/elpa/evil-iedit-state-20160905.1908/evil-iedit-state.el"
;;;;;;  "c9c132c2f5ed8be2199023039a44b643")
;;; Generated autoloads from ../../../../.emacs.d/elpa/evil-iedit-state-20160905.1908/evil-iedit-state.el

(eval-after-load 'expand-region '(progn (defun evil-iedit-state/iedit-mode-from-expand-region (&optional arg) "Start `iedit-mode'." (interactive "P") (evil-iedit-state/iedit-mode arg) (setq overriding-terminal-local-map nil)) (defadvice er/prepare-for-more-expansions-internal (around iedit/prepare-for-more-expansions-internal activate) ad-do-it (let ((default-msg (car ad-return-value)) (default-bindings (cdr ad-return-value))) (setq ad-return-value (cons (concat default-msg ", e to edit") (add-to-list 'default-bindings '("e" evil-iedit-state/iedit-mode-from-expand-region))))))))

;;;***

;;;### (autoloads nil nil ("../../../../.emacs.d/elpa/evil-iedit-state-20160905.1908/evil-iedit-state-autoloads.el"
;;;;;;  "../../../../.emacs.d/elpa/evil-iedit-state-20160905.1908/evil-iedit-state.el")
;;;;;;  (23266 3767 293971 585000))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; evil-iedit-state-autoloads.el ends here
