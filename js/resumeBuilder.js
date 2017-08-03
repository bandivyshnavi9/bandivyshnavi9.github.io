var bio = {
	"name":"Vyshnavi Bandi ",
	"role": "Full stack Web Developer ",
	"welcomeMessage": "Hello! Welcome to My Page ",
	"biopic": "images/vyshnavi.jpg ",
		"contacts": [{
		"mobile": "940-395-9208 ",
		"email":"bandivyshnavi9@gmail.com ",
		"emailUrl":"https://mail.google.com/mail/?view=cm&fs=1&to=bandivyshnavi9@gmail.com&su=SUBJECT&body=BODY", 
		"gitHub": "bandivyshnavi9 ",
		"gitHubUrl":"https://github.com/bandivyshnavi9",
		"location": "Fairview,PA, USA ",}],
		"skills": ["Avid Learner ", "Programmer ", "Musicophile"]
}
var work = {
	"jobs" : [
	{
	"employer" : "University of North Texas",
	"title" : "Instuctional Assistant ",
	"location" :" Denton,Tx, USA ",
	"dates" : "January 2016 - May 2017",
	"descritpion":["Coordinated with Instructors and developed course curriculum for multiple courses each of class 65 students.","Maintained Professor website","Instructed Computer Science I/II labs of basic programming in C/C++.","Guided students to complete their Assignments and Projects.","Administrated the blackboard by updating the course content and grades on regular basis."]
	},
	{
	"employer" : "Efftronics Systems Pvt Ltd",
	"title" : "Software Developer Intern",
	"location" :" Vijayawada,AP, INDIA ",
	"dates" : "December 2014 - June 2015",
	"descritpion": ["Designed login and report the status of the work views.", " ​Developed REST AsyncTask APIs that makes both GET and POST calls to the Database to perform CRUD operations.​"]
	}
]
};

var projects = {
	"projects": [
		{
		"title": "Neighborhood Map",
		"dates": "Summer 2017",
		"descritpion": ["Developed a responsive web application built with Knockoutjs MVVM framework and deployed on localhost.","Designed application by using Google Maps API to show the map and the YELP API Endpoint to get JSON data for the user preferred location.","Learned how to generate HTTP cookie and use them in web applications."],
		"Url":"github.com/bandivyshnavi9/UdacityBasicBlog"
	},
	{
		"title": "Multi User Blog",
		"dates": "Spring 2017",
		"descritpion": ["Developed a responsive web application built with Flask framework, GQL to store the data and deployed on google cloud platform.","Designed a custom authentication service for users to login to the system. ","Implemented Knockoutjs filter to display the markers on the map."],
		"Url":"github.com/bandivyshnavi9/Udacity_Neighborhood_Maps"
	},
	{
		"title": "Build Item Catalog",
		"dates": "Summer 2017",
		"descritpion": ["Developed an interactive web application with Flask framework and used SQLAlchemy to be MVC, where user can provide details about a game.","Eliminated the SQL errors by using SQLAlchemy and authenticated issues using third party authentication.","Created a REST endpoint for the application so developers can directly communicate with the website."],
		"Url":"github.com/bandivyshnavi9/catalog-App"
	},
	{
		"title": "POS Tagging with Hidden Markov Model",
		"dates": "Fall 2016",
		"descritpion": ["POS tag is assigned to each word in the sentence using hidden markov model. The Viterbi algorithm is used to backtrack the appropriate tags for each word in the sentence. I have implemented this project on python platform as my term project for Natural Language Processing Course. "],
		"Url":"https://github.com/bandivyshnavi9/POS-Tagging"
	},
	{
		"title": "Text Categorization with Support Vector Machines",
		"dates": "Fall 2015",
		"descritpion": ["Text categorization of collection of documents by classifying them using Support vector machine algorithm. I have implemented this project on python platform as my term project for Machine Learning Course. "],
		"Url":"#"
	},
	{
		"title": "Reversible Image Data-Hiding with Contrast Enhancement ",
		"dates": "Spring 2016",
		"descritpion": ["Invertible data hiding is embedded into an image and the it processed with parallel image contrast enhancement in the image for collection of Data sets from UCSI-SIPI.I have implemented this project in Matlab platform as my term project for Multimedia Computing course."],
		"Url":"https://github.com/bandivyshnavi9/Contrast-Enhancment"
	},
	{
		"title": "UNT Web Search Engine ",
		"dates": "Spring 2016",
		"descritpion": ["A search engine was developed for UNT Domain. When user input a query in GUI interface then it will display the related URL’s for the query on the window. I have implemented this project on Java as my term project for Information Retrieval course. "],
		"Url":"https://github.com/bandivyshnavi9/SearchEngine"
	},

	{
		"title": "Nearest ATM Mobile Navigation Through GPS System ",
		"dates": "Spring 2015",
		"descritpion": ["It is based on android application. The user will be able to find nearest ATM within the location through GPS and navigates to the ATM location. The programming language used is Java and front-end is XML and IDE is Eclipse."],
		"Url":"#"
	},
	{
		"title": "Faculty Information Management System ",
		"dates": "Fall 2014",
		"descritpion": ["It is based on web application that specifies the faculty details. In this Web based application every faculty gets registered through which faculty gets an authorized access by login id and password. The programming Frame work is .Net and the programming language used to develop the application is C# (C sharp)."],
		"Url": "#"
	}
	]

};

var education = {
	"schools" : [
		{
		"name" : "University of North Texas",
		"location" : "Denton, Texas, USA",
		"degree" : "Master's",
		"dates" : " August 2015 - May 2017",
		"url": "https://www.unt.edu/",
		"majors" : "Computer Science"
	},
	{
		"name" : "VRSEC",
		"location" : "Vijayawada, Andhra Pradesh, India",
		"degree": "Bachelor's of Technology",
		"dates": "2011 - 2015",
		"url": "http://www.vrsiddhartha.ac.in/",
		"majors" : "Computer Science and Engineering"
	}
	],
	"onlinecourses": [
	{
		"title" : "Full Stack Web Developer",
		"school": "Udacity",
		"dates": "March 2017",
		"url": "https://www.udacity.com/"

	}
	]
};

work.display = function (){
	for(job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].Url);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append('<div id="description">');
	if(work.jobs[job].descritpion.length > 0)
	{
		for(description in work.jobs[job].descritpion)
		{
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descritpion[description]);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}
};

work.display();

projects.display = function(){
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].Url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		$(".project-entry:last").append('<div id="description">');
		if(projects.projects[project].descritpion.length > 0)
		{
			for(description in projects.projects[project].descritpion){
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descritpion[description]);
				$(".project-entry:last").append(formattedDescription);
		}
		}
		$(".project-entry:last").append('</div>');

	}

};


projects.display();

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBiopic,formattedMessage);
	$("#header").append(HTMLskillsStart);
if(bio.skills.length > 0)
{
	for(skill in bio.skills)
	{
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
	}
}
	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email).replace("#",bio.contacts[contact].emailUrl);
		var formattedgitHub = HTMLgithub.replace("%data%",bio.contacts[contact].gitHub).replace("#",bio.contacts[contact].gitHubUrl);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedgitHub,formattedLocation);
	}
};
bio.display();


education.display = function (){
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}

};

education.display();
function inName(name)
{
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+ name[1];
};

//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);