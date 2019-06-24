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
console.log(numberOfPages);

//for testing purposes
//console.log(list);

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
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

showPage(studentList, page);
/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) =>{
	const ul = document.createElement('ul');
	const paginationDiv = document.createElement('div');
	paginationDiv.className = 'pagination';
	
	
	for(let i = 1; i < numberOfPages + 1; i++){
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.textContent = i;
		li.appendChild(a);
		ul.appendChild(li);
		
	}
	paginationDiv.appendChild(ul);
	mainDiv.appendChild(paginationDiv);
	
}

mainDiv.addEventListener('click', (e) => {
	if(e.target.tagName === 'A'){
		showPage(studentList, parseInt(e.target.textContent));
		//console.log(parseInt(e.target.textContent));
	}
});

appendPageLinks(studentList);
const getNumberOfPages = () =>{ Math.ceil(list.length / numberPerPage); }

// Remember to delete the comments that came with this file, and replace them with your own code comments.
