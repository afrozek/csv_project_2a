
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'CSV Project 2' });
};