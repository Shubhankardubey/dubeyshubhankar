
(function() {

	// pull value from text field and set to object

	document.getElementById("my-btn").addEventListener("click", function() {
		book.name = document.getElementById('booktitle').value;
		bookName.textContent = book.name;

		book.totalPages = document.getElementById('total-pages').value;
		totalPages.textContent = 'Total Pages: ' + book.totalPages;

		book.pages = document.getElementById('pages').value;
		book.pages.textContent = book.pages;

		pagesLeft = document.getElementById('pagesLeft');
		pagesLeft.textContent = book.pagesLeft();

		percentageLeft = document.getElementById('percentageLeft');
		percentageLeft.textContent = book.percentageLeft() + '%';

	});

	// Create book object

	var book = {

		name: 'Book',
		totalPages: 1,
		pages: 1,
		pagesLeft: function() {
			var total = this.totalPages - this.pages;
			return total;
		},
		percentageLeft: function() {
			var totalPercentage = this.pagesLeft() / this.totalPages * 100
			return Math.round(totalPercentage);
		}
	};

	// write out book name and pages info

	var bookName, totalPages, pagesLeft, percentageLeft; //declares variables

	bookName = document.getElementById('bookName'); // gets elements from document
	totalPages = document.getElementById('totalPages');

	pagesLeft = document.getElementById('pagesLeft');
	percentageLeft = document.getElementById('percentageLeft');

	bookName.textContent = book.name; // write to document
	totalPages.textContent = 'Total Pages: ' + book.totalPages;
	pagesLeft.textContent = book.pagesLeft();
	percentageLeft.textContent = book.percentageLeft() + '%';

}());
