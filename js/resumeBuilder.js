var bio = {
	"name":"Vyshnavi Bandi ",
	"role": "Web Developer ",
	"welcomeMessage": "Hello! Welcome to My Page ",
	"biopic": "images/vyshnavi.jpg ",
		"contacts": [{
		"mobile": "940-395-9208 ", 
		"email":"bandivyshnavi9@gmail.com ",
		"emailUrl":"https://mail.google.com/mail/?view=cm&fs=1&to=bandivyshnavi9@gmail.com&su=SUBJECT&body=BODY", 
		"gitHub": "bandivyshnavi9 ", 
		"gitHubUrl":"https://github.com/bandivyshnavi9",
		"location": "Denton,Tx, USA ",}],
		"skills": ["Avid Learner ", "Programmer ", "Musicophile"]
}
var work = {
	"jobs" : [
	{
	"employer" : "UNT  CS Department",
	"title" : "Instuctional Assistant ",
	"location" :" Denton,Tx, USA ",
	"dates" : "January 2017 - present",
	"descritpion": " I am working  with Dr. Keathly for the course CSCE 1040, which is on C/C++.",
	"Url":"http://computerscience.engineering.unt.edu/"
	},
	{
	"employer" : "UNT  CS Department",
	"title" : "Instuctional Assistant ",
	"location" :" Denton,Tx, USA ",
	"dates" : "August 2016 - December 2016",
	"descritpion": " I worked  with Dr. Shreshta for the course CSCE 1030, which is on C/C++.",
	"Url":"http://computerscience.engineering.unt.edu/"
	},
	{
	"employer" : "UNT ITDS Department ",
	"title" : "Tutor ",
	"location" :" Denton,Tx, USA ",
	"dates" : "June 2016- July 2016",
	"descritpion": "Taught the course BCIS 4670, Continuing Seminar in Computer-based Information Systems which is on c++. ",
	"Url": "http://www.cob.unt.edu/itds/"
	},
	{
	"employer" : "UNT ITDS Department ",
	"title" : "Tutor ",
	"location" :" Denton,Tx, USA ",
	"dates" : "January 2016 - May 2016",
	"descritpion": " Taught the course BCIS 4650, Visual Programming of Business Applications which is on XAML and windows appplication development. ",
	"Url": "http://www.cob.unt.edu/itds/"
	}

]
};

var projects = {
	"projects": [
	{
		"title": "POS Tagging with Hidden Markov Model",
		"dates": "Fall 2016",
		"descritpion": "POS tag is assigned to each word in the sentence using hidden markov model. The Viterbi algorithm is used to backtrack the appropriate tags for each word in the sentence. I have implemented this project on python platform as my term project for Natural Language Processing Course. ",
		"images":["images/pos/baseline.png","images/pos/bigramswithlowered.png","images/pos/trigramslowered.png"],
		"Url":"https://github.com/bandivyshnavi9/POS-Tagging"
	},
	{
		"title": "Text Categorization with Support Vector Machines",
		"dates": "Fall 2015",
		"descritpion": "Text categorization of collection of documents by classifying them using Support vector machine algorithm. I have implemented this project on python platform as my term project for Machine Learning Course. ",
		"images":["images/machine/first.png","images/machine/second.png","images/machine/third.png"],
		"Url":"#"
	},
	{
		"title": "Reversible Image Data-Hiding with Contrast Enhancement ",
		"dates": "Spring 2016",
		"descritpion": "Invertible data hiding is embedded into an image and the it processed with parallel image contrast enhancement in the image for collection of Data sets from UCSI-SIPI.I have implemented this project in Matlab platform as my term project for Multimedia Computing course.",
		"images":["images/matlab/original.jpg","images/matlab/20.jpg"],
		"Url":"https://github.com/bandivyshnavi9/Contrast-Enhancment"
	},
	{
		"title": "UNT Web Search Engine ",
		"dates": "Spring 2016",
		"descritpion": "A search engine was developed for UNT Domain. When user input a query in GUI interface then it will display the related URL’s for the query on the window. I have implemented this project on Java as my term project for Information Retrieval course. ",
		"images":["images/engine/first.png","images/engine/second.png","images/engine/third.png"],
		"Url":"https://github.com/bandivyshnavi9/SearchEngine"
	},

	{
		"title": "Nearest ATM Mobile Navigation Through GPS System ",
		"dates": "Spring 2015",
		"descritpion": "It is based on android application. The user will be able to find nearest ATM within the location through GPS and navigates to the ATM location. The programming language used is Java and front-end is XML and IDE is Eclipse.",
		"images":["images/atm/zero.jpg","images/atm/first.jpg","images/atm/second.jpg"],
		"Url":"#"
	},
	{
		"title": "Faculty Information Management System ",
		"dates": "Fall 2014",
		"descritpion": "It is based on web application that specifies the faculty details. In this Web based application every faculty gets registered through which faculty gets an authorized access by login id and password. The programming Frame work is .Net and the programming language used to develop the application is C# (C sharp).",
		"images":["images/faculty/first.png","images/faculty/second.png","images/faculty/third.png"],
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
		"dates" : "2015 - Current",
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
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descritpion);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
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

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descritpion);
		$(".project-entry:last").append(formattedDescription);

		$(".project-entry:last").append('<div id="images">');
		if(projects.projects[project].images.length > 0)
		{
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
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