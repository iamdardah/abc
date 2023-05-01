$(document).ready(function(){
    $('.edit-details-btn').each(function(){
        $(document).on('click', '.edit-details-btn', function(){
            $(this).parent().hide();
            $(this).parent().siblings('form').removeClass('read-mode');
            $(this).parent().siblings('form').find('input').prop('readonly', false).show();
            $(this).parent().siblings('form').find('.letmibd-tag-input').show();
            $(this).parent().siblings('form').find('textarea').prop('readonly', false);
            $(this).parent().siblings('form').find('select').prop('disabled', false);
            $(this).parent().siblings('form').find('textarea.letmibd-input').show().siblings('.textarea-text').hide();
            $(this).parent().siblings('form').find('.disability-not-updated-msg').hide();
            $(this).parent().siblings('form').find('.input-group-text').show();
            $(this).parent().siblings('form').find('#continuingJob').parent().parent().show();
            $(this).parent().siblings('form').find('.delete-expertise-area').show();
            $(this).parent().siblings('form').find('.expertise-duration').parent().parent().show();
            $(this).parents('.accordion-item').find('.btn-box').parent().show();
            $(this).parents('.accordion-body').find('.address select, .address input').parent().show();
            $(this).parents('.accordion-body').find('.address .input-text').hide();
            $(this).parents('.accordion-body').find('.address .separation').hide();
            $(this).parents('.accordion-body').find('.required-mark').show();
            $(this).parents('.accordion-body').find('.hide-radio').siblings('.main-label').show();
            $(this).parents('.accordion-body').find('.disability-form').find('.form-check-input[name=disabilityShow]').show().siblings('label').show();
            $('.hide-radio').show().siblings('.input-texts').hide();

            if($(this).parents('.accordion-body').find('.address').length) {
                if($('#insideBangladesh').is(':checked')) {
                    $('#selectCountry').parent().hide();
                    $('#selectDistrict, #selectThana, #selectPO').parent().show();
                }
                if($('#outsideBangladesh').is(':checked')) {
                    $('#selectCountry').parent().show();
                    $('#selectDistrict, #selectThana, #selectPO').parent().hide();
                }
                if($('#per_insideBangladesh').is(':checked')) {
                    $('#per_selectCountry').parent().hide();
                    $('#per_selectDistrict, #per_selectThana, #per_selectPO').parent().show();
                }
                if($('#per_outsideBangladesh').is(':checked')) {
                    $('#per_selectCountry').parent().show();
                    $('#per_selectDistrict, #per_selectThana, #per_selectPO').parent().hide();
                }
            }

            $('#foreignInstitute').parent('.form-check').parent().show();

            if ($('.list-of-expertise-area').find('.single-expertise-area').length < 3) {
                $('.add-expertise-area').show();
            }

            $(this).parents('.accordion-item').find('form').find('.expertise-area').each(function() {
                // Get the original value without the added text
                var expertise = $(this).val().replace(/\s+\(.+?\)/, '');
                // Set the input field value to the original value
                $(this).val(expertise);
            });
        });
    });

    $('.save-btn').each(function(){
        $(document).on('click', '.save-btn', function(){
            $(this).parents('.accordion-body').find('.edit-details-btn').parent().show();
            $(this).parents('.accordion-item').find('form').addClass('read-mode');
            $(this).parents('.accordion-item').find('form').find('input').prop('readonly', true);
            $(this).parents('.accordion-item').find('form').find('.letmibd-tag-input').hide();
            $(this).parents('.accordion-item').find('form').find('textarea').prop('readonly', true);
            $(this).parents('.accordion-item').find('form').find('select').prop('disabled', true);
            $(this).parents('.accordion-item').find('form').find('textarea.letmibd-input').hide().siblings('.textarea-text').show();
            $(this).parents('.accordion-item').find('form').find('.input-group-text').hide();
            $(this).parents('.accordion-item').find('form').find('#continuingJob').parent().parent().hide();
            $(this).parents('.accordion-item').find('form').find('.delete-expertise-area').hide();
            $(this).parents('.accordion-item').find('form').find('.add-expertise-area').hide();
            $(this).parents('.accordion-item').find('form').find('.expertise-duration').parent().parent().hide();
            $(this).parents('.accordion-item').find('.btn-box').parent().hide();
            $(this).parents('.accordion-body').find('.address select, .address input').parent().hide();
            $(this).parents('.accordion-body').find('.address .input-text').show();
            $(this).parents('.accordion-body').find('.address .separation').show();
            $(this).parents('.accordion-body').find('.required-mark').hide();
            $(this).parents('.accordion-body').find('.add-another-experience').show();
            $(this).parents('.accordion-body').find('.letmibd-input').each(function(){
                if($(this).val() === '') {
                    $(this).hide();
                }
            });
            $('.hide-radio').hide().siblings('.input-texts').show();
            $('.job-type .input-text').each(function(){
                var radioName = $(this).attr('data-radio');
                var radioID = $(this).parents('form').find('input[name=' + radioName + ']:checked').siblings('label').text();
                $(this).text(radioID + 'Job');
                if(!$(this).parents('form').find('input[type=radio]').is(':checked')) {
                    $(this).hide();
                }
            });
            if(!$('#disabilityYes').is(':checked')) {
                $(this).parents('.accordion-body').find('.disability-not-updated-msg').show();
            } else {
                $(this).parents('.accordion-body').find('.hide-radio').siblings('.main-label').hide();
                $(this).parents('.accordion-body').find('.disability-help').hide();
            }
            if($('#disabilityYes').is(':checked')) {
                $('.disability-form').find('.form-check-input[name=disabilityShow]').hide().siblings('label').hide();
                $('.disability-form').find('.form-check-input[name=disabilityShow]:checked + label').show();
            }

            $('#foreignInstitute').parent('.form-check').parent().hide();
            
            $(this).parents('.accordion-item').find('form').find('.expertise-area').each(function(){
                var expertise = $(this).val();
                var duration = $(this).parent().siblings().find('.expertise-duration').val();

                $(this).val(expertise + ' (' + duration + ' month)')
            });
        });
    });


    $(document).on('click', '.edit-appended-details-btn', function(){
        $(this).parent().hide();
        $(this).parents('.appendable').find('form').removeClass('read-mode');
        $(this).parents('.appendable').find('form').find('input').prop('readonly', false).show();
        $(this).parents('.appendable').find('form').find('.letmibd-tag-input').show();
        $(this).parents('.appendable').find('form').find('textarea').prop('readonly', false);
        $(this).parents('.appendable').find('form').find('select').prop('disabled', false);
        $(this).parents('.appendable').find('form').find('textarea.letmibd-input').show().siblings('.textarea-text').hide();
        $(this).parents('.appendable').find('form').find('.disability-not-updated-msg').hide();
        $(this).parents('.appendable').find('form').find('.input-group-text').show();
        $(this).parents('.appendable').find('form').find('#continuingJob').parent().parent().show();
        $(this).parents('.appendable').find('form').find('.delete-expertise-area').show();
        $(this).parents('.appendable').find('form').find('.expertise-duration').parent().parent().show();
        $(this).parents('.appendable').find('.btn-box').parent().show();

        if ($(this).parents('.appendable').find('.list-of-expertise-area').find('.single-expertise-area').length < 3) {
            $(this).parents('.appendable').find('.add-expertise-area').show();
        }

        $(this).parents('.appendable').find('form').find('.expertise-area').each(function() {
            // Get the original value without the added text
            var expertise = $(this).val().replace(/\s+\(.+?\)/, '');
            // Set the input field value to the original value
            $(this).val(expertise);
        });

        $(this).parents('.appendable').find('.checkbox-texts').text('').hide();
        $(this).parents('.appendable').find('.form-check').show();
        $(this).parents('.appendable').find('.checkbox-group-2').siblings('label').html('How did you learn the skill? <span class="required-mark">*</span>')
    });

    $(document).on('click', '.save-appended-btn', function(){
        var textareaText = $(this).parents('form').find('textarea.letmibd-input').val();
        $(this).parents('.appendable').find('.top-btn-box').show();
        $(this).parents('.appendable').find('form').addClass('read-mode');
        $(this).parents('.appendable').find('form').find('input').prop('readonly', true);
        $(this).parents('.appendable').find('form').find('.letmibd-tag-input').hide();
        $(this).parents('.appendable').find('form').find('textarea').prop('readonly', true);
        $(this).parents('.appendable').find('form').find('select').prop('disabled', true);
        $(this).parents('.appendable').find('form').find('textarea.letmibd-input').hide().siblings('.textarea-text').show();
        $(this).parents('.appendable').find('form').find('.input-group-text').hide();
        $(this).parents('.appendable').find('form').find('[id^="continuingJob"]').parent().parent().hide();
        $(this).parents('.appendable').find('form').find('.delete-expertise-area').hide();
        $(this).parents('.appendable').find('form').find('.add-expertise-area').hide();
        $(this).parents('.appendable').find('form').find('.expertise-duration').parent().parent().hide();
        $(this).parents('.appendable').find('.btn-box').parent().hide();
        $(this).parents('.appendable').find('.address select, .address input').parent().hide();
        $(this).parents('.appendable').find('.address .input-text').show();
        $(this).parents('.appendable').find('.address .separation').show();
        $(this).parents('.appendable').find('.required-mark').hide();
        $(this).parents('.appendable').find('.add-another-experience').show();
        $(this).parents('.appendable').find('.letmibd-input').each(function(){
            if($(this).val() === '') {
                $(this).hide();
            }
        });
        $(this).parents('.appendable').find('form').find('.expertise-area').each(function(){
            var expertise = $(this).val();
            var duration = $(this).parent().siblings().find('.expertise-duration').val();

            $(this).val(expertise + ' (' + duration + ' month)')
        });


        var text = $(this).parents('.appendable').find('.checkbox-group-2 input:checked').parent().map(function() {
            return $(this).text();
        }).get().join(',') + ',';
        text = text.slice(0, -2);
        $(this).parents('.appendable').find('.checkbox-texts').text(text).show();
        $(this).parents('.appendable').find('.form-check').hide();
        $(this).parents('.appendable').find('.checkbox-group-2').siblings('label').text('Skill learned by');

        var textareaText = $(this).parents('.appendable').find('form').find('textarea.letmibd-input').val();
        $(this).parents('.appendable').find('form').find('.textarea-text').text(textareaText);
    });

    $('.add-form-2').on('click', function(){
        $(this).parents('.no-data-exist').hide().siblings('.add-form-area').show().find('form').show().find('.letmibd-input').show();
    });
    $('.save-btn-2').on('click', function(){
        var textareaText = $(this).parents('.add-form-area').find('.letmibd-input').val();
        $(this).parents('.add-form-area').find('.letmibd-input').hide().siblings('.textarea-text').text(textareaText).show();
        $(this).parent().hide();
        $(this).parents('.add-form-area').find('.edit-details-btn-2').show();
    });
    $('.edit-details-btn-2').on('click', function(){
        $(this).hide();
        $(this).parents('.add-form-area').find('.save-btn-2').parent().show();
        $(this).parents('.add-form-area').find('.letmibd-input').show().siblings('.textarea-text').hide();
    });


    $('#insideBangladesh').on('change', function(){
        if($(this).is(':checked')) {
            $('#selectCountry').parent().hide();
            $('#selectDistrict, #selectThana, #selectPO').parent().show();
        }
    });
    $('#outsideBangladesh').on('change', function(){
        if($(this).is(':checked')) {
            $('#selectCountry').parent().show();
            $('#selectDistrict, #selectThana, #selectPO').parent().hide();
        }
    });
    $('#per_insideBangladesh').on('change', function(){
        if($(this).is(':checked')) {
            $('#per_selectCountry').parent().hide();
            $('#per_selectDistrict, #per_selectThana, #per_selectPO').parent().show();
        }
    });
    $('#per_outsideBangladesh').on('change', function(){
        if($(this).is(':checked')) {
            $('#per_selectCountry').parent().show();
            $('#per_selectDistrict, #per_selectThana, #per_selectPO').parent().hide();
        }
    });


    $('.accordion-item').each(function(){
        $(this).find('.btn-box').parent().hide();
    });

    $('.checkbox-group .form-check-input').change(function() {
        if ($(this).is(':checked')) {
            let label = $(this).parent().find('.form-check-label').text();
            let tag = `<span class="badge rounded-1" data-id="${$(this).attr('id')}">${label}<button type="button" class="close-btn"><i class="fa-regular fa-xmark"></i></button></span>`;
            $(this).parents('.checkbox-group').siblings('.checked-box').append(tag);
        } else {
            let checkID = $(this).attr('id');
            $('[data-id=' + checkID + ']').remove();
        }
    });
    $('.checked-box').on('click', '.close-btn', function() {
        let checkboxId = $(this).parent().data('id');
        $('#' + checkboxId).prop('checked', false);
        $(this).parent().remove();
    });
    $(document).on('mouseenter', '.badge .close-btn', function(){
        $(this).parent('.badge').css({'background':'#ff0000','color':'#fff'});
    }).on('mouseleave', '.badge .close-btn', function() {
        $(this).parent('.badge').css({'background':'#ECEFF1','color':'#707070'});
    });


    $('.letmibd-tag-input').each(function(){
        $(this).on('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const text = $(this).val().trim();
                if (text) {
                    const $tag = $('<span class="badge rounded-1">').text(text);
                    const $closeBtn = $('<button type="button" class="close-btn">').html('<i class="fa-regular fa-xmark"></i>');
                    $closeBtn.on('click', function() {
                        $tag.remove();
                    });
                    $tag.append($closeBtn);
                    $(this).siblings('.checked-box').append($tag);
                    $(this).val('');
                }
            }
        });
    });

    $('#disabilityYes').on('change', function(){
        if($(this).is(':checked')) {
            $(this).parents('.hide-radio').siblings('.disability-form').show();
            $(this).parents('.accordion-body').find('.disability-help').hide();
        }
    });
    $('#disabilityNo').on('change', function(){
        if($(this).is(':checked')) {
            $(this).parents('.hide-radio').siblings('.disability-form').hide();
            $(this).parents('.accordion-body').find('.disability-help').show();
        }
    });

    $('#txtInstituteCountryName').parent().hide();
    $('#foreignInstitute').on('change', function(){
        if($(this).is(':checked')) {
            $('#txtInstituteCountryName').parent().show();
        } else {
            $('#txtInstituteCountryName').parent().hide();
        }
    });


    $('.add-form').each(function(){
        $(this).on('click', function(){
            // $(this).parents('.no-data-exist').hide();
            $(this).parents('.no-data-exist').siblings('.appendable').find('.edit-details-btn').parent().hide();
            $(this).parents('.no-data-exist').siblings('.appendable').show().find('form').removeClass('read-mode');
            $(this).parents('.no-data-exist').siblings('.appendable').find('form').find('input').prop('readonly', false).show();
            $(this).parents('.no-data-exist').siblings('.appendable').find('form').find('.letmibd-tag-input').show();
            $(this).parents('.no-data-exist').siblings('.appendable').find('form').find('textarea').prop('readonly', false);
            $(this).parents('.no-data-exist').siblings('.appendable').find('form').find('select').prop('disabled', false);
            $(this).parents('.no-data-exist').siblings('.appendable').find('form').find('textarea.letmibd-input').show().siblings('.textarea-text').hide();
            $(this).parents('.no-data-exist').siblings('.appendable').find('form').find('.btn-box').parent().show();
        });
    });


    $(document).on('click', '.delete-appended-details-btn', function(){
        $(this).parents('.appendable').find('.delete-alert').show();
    });
    $('.dalete-data').each(function(){
        $(document).on('click', '.dalete-data', function(){
            if($('.more-experties, .more-skill, .more-language, .more-reference').find('.appendable').length === 1) {
                $(this).parents('.more-experties, .more-skill, .more-language, .more-reference').siblings('.no-data-exist').find('.part-icon, .part-txt').show();
            }
            $(this).parents('.delete-alert').hide().parents('.appendable').remove();
        });
    });
    $('.cancel-delete-data').on('click', function(){
        $(this).parents('.delete-alert').hide()
    })


    $('[id^="employmentStartDate"]').datepicker({
        onSelect: function(selected) {
            $(this).parents('.appendable').find(".employmentEndDate").datepicker("option", "minDate", selected);
        }
    });
    $('[id^="employmentEndDate"]').datepicker({
        onSelect: function(selected) {
            $(this).parents('.appendable').find(".employmentStartDate").datepicker("option", "maxDate", selected);
        }
    });


    $(document).on('change', '[id^="continuingJob"]', function(){
        if($(this).is(':checked')) {
            $(this).parents('.appendable').find('[id^="employmentEndDate"]').val('continuing').prop('disabled', true);
        } else {
            $(this).parents('.appendable').find('[id^="employmentEndDate"]').val('').prop('disabled', false);
        }
    });


    
    $(document).on('click', function(e){
        if ($(e.target).is('.expertise-list *') === false) {
            $('.expertise-list').hide();
        }
    });

    $(document).on('click', '.add-expertise-area', function(){
        if ($(this).siblings('.list-of-expertise-area').find('.single-expertise-area').length > 1) {
            $(this).hide();
        }
        if ($(this).siblings('.list-of-expertise-area').find('.single-expertise-area').length < 3) {
            $(this).siblings('.list-of-expertise-area').append(`
                <div class="row g-3 align-items-center single-expertise-area mb-2">
                    <div class="col-md-6 position-relative">
                        <input type="text" class="letmibd-input expertise-area">
                        <ul class="expertise-list"></ul>
                    </div>
                    <div class="col-md-3">
                        <div class="input-group">
                            <input type="text" class="letmibd-input expertise-duration">
                            <span class="input-group-text">Months</span>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <a role="button" class="btn btn-flush disabled delete-expertise-area"><i class="fa-light fa-trash-can"></i></a>
                    </div>
                </div>
            `);
            $(this).siblings().find('.delete-expertise-area').removeClass('disabled');
        }
    });
    $(document).on('click', '.delete-expertise-area', function(){
        $(this).parent().parent().parent().siblings('.add-expertise-area').show();
        if($(this).parents('.list-of-expertise-area').find('.single-expertise-area').length === 2) {
            $(this).parents('.list-of-expertise-area').find('.delete-expertise-area').addClass('disabled');
        } else {
            $(this).parents('.list-of-expertise-area').find('.delete-expertise-area').removeClass('disabled');
        }
        $(this).parent().parent().remove();
    });
    $('.expertise-list').hide()
    $(document).on('input', '.expertise-area', function() {
        var inputValue = $(this).val().toLowerCase(); // get input value and convert to lowercase
        $(this).siblings('.expertise-list').empty().show(); // clear previous list items
        
        // array of items to display
        var items = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
        
        // loop through items and display matching ones in the list
        for (var i = 0; i < items.length; i++) {
          if (items[i].toLowerCase().indexOf(inputValue) !== -1) {
            $('.expertise-list').append('<li>' + items[i] + '</li>');
          }
        }
    });
    $(document).on('click', '.expertise-list li', function(){
        var theSelectedValue = $(this).text();
        $(this).parent().hide().siblings('input').val(theSelectedValue);
    });


    let txtPrevCompanyName = 1;
    let txtPrevCompanyDesignation = 1;
    let startDateCount = 1;
    let endDateCount = 1;
    let continuingJob = 1;
    let txtCompanyLocation = 1;
    $('.append-form').on('click', function(){
        $(this).addClass()
        $(this).parent().siblings('.part-icon, .part-txt').hide();
        $(this).parent().parent().siblings('.more-experties').append(`
            <div class="appendable d-block mb-3">
                <div class="delete-alert">
                    <h2><span class="text-danger"><i class="fa-light fa-trash-can"></i></span> Delete!</h2>
                    <p>Are you sure, you want to delete this record?</p>
                    <div class="d-flex justify-content-end gap-2">
                        <button class="btn btn-light cancel-delete-data">CANCEL</button>
                        <button class="btn btn-danger dalete-data">YES, DELETE</button>
                    </div>
                </div>
                <div class="text-end top-btn-box">
                    <button class="btn-flush edit-appended-details-btn"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button class="btn-flush text-danger delete-appended-details-btn ms-2"><i class="fa-light fa-trash-can"></i> Delete</button>
                </div>
                <form>
                    <div class="row g-3 align-items-end">
                        <div class="col-12">
                            <h6 class="mb-0 experience-title">Experience - ${txtPrevCompanyName}</h6>
                        </div>
                        <div class="col-md-6">
                            <label for="txtPrevCompanyName-${txtPrevCompanyName}" class="letmibd-label">Company Name <span class="required-mark">*</span></label>
                            <input type="text" id="txtPrevCompanyName-${txtPrevCompanyName}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="txtPrevCompanyDesignation-${txtPrevCompanyDesignation}" class="letmibd-label">Designation <span class="required-mark">*</span></label>
                            <input type="text" id="txtPrevCompanyDesignation-${txtPrevCompanyDesignation}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label class="letmibd-label">Employment Period <span class="required-mark">*</span></label>
                            <div class="input-group">
                                <input type="text" class="letmibd-input employmentStartDate" id="employmentStartDate-${startDateCount}" placeholder="From Date (MM/DD/YYYY)">
                                <label class="input-group-text" for="employmentStartDate-${startDateCount}"><i class="fa-light fa-calendar-day"></i></label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group">
                                <input type="text" class="letmibd-input employmentEndDate" id="employmentEndDate-${endDateCount}" placeholder="To Date (MM/DD/YYYY)">
                                <label class="input-group-text" for="employmentEndDate-${endDateCount}"><i class="fa-light fa-calendar-day"></i></label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="continuingJob-${continuingJob}">
                                <label class="form-check-label" for="continuingJob-${continuingJob}">
                                    Continuing
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="trainingYear" class="letmibd-label d-block">Area of Expertise <span class="required-mark">*</span></label>
                            <span class="input-guide fw-normal fst-italic">Add your area of expertise with duration (max 3)</span>
                            <div class="list-of-expertise-area">
                                <div class="row g-3 align-items-center single-expertise-area mb-2">
                                    <div class="col-md-6 position-relative">
                                        <input type="text" class="letmibd-input expertise-area">
                                        <ul class="expertise-list"></ul>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="input-group">
                                            <input type="text" class="letmibd-input expertise-duration">
                                            <span class="input-group-text">Months</span>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <a role="button" class="btn btn-flush disabled delete-expertise-area"><i class="fa-light fa-trash-can"></i></a>
                                    </div>
                                </div>
                            </div>
                            <a role="button" class="btn btn-outline-success add-expertise-area"><i class="fa-regular fa-plus"></i> Add New</a>
                        </div>
                        <div class="col-12">
                            <label for="txtCompanyLocation-${txtCompanyLocation}" class="letmibd-label">Company Location <span class="required-mark">*</span></label>
                            <input type="text" id="txtCompanyLocation-${txtCompanyLocation}" class="letmibd-input">
                        </div>
                        <div class="col-12">
                            <div class="btn-box">
                                <a role="button" class="btn btn-success px-5 save-appended-btn">Save</a>
                                <a role="button" class="btn btn-light px-5 cancel-appended-btn">Close</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        `);
        txtPrevCompanyName++;
        txtPrevCompanyDesignation++;
        startDateCount++;
        endDateCount++;
        continuingJob++;
        txtCompanyLocation++;
        $('.more-experties').find('[id^="employmentStartDate"]').datepicker({
            onSelect: function(selected) {
                $(this).parents('.appendable').find('[id^="employmentEndDate"]').datepicker("option", "minDate", selected);
            }
        });
        $('.more-experties').find('[id^="employmentEndDate"]').datepicker({
            onSelect: function(selected) {
                $(this).parents('.appendable').find('[id^="employmentStartDate"]').datepicker("option", "maxDate", selected);
            }
        });
    });


    let skill = 1;
    $('.append-form-2').on('click', function(){
        $(this).addClass()
        $(this).parent().siblings('.part-icon, .part-txt').hide();
        $(this).parent().parent().siblings('.more-skill').append(`
            <div class="appendable d-block mb-3">
                <div class="delete-alert">
                    <h2><span class="text-danger"><i class="fa-light fa-trash-can"></i></span> Delete!</h2>
                    <p>Are you sure, you want to delete this record?</p>
                    <div class="d-flex justify-content-end gap-2">
                        <button class="btn btn-light cancel-delete-data">CANCEL</button>
                        <button class="btn btn-danger dalete-data">YES, DELETE</button>
                    </div>
                </div>
                <div class="text-end top-btn-box">
                    <button class="btn-flush edit-appended-details-btn"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button class="btn-flush text-danger delete-appended-details-btn ms-2"><i class="fa-light fa-trash-can"></i> Delete</button>
                </div>
                <form class="row g-3">
                    <div class="col-12">
                        <h6 class="mb-0">Skill - ${skill}</h6>
                    </div>
                    <div class="col-12">
                        <label for="skill-${skill}" class="letmibd-label">Skill <span class="required-mark">*</span></label>
                        <input type="text" class="letmibd-input" id="skill-${skill}">
                    </div>
                    <div class="col-12">
                        <label class="letmibd-label">How did you learn the skill? <span class="required-mark">*</span></label>
                        <div class="checkbox-group-2 d-flex flex-wrap gap-2">
                            <span class="checkbox-texts"></span>
                            <div class="form-check">
                                <label class="form-check-label d-flex align-items-center gap-1">
                                    <input class="form-check-input" type="checkbox" value="">
                                    Self
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label d-flex align-items-center gap-1">
                                    <input class="form-check-input" type="checkbox" value="">
                                    Job
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label d-flex align-items-center gap-1">
                                    <input class="form-check-input" type="checkbox" value="">
                                    Educational
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label d-flex align-items-center gap-1">
                                    <input class="form-check-input" type="checkbox" value="">
                                    Professional Training
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label d-flex align-items-center gap-1">
                                    <input class="form-check-input" type="checkbox" value="">
                                    NTVQF
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="btn-box">
                            <a role="button" class="btn btn-success px-5 save-appended-btn">Save</a>
                            <a role="button" class="btn btn-light px-5 cancel-appended-btn">Close</a>
                        </div>
                    </div>
                </form>
            </div>
        `);
        skill++;
    });


    let languageName = 1;
    let languageReading = 1;
    let languageWriting = 1;
    let languageSpeaking = 1;
    $('.append-form-3').on('click', function(){
        $(this).addClass()
        $(this).parent().siblings('.part-icon, .part-txt').hide();
        $(this).parent().parent().siblings('.more-language').append(`
            <div class="appendable d-block mb-3">
                <div class="delete-alert">
                    <h2><span class="text-danger"><i class="fa-light fa-trash-can"></i></span> Delete!</h2>
                    <p>Are you sure, you want to delete this record?</p>
                    <div class="d-flex justify-content-end gap-2">
                        <button class="btn btn-light cancel-delete-data">CANCEL</button>
                        <button class="btn btn-danger dalete-data">YES, DELETE</button>
                    </div>
                </div>
                <div class="text-end top-btn-box">
                    <button class="btn-flush edit-appended-details-btn"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button class="btn-flush text-danger delete-appended-details-btn ms-2"><i class="fa-light fa-trash-can"></i> Delete</button>
                </div>
                <form>
                    <div class="row g-3 align-items-end">
                        <div class="col-12">
                            <h6 class="mb-0 experience-title">Language - ${languageName}</h6>
                        </div>
                        <div class="col-md-6">
                            <label for="languageName-${languageName}" class="letmibd-label">Language <span class="required-mark">*</span></label>
                            <input type="text" id="languageName-${languageName}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="languageReading-${languageReading}" class="letmibd-label">Reading <span class="required-mark">*</span></label>
                            <select class="letmibd-input" id="languageReading-${languageReading}">
                                <option value="-1">Select</option>
                                <option value="0">High</option>
                                <option value="1">Medium</option>
                                <option value="2">Low</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="languageWriting-${languageWriting}" class="letmibd-label">Writing <span class="required-mark">*</span></label>
                            <select class="letmibd-input" id="languageWriting-${languageWriting}">
                                <option value="-1">Select</option>
                                <option value="0">High</option>
                                <option value="1">Medium</option>
                                <option value="2">Low</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="languageSpeaking-${languageSpeaking}" class="letmibd-label">Speaking <span class="required-mark">*</span></label>
                            <select class="letmibd-input" id="languageSpeaking-${languageSpeaking}">
                                <option value="-1">Select</option>
                                <option value="0">High</option>
                                <option value="1">Medium</option>
                                <option value="2">Low</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <div class="btn-box">
                                <a role="button" class="btn btn-success px-5 save-appended-btn">Save</a>
                                <a role="button" class="btn btn-light px-5 cancel-appended-btn">Close</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        `);
        languageName++;
        languageReading++;
        languageWriting++;
        languageSpeaking++;
    });


    let reference = 1;
    $('.append-form-4').on('click', function(){
        $(this).addClass()
        $(this).parent().siblings('.part-icon, .part-txt').hide();
        $(this).parent().parent().siblings('.more-reference').append(`
            <div class="appendable d-block mb-3">
                <div class="delete-alert">
                    <h2><span class="text-danger"><i class="fa-light fa-trash-can"></i></span> Delete!</h2>
                    <p>Are you sure, you want to delete this record?</p>
                    <div class="d-flex justify-content-end gap-2">
                        <button class="btn btn-light cancel-delete-data">CANCEL</button>
                        <button class="btn btn-danger dalete-data">YES, DELETE</button>
                    </div>
                </div>
                <div class="text-end top-btn-box">
                    <button class="btn-flush edit-appended-details-btn"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button class="btn-flush text-danger delete-appended-details-btn ms-2"><i class="fa-light fa-trash-can"></i> Delete</button>
                </div>
                <form>
                    <div class="row g-3 align-items-end">
                        <div class="col-12">
                            <h6 class="mb-0 experience-title">Reference - ${reference}</h6>
                        </div>
                        <div class="col-md-6">
                            <label for="referenceName-${reference}" class="letmibd-label">Name <span class="required-mark">*</span></label>
                            <input type="text" id="referenceName-${reference}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="referenceDesignation-${reference}" class="letmibd-label">Designation <span class="required-mark">*</span></label>
                            <input type="text" id="referenceDesignation-${reference}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="referenceOrganization-${reference}" class="letmibd-label">Organization <span class="required-mark">*</span></label>
                            <input type="text" id="referenceOrganization-${reference}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="referenceEmail-${reference}" class="letmibd-label">Email</label>
                            <input type="email" id="referenceEmail-${reference}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="referenceRelation-${reference}" class="letmibd-label">Relation</label>
                            <select class="letmibd-input" id="referenceRelation-${reference}">
                                <option value="Relative">Relative</option>
                                <option value="Family Friend">Family Friend</option>
                                <option value="Academic">Academic</option>
                                <option value="Professional">Professional</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="referenceMobile-${reference}" class="letmibd-label">Mobile</label>
                            <input type="tel" id="referenceMobile-${reference}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="referencePhoneOff-${reference}" class="letmibd-label">Phone (Off)</label>
                            <input type="tel" id="referencePhoneOff-${reference}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="referencePhoneRes-${reference}" class="letmibd-label">Phone (Res)</label>
                            <input type="tel" id="referencePhoneRes-${reference}" class="letmibd-input">
                        </div>
                        <div class="col-md-6">
                            <label for="referenceAddress-${reference}" class="letmibd-label">Address</label>
                            <textarea class="letmibd-input" id="referenceAddress-${reference}" rows="6"></textarea>
                            <span class="textarea-text"></span>
                        </div>
                        <div class="col-12">
                            <div class="btn-box">
                                <a role="button" class="btn btn-success px-5 save-appended-btn">Save</a>
                                <a role="button" class="btn btn-light px-5 cancel-appended-btn">Close</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        `);
        reference++;
    });


    $('#letmibdImageUpload').on('change', function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            $('#imagePreview').html('<img src="' + e.target.result + '">').addClass('has-image');
        }
        $(this).parents('.accordion-body').find('.image-upload-btn').removeClass('disabled').siblings('.image-not-uploaded-msg').hide();
    });

    $('.image-upload-btn').on('click', function(){
        $(this).hide();
        $('.image-upload-btn-box').show();
        $('.image-upload-area').hide();
        $('.cancel-image-upload-btn').hide();
    });
    $('.image-change-btn').on('click', function(){
        $('.image-upload-area').show();
        $(this).parent().hide();
        $('.image-upload-btn').show();
        $('.cancel-image-upload-btn').show();
    });
    $('.image-delete-btn').on('click', function(){
        $(this).parents('.accordion-item').find('.delete-alert').show();
    });
    $('.delete-data-2').on('click', function(){
        $(this).parents('.delete-alert').hide();
        $('#imagePreview').html('').removeClass('has-image');
        $(this).parents('.accordion-item').find('.image-upload-btn').addClass('disabled').show();
        $(this).parents('.accordion-item').find('.image-not-uploaded-msg').show();
        $(this).parents('.accordion-item').find('.image-upload-area').show();
        $(this).parents('.accordion-item').find('.image-upload-btn-box').hide();
    });


    $('.letmibd-sidebar').find('.sidebar-menu').find('.has-sub').siblings('ul').hide();
    $('.letmibd-sidebar').find('.sidebar-menu').find('.has-sub').on('click', function(){
        $(this).find('.fa-chevron-down').addClass('fa-chevron-up').removeClass('fa-chevron-down');
        $(this).parent().siblings().find('.icon').find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).siblings('ul').slideDown();
        $(this).parent().siblings().find('ul').slideUp();
    });
});

    
$(window).on('load', function() {
    if($('#insideBangladesh').is(':checked')) {
        $('#selectCountry').parent().hide();
        $('#selectDistrict, #selectThana, #selectPO').parent().show();
    }
    if($('#outsideBangladesh').is(':checked')) {
        $('#selectCountry').parent().show();
        $('#selectDistrict, #selectThana, #selectPO').parent().hide();
    }
    if($('#per_insideBangladesh').is(':checked')) {
        $('#per_selectCountry').parent().hide();
        $('#per_selectDistrict, #per_selectThana, #per_selectPO').parent().show();
    }
    if($('#per_outsideBangladesh').is(':checked')) {
        $('#per_selectCountry').parent().show();
        $('#per_selectDistrict, #per_selectThana, #per_selectPO').parent().hide();
    }
    
    $('.address select, .address input').parent().hide();
    $('.required-mark').hide();
    $('.hide-radio').hide();

    

    // Hide input or select element based on its data-input attribute
    $('[data-input="-1"]').hide();
    // Loop through each element with data-input attribute
    $('[data-input]').each(function() {
        var inputId = $(this).data('input');
        var inputVal = null;

        // Check if data-input matches an input element
        if ($('#' + inputId).is('input')) {
            inputVal = $('#' + inputId).val();
        }
        // Check if data-input matches a select element
        else if ($('#' + inputId).is('select')) {
            var selectedVal = $('#' + inputId + ' option:selected').val();
            if (selectedVal !== '-1') {
                inputVal = $('#' + inputId + ' option:selected').text();
            }
            else {
                $('[data-input="' + inputId + '"]').hide();
            }
        }

        // Set input value if it exists
        if (inputVal !== null) {
            $(this).text(inputVal);
        }

    });



    $('.input-texts').each(function() {
        var count = 0;
        $(this).find('span.input-text:not(:empty)').each(function() {
            count++;
            if (count !== $(this).parent().find('span.input-text:not(:empty)').length) {
                $(this).after('<span class="separation">,</span>');
            }
        });
    });



    $('.job-type .input-text').each(function(){
        var radioName = $(this).attr('data-radio');
        var radioID = $(this).parents('form').find('input[name=' + radioName + ']:checked').siblings('label').text();
        $(this).text(radioID + 'Job');
        if(!$(this).parents('form').find('input[type=radio]').is(':checked')) {
            $(this).hide();
        }
    });


    $('.checkbox-group .form-check-input').each(function(){
        if ($(this).is(':checked')) {
            let label = $(this).parent().find('.form-check-label').text();
            let tag = `<span class="badge rounded-1" data-id="${$(this).attr('id')}">${label}<button type="button" class="close-btn"><i class="fa-regular fa-xmark"></i></button></span>`;
            $(this).parents('.checkbox-group').siblings('.checked-box').append(tag);
        }
    });

    $('textarea.letmibd-input').each(function(){
        var textareaText = $(this).val();
        $(this).hide().siblings('.textarea-text').text(textareaText);
    });


    $('.letmibd-input').each(function(){
        if($(this).val() === '') {
            $(this).hide();
        }
    });

    if($('#disabilityYes').is(':checked')) {
        $('#disabilityYes').parents('.accordion-body').find('.hide-radio').siblings('.main-label').hide();
        $('#disabilityYes').parents('.accordion-body').find('.hide-radio').siblings('.disability-not-updated-msg').hide();
        $('#disabilityYes').parents('.hide-radio').siblings('.disability-form').show();
        $('#disabilityYes').parents('.accordion-body').find('.disability-help').hide();
        $('.disability-form').find('.form-check-input[name=disabilityShow]').hide().siblings('label').hide();
        $('.disability-form').find('.form-check-input[name=disabilityShow]:checked + label').show();
    }


    if($('#foreignInstitute').is(':checked')) {
        $('#txtInstituteCountryName').parent().show();
    } else {
        $('#txtInstituteCountryName').parent().hide();
    }
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))