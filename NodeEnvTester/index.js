const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`<HTML>

  <HEAD>
  
  <TITLE>Your Title Here</TITLE>
  
  </HEAD>
  
  <BODY BGCOLOR="FFFFFF">
  
  <CENTER><IMG SRC="clouds.jpg" ALIGN="BOTTOM"> </CENTER>
  
  <HR>
  
  <a href="http://somegreatsite.com">Link Name</a>
  
  is a link to another nifty site
  
  <H1>This is a Header</H1>
  
  <H2>This is a Medium Header</H2>
  
  Send me mail at <a href="mailto:support@yourcompany.com">
  
    support@yourcompany.com</a>.
  
  <P> This is a new paragraph!
  
  <P> <B>This is a new paragraph!</B>
  
  <BR> <B><I>This is a new sentence without a paragraph break, in bold italics.</I></B>
  
  <HR>
  
  </BODY>
  
  </HTML>`);
})

app.get("/api", (req, res) => {
    response.send("A rota /api deu certo")
});

app.get("/api/foo", (req, res) => {
    response.send("A rota /api/foo deu certo")
});

app.use(function (req, resp, next) {
    resp.send("NODE EXPRESS 404");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//  ../../../../etc/nginx/sites-available/

//  ../../../home/ubuntu/app/NodeEnvTester/

//  sudo systemctl restart nginx