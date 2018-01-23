install:
	npm install
start brain-games:
	npm run babel-node -- src/bin/brain-games.js
start brain-even:
	npm run babel-node -- src/bin/brain-even.js
publish:
	npm publish
lint:
	npm run eslint .
