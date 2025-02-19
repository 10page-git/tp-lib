/*! tp-mythos | (c) mailplug */
const tenPage = (target) => {
    $(target).text("10PAGE 기업 홈페이지");
};

// $("").TPcontainsTextt("", {addClass: "", attr: "", html: ""})
$.fn.TPcontainsText = function (text, options = {}) {
    return this.filter((_, el) => $(el).text().includes(text)).each(function () {
        const $this = $(this);
        // 클래스 추가
        if (options.addClass) {
            $this.addClass(options.addClass);
        }
        // 속성 추가/변경
        if (options.attr) {
            Object.entries(options.attr).forEach(([key, value]) => {
                $this.attr(key, value);
            });
        }
        // HTML 변경
        if (options.html) {
            $this.html(options.html);
        }
    });
};
