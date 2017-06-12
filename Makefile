MOCHA = node_modules/mocha/bin/mocha
ESLINT = node_modules/eslint/bin/eslint.js
ISTANBUL = node_modules/.bin/istanbul

default:
	 npm install;

clean:
	rm -rf coverage;

post-install:
	cd node_modules; \
	ln -nsf ../lib; \
	ln -nsf ../tests; \

test: eslint test-unit

test-unit:
	@NODE_ENV=test \
	$(MOCHA) tests/**/*-test.js

coverage: clean
	@NODE_ENV=test \
	${ISTANBUL} cover \
	./node_modules/.bin/_mocha \
	"tests/**/*-test*" \
    -- -t 20000 --bail

coveralls:
	cat ./coverage/lcov.info | ./node_modules/.bin/coveralls

open-coverage-report:
	open ./coverage/lcov-report/index.html;

eslint:
	$(ESLINT) --config "./.eslintrc.js" "lib/**/*.js" \
	$(ESLINT) --config "./.eslintrc.js" "tests/**/*.js" \

run: node-index.js
