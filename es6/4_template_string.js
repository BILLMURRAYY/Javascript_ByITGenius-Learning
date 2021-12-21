const content = "Hello My Site"

//! ES 5
const htmlContent = '<html>' +
                    '<head>' +
                    '<title>Home</title>'+
                    '</head>'+
                    '<body>' + content + '</body>'+
                    '</html>'

console.log(htmlContent);

//! ES 6
const htmlContentNew  = `
<html lang="en">
<head>
    <title>Home</title>
</head>
<body>
${content}
${5 + 3}
</body>
</html>
` 
console.log(htmlContentNew);


