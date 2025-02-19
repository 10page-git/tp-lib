/*! tp-logos | (c) mailplug */

// 정적 콘텐츠 메서드
// - 논리적, 체계적, 분석적
// - 데이터 처리, API 호출, 계산
// - 명확한 입출력, 예측 가능
// - 데이터 관리, 알고리즘, 성능 최적화

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
