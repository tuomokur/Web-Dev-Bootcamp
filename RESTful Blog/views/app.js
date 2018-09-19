var express = require("express"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

// app configuration
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// mongoose/model  configuration
var blogSchema = new mongoose.Schema({
    title: String,
    image: String, 
    body: String,
    created: {type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);


// RESTful ROUTES

// index route
app.get("/", function(req, res){
   res.redirect("/blogs") ;
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// new route
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// create route
app.post("/blogs", function(req, res){
   //sanitize code
   req.body.blog.body = req.sanitize(req.body.blog.body);
   // create blog
   Blog.create(req.body.blog, function(err, newBlog){
       if(err){
           res.render("new");
       } else {
            // rediredct to the index
            res.redirect("/blogs");
       }
   });
});


//show route
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// edit route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
   
});

// update route
app.put("/blogs/:id", function(req, res){
    // sanitize code
    req.body.blog.body = req.sanitize(req.body.blog.body);
    // update
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
       if(err){
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs/" + req.params.id);
       }
    });
});

// delete route
app.delete("/blogs/:id", function(req, res){
    // destroy blog 
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            // redirect somewhere
            res.redirect("/blogs");
        } else {
            // redirect somewhere
            res.redirect("/blogs");
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server is running");
});