install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js -h

g:
	git add .
	git commit -m "$m"
	git push

lint:
	npx eslint .

jest:
	NODE_OPTIONS=--experimental-vm-modules npx jest
