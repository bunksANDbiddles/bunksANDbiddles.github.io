(function () {
    var 
	form = $('.form'),
	cache_width = form.width(),
     pagesplit = true,
	a4 = [595.28, 841.89];  // for a4 size paper width and height

    $('#create_pdf').on('click', function () {
        $('body').scrollTop(0);
        createPDF();
    });
    //create pdf

   

    function createPDF() {
        getCanvas().then(function (canvas) {
            var img = canvas.toDataURL("image/png"),
		    doc = new jsPDF({ unit: 'px', format: 'a4'});

            var imgWidth = 210; 
            var pageHeight = 295; 
            var imgHeight = canvas.height * imgWidth / canvas.width ;
            var heightLeft = imgHeight;
            var position = 0;

            doc.addImage(img, 'JPEG', 0, position, imgWidth, imgHeight  );
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                 doc.addPage();
                 doc.addImage(img, 'JPEG', 0, position, imgWidth, imgHeight  );
                
                heightLeft -= pageHeight;
                 
            }
           
            doc.save('techumber-html-to-pdf.pdf');
            form.width(cache_width);
        });
    }

    // create canvas object
    function getCanvas() {
        form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
        return html2canvas(form, {
            imageTimeout: 2000,
            removeContainer: true
        });
    }


    

} ());
