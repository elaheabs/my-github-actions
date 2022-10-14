create-package:
	yarn build
	if [ -f "./package.zip" ]; then rm ./package.zip; fi
	cd dist && zip -r ../package.zip ./* && cd ..