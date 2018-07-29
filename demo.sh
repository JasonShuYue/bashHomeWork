if [ -d $1 ]; then
    exit 1
else
    mkdir $1
    cd $1
    mkdir css js
    touch index.html css/style.css js/main.js
    echo "<!DOCTYPE>\r<title>Hello</title>\r<h1>Hi</h1>" >> index.html
    echo "h1{color: red;}" >> css/style.css
    echo "var string = "Hello World"\ralert(string)" >> js/main.js
    exit 0
fi