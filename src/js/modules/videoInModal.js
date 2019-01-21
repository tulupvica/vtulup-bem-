const videoInModal = {

  videoInModal: function() {
    $('.story-video-bg__btn-play').fancybox({
      btnTpl: {
        close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
            "</button>",
      },
      // video: {
      //   tpl:
      //       '<video class="fancybox-video" controls controlsList="nodownload" poster="{{../images/bg-1-1600px.jpg}}">' +
      //       '<source src="{{}}" type="{{}}" /></video>',
      //   format: "", // custom video format
      //   autoStart: true
      // },
    });
  }
};

export default videoInModal;