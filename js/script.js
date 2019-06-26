/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const studentList = document.querySelectorAll('li.student-item');
var page = 1;
const numberPerPage = 10;
const mainDiv = document.querySelector('.page');
var numberOfPages = Math.ceil(studentList.length / numberPerPage);


/***
  The showPage() function deals with the rendering of the view, and the list of the students. The students are shown or hidden based on what page you are on.
  The list that is meant to be rendered is passed in as a parameter alongside what page you are on.
***/
const showPage = (list, page) => {
  const startIndex =  (numberPerPage * page) - numberPerPage;
  const endIndex = page * numberPerPage - 1;

  for(let i = 0; i < list.length; i++){
    if(i >= startIndex && i <= endIndex){
      list[i].style.display = 'block';
    }else {
      list[i].style.display = 'none';
    }
  }
}

//Call the showPage() function to generate the initial view.
showPage(studentList, page);

/***
   The appendPageLinks function takes care of creating all of the elements needed to apply pagination to the side.
   It first create the div itself, then loops through the number of pages and for each page, it generates a ul with anchor tags nested inside of li for each page.
***/
const appendPageLinks = (list) =>{
  const paginationDiv = document.createElement('div');
	paginationDiv.className = 'pagination';
  const ul = document.createElement('ul');

	for(let i = 1; i < numberOfPages + 1; i++){
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.textContent = i;
		li.appendChild(a);
		ul.appendChild(li);

	}
	paginationDiv.appendChild(ul);
	ul.childNodes[0].childNodes[0].className = 'active';
	mainDiv.appendChild(paginationDiv);

}

//Call appendPageLinks function to generate the initial links
appendPageLinks(studentList);

mainDiv.addEventListener('click', (e) => {
	const tags = document.getElementsByTagName('a');
	if(e.target.tagName === 'A'){
		for(let i = 0; i < numberOfPages; i++){
			tags[i].className = '';
      tags[i].href = '#';
		}
		e.target.className = 'active';
		showPage(studentList, parseInt(e.target.textContent));
	}
});

//const getNumberOfPages = (list) =>{
  //return Math.ceil(list.length / numberPerPage);
//}

/***
  Selecting the div with the class "page-header" in order to generate the markup
  for the search functionality
***/
const headDiv= document.querySelector('.page-header');
const studentSearchDiv = document.createElement('div');
studentSearchDiv.className = 'student-search';
const searchInput = document.createElement('input');
searchInput.placeholder = 'Search for students...';
const searchButton = document.createElement('button');
searchButton.textContent = 'Search';
studentSearchDiv.appendChild(searchInput);
studentSearchDiv.appendChild(searchButton);
headDiv.appendChild(studentSearchDiv);

/***
  EventListener that is supposed to check the input field for the value, and then
  filter the student list.
***/
headDiv.addEventListener('keyup',(e)=>{
  if(e.target.tagName === 'BUTTON'){
    const input = document.getElementsByTagName('input')[0];
    var filteredList;
    for(let i = 0; i < studentList.length; i++){
      if(input.value.includes(studentList[i].children[0].children[1].textContent)){
        filteredList += [studentList[i]];
        console.log(filteredList.length);
      } else{
      }
    }
    }
  }
);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
