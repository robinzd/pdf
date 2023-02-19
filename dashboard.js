$(document).ready(function() {
    // Scroll PopUp Logic Starts //
    $('.modal-body').scroll(function() {
        var scroll2 = $("#acknow").prop("scrollHeight");
        var scroll = $(this).scrollTop() + $(this).height();
        if (scroll >= scroll2) {
            // $('#closeBtn').prop('disabled', false);
            $("#closeBtn").html(`<button type="button" class="btn btn-secondary agreee" data-bs-dismiss="modal">AGREE</button>`)
        }
    });
   
    $('#centre_modal').modal('show');

// Terms And Condition Javascript Starts //
$(document).on("click", ".agreee", function() {
    const element = document.getElementById("acknow1");
    window.jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts:true,
         
        });
    doc.html(element, {
        callback: function(doc) {
            // Save the PDF  
            var out = doc.output();
            var dataUrl = 'data: application/pdf;base64,' + btoa(out);
            console.log(dataUrl);
            doc.save('Agreement_document.pdf');
        },
        x: 3,
        y: 10,
        autoPaging:'text',
        margin: [15,18,20,18],
        html2canvas: {
            allowTaint: true,
            letterRendering: true,
            logging: false,
        },
        width: 170, //target width in the PDF document
        windowWidth: 700, //window width in CSS pixels
    });
});
// Terms And Condition Javascript Ends //
});