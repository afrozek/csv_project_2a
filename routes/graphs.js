
/*
 * Routes
 */


// ENROLLMENT UPLOAD FORM ----------------------------------
// ENROLLMENT UPLOAD FORM ----------------------------------

exports.enrollment = function(req, res){
  res.render('enrollment_home', { title: 'Top 10 Enrollment Bar Graph' });

};//END EXPORT


// ENROLLMENT BAR GRAPH----------------------------------
// ENROLLMENT BAR GRAPH----------------------------------
exports.enrollment_display_graph = function(req,res){
	console.log("working");
   
//OPEN FILE AND ASSIGN TO VARIABLE
var fs = require('fs');
var data = fs.readFileSync('./uploads/file.csv', "utf8");

// GET MONGOOSE MODEL
var enrollmentModel = require('../models/enrollment_model.js');
//enrollmentModel.remove().exec();
                                                                                               
//SPLIT STRING INTO ROWS,TURNS INTO ARRAY
var data = data.split('\n');       

//SPLIT STRING INTO COLUMNS,TURNS INTO ARRAY
//LOOP TO CREATE NEW SCHOOL OBJECT FOR EACH DOCUMENT

var dataArray = [];

for(var i = 0;i<data.length;i++)
	{var s = data[i].split(',');console.log(s);dataArray.push(s);}

var enrollmentDataArray = {'enrollmentData':dataArray};


                                                                                                                                                                                                                                                                                                                    
    //STORE THE ENTRY                                                                                                                               
	    enrollmentModel.create(enrollmentDataArray, function(err, gdata) {                                                                                                                            
	        console.log("the insert data:");
	        console.log('newenrollment:', gdata);                                                                                                                              
	    });                                                                                                                                                                       

//END LOOP

	//RETRIEVE DATA AND RENDER USING JADE
	  enrollmentModel.find({}, function(err, d) {
	  	console.log("The Find Data:");
	  	console.log(d);
	    res.render('enrollment', { 
	      title: 'enrollment total fall13 top 10', 
	      data: d
	    });
	 });                                                                                                                                                                   


};//END EXPORT
















// GENDER UPLOAD FORM ----------------------------------
// GENDER UPLOAD FORM ----------------------------------
exports.gender = function(req, res){


	//CREATE NEW JSON OBJECT TO BE INSERTED LATER 
	var d ={"collegeName":"Sample College","genderData":[["Male", 51, ], ["Female", 49, ]]};



  //RENDER JADE TEMPLATE
  res.render('gender_home', { 
  	title: 'Sample Gender Distribution Pie Graph',
  	data:d
  });

};//END EXPORT

// GENDER PIE GRAPH----------------------------------
// GENDER PIE GRAPH----------------------------------

exports.gender_display_graph = function(req,res){
	console.log("yo");
   
//OPEN FILE AND ASSIGN TO VARIABLE
var fs = require('fs');
var data = fs.readFileSync('./uploads/file.csv', "utf8");

// GET MONGOOSE MODEL
var genderModel = require('../models/gender_model.js');
//genderModel.remove().exec();
                                                                                               
//SPLIT STRING INTO ROWS,TURNS INTO ARRAY
var data = data.split('\n');       

//SPLIT STRING INTO COLUMNS,TURNS INTO ARRAY
//LOOP TO CREATE NEW SCHOOL OBJECT FOR EACH DOCUMENT
data.forEach(function(line) {                                                                                                                                                
    line = line.split(',');   

    // if (line.length > 3)//number of columns
    //     return; 

    var total = line[1];
	var male = line[2]/total;  
	var female = line[3]/total;                                                                                                                                            

    //makes object                                                                                                                 
    var newGenderModel = {                                                                                                                                                         
		  "collegeName":line[0],
          "genderData":[["Male",male], ["Female",female]]                                                                                                           
    };                                                                                                                                                                       

    //STORE THE ENTRY                                                                                                                               
	    genderModel.create(newGenderModel, function(err, gdata) {                                                                                                                            
	        console.log('newschool:', gdata);                                                                                                                              
	    });                                                                                                                                                                       
}); 
//END LOOP

	//RETRIEVE DATA AND RENDER USING JADE
	  genderModel.find({}, function(err, d) {
	  	console.log(d);
	    res.render('gender', { 
	      title: 'gender dist', 
	      data: d
	    });
	 });                                                                                                                                                                   


};//END EXPORT





// TUITION UPLOAD FORM----------------------------------
// TUITION UPLOAD FORM----------------------------------
exports.tuition = function(req, res){
  res.render('tuition_home', { title: 'Sample Tuition Line Graph'});

};//END EXPORT




// TUITION LINE GRAPH----------------------------------
// TUITION LINE GRAPH----------------------------------

exports.tuition_display_graph = function(req,res){
	console.log("working");
   
//OPEN FILE AND ASSIGN TO VARIABLE
var fs = require('fs');
var data = fs.readFileSync('./uploads/file.csv', "utf8");

// GET MONGOOSE MODEL
var tuitionModel = require('../models/tuition_model.js');
//tuitionModel.remove().exec();
                                                                                               
//SPLIT STRING INTO ROWS,TURNS INTO ARRAY
var data = data.split(',');       

//SPLIT STRING INTO COLUMNS,TURNS INTO ARRAY
//LOOP TO CREATE NEW SCHOOL OBJECT FOR EACH DOCUMENT

var dataArray = [[data[0],data[1],data[2],data[3]]];

var tuitionDataArray = {'tuitionData':dataArray};


                                                                                                                                                                                                                                                                                                                    
    //STORE THE ENTRY                                                                                                                               
	    tuitionModel.create(tuitionDataArray, function(err, gdata) {                                                                                                                            
	        console.log("the insert data:");
	        console.log('newtuition:', gdata);                                                                                                                              
	    });                                                                                                                                                                       

//END LOOP

	//RETRIEVE DATA AND RENDER USING JADE
	  tuitionModel.find({}, function(err, d) {
	  	console.log("The Find Data:");
	  	console.log(d);
	    res.render('tuition', { 
	      title: 'Tuition 3 Year Trend', 
	      data: d
	    });
	 });                                                                                                                                                                   


};//END EXPORT









