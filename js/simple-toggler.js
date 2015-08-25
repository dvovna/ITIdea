(function () {
    'use strict';

    $.fn.simpleToggler = function () {
        var $btn = $(this);

        $btn.on("click", function (e) {
            e.preventDefault();

            $($btn.data("el-id")).toggleClass('extended');
        });
    }
}());