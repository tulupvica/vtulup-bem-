const hiddenScroll = {

    // remove scroll on page when mobile menu is opened

    hiddenScroll: function () {

        const $body = $('body'),
            hamburgerBtn = ('.burger-btn'),
            hiddenScroll = ('hidden-scroll');

        $(hamburgerBtn).on('click', function () {
            $body.toggleClass(hiddenScroll);
        });
    }
};

export default hiddenScroll;