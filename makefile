clear:
	@rm .*.swp *~ || echo  "\033[0;33mRoot clean !\033[0m"
	@rm assets/img/.*.swp assets/img/*~ || echo "\033[0;33m./assets/img/ clean !\033[0m" 
	@rm assets/style/.*.swp assets/style/*~ || echo "\033[0;33m./assets/style/ clean !\033[0m" 
	@rm assets/js/.*.swp assets/js/*~ || echo "\033[0;33m./assets/js/ clean !\033[0m"
	@echo "\033[1;36m--------------\033[0m"
	@echo "\033[1;36mCleaned up !\033[0m"
	@echo "\033[1;36m--------------\033[0m"
