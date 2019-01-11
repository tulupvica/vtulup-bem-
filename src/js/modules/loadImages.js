const loadImages = {

    loadImages: function () {

        const $loadMoreBtn = $('.section-works__btn'),
              $projectsList = $('.projects');

        let $pageCounter = 1;

        $loadMoreBtn.on('click', function () {

            $.getJSON('../inc/projects-img-' + $pageCounter + '.json', function (result) {

                $.each(result, function (i) {
                    let htmlContent =
                        '<div class="projects__item">' +
                            '<a class="projects__link">' +
                                '<img class="projects__img" src="' + result[i].src + '" alt="' + result[i].alt + '">' +
                            '</a>' +
                        '</div>';
                    $projectsList.append(htmlContent);
                });
            });

            $pageCounter++;

            if ($pageCounter > 3) {
                $loadMoreBtn.fadeOut();
            }
        });
    }
};

export default loadImages;
