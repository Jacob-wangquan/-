
$( function() { 
    var inputEl = $('.search'), 
        defVal = inputEl.val(); 
    inputEl.bind({ 
        focus: function() { 
            var _this = $( this); 
            if (_this.val() == defVal) { 
                _this.val(''); 
            } 
        }, 
        blur: function() { 
            var _this = $( this); 
            if (_this.val() == '') { 
                _this.val(defVal); 
            } 
        } 
    }); 
})
