const express = require('express');
const router = express.Router();
var db = require("../models");
// HTML Routes
// =============================================================

router.get("/", function (req, res) {
  
  db.Article.find().then(function (data) {
    let hbsObject = {
      article: data
    };
    
    res.render('index', hbsObject);
  }).catch(function (err) {
    console.log(err);
  });
});

router.get("/saved", function (req, res) {
  
  db.Saved.find().then(function (data) {
    let hbsObject = {
      saved: data
    };
    
    res.render('saved', hbsObject);
  }).catch(function (err) {
    console.log(err);
  });
});

router.get("/api/saved", function (req, res) {
  
  db.Saved.find({})
  .then(function(dbArticle) {
    res.json(dbArticle);
  })
  .catch(function(err) {
    res.json(err);
  });
});



router.get("/api/articles", function(req, res) {
    db.Article.find({})
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  });


  
  router.get("/api/articles/:id", function(req, res) {
    db.Article.findOne({ _id: req.params.id })
      
      .populate("comment")
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
     
        res.json(err);
      });
  });
  
  router.post("/api/articles/:id", function(req, res) {
    db.Feedback.create(req.body)
      .then(function(dbFeedback) {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { feedback: dbFeedback._id }, { new: true });
      })
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  router.get("/api/saved/:id", function(req, res) {
    db.Saved.findOne({ _id: req.params.id })
      
      .populate("comment")
      .then(function(dbSaved) {
        res.json(dbSaved);
      })
      .catch(function(err) {
     
        res.json(err);
      });
  });
  
  router.post("/api/saved/:id", function(req, res) {
    db.Feedback.create(req.body)
      .then(function(dbFeedback) {
        return db.Saved.findOneAndUpdate({ _id: req.params.id }, { feedback: dbFeedback._id }, { new: true });
      })
      .then(function(dbSaved) {
        res.json(dbSaved);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  router.post("/api/saved", function(req, res) {
    db.Saved.create(req.body)
     
      .then(function(dbSaved) {
        res.json(dbSaved);
      })
      .catch(function(err) {
        res.json(err);
      });
  });