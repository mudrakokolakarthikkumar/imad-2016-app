var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title:'article-one',
  heading: 'ArticleOne',
  date: '22-06-1996',
  content: `<p>
1
hai my name is karthik 
at present i am doing btech 2nd year
i like exploring new thing over internet
1
hai my name is karthik 
at present i am doing btech 2nd year
i like exploring new thing over internet
1
hai my name is karthik 
at present i am doing btech 2nd year
i like exploring new thing over internet
</p>

<p>
2
hai my name is karthik 
at present i am doing btech 2nd year
i like exploring new thing over internet
1
hai my name is karthik 
at present i am doing btech 2nd year
i like exploring new thing over internet
</p>


<p> 
3
hai my name is karthik 
at present i am doing btech 2nd year
i like exploring new thing over internet
</p> `
  
};

function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate = `<html>

<head>
 
 <title>
   ${title}
</title>    
   <meta name="viewport" content="width=device-width,initial-scale=1" />  
   <link href="/ui/style.css" rel="stylesheet" />
 
</head>

 
<body>
<div class="container">
<div>
    <a href="/">home</a>
    </div>
    
    <!-- i did not used this <hr/> in article-2 and article-3 you can observe you won't get any horizontal in 2,3  -->
    <hr/>
    
    <h3>
    ${heading}
    </h3>  
    
    <div>
    ${date}
    </div>

<div>
    ${content}
     </div>

</div> 
</body>
 
</html>
`;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-2', function (req, res) {
  res.send('this is article two requested and will be  served here');
});

app.get('/article-3', function (req, res) {
  res.send('this is article three requested and will be  served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
