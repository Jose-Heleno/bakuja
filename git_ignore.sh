!/bin/bash

'if [ ! -d ".git" ]; then' 
	echo "Este nao e um repositorio Git"
	exit 1
fi

git ls-files --other --ignored --exclude-standard