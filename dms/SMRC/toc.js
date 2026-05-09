$(document).ready(function() {
  function CloseNav() {
    $(".choice-collapse").stop().animate({
      'height': 0
    }, 300, function() {
      $('.choice-collapse').removeClass('in').addClass("collapse");
    });
    $(".choice-btn").stop().removeClass('collapsed');
  }

  $('html').click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".choice-collapse").hasClass("choice-collapse in");
    if (_opened === true && !clickover.hasClass("choice-btn")) {
      $('.choice-btn').toggleClass('highlight');
      CloseNav();
    }

  });

  $('.choice-btn').click(function() {
    $(this).toggleClass('highlight').blur();
  });
});





$(document).ready(function() {
  var hs0 = new hideShow('open0', 'close0');
  var hs1 = new hideShow('open1', 'close1');
  var hs2 = new hideShow('open2', 'close2');
  var hs3 = new hideShow('open3', 'close3');
  var hs4 = new hideShow('open4', 'close4');
  var hs5 = new hideShow('open5', 'close5');
  var hs6 = new hideShow('open6', 'close6');
  var hs7 = new hideShow('open7', 'close7');
  var hs8 = new hideShow('open8', 'close8');
  var hs9 = new hideShow('open9', 'close9');
  var hs11 = new hideShow('open11', 'close11');
  var hs12 = new hideShow('open12', 'close12');
  var hs13 = new hideShow('open13', 'close13');
  var hs14 = new hideShow('open14', 'close14');
  var hs15 = new hideShow('open15', 'close15');
  var hs16 = new hideShow('open16', 'close16');
  var hs17 = new hideShow('open17', 'close17');
  var hs18 = new hideShow('open18', 'close18');
  var hs19 = new hideShow('open19', 'close19');
  var hs20 = new hideShow('open20', 'close20');
  var hs21 = new hideShow('open21', 'close21');
  var hs22 = new hideShow('open22', 'close22');
  var hs50 = new hideShow('open50', 'close50');
  var hs51 = new hideShow('open51', 'close51');
  var hs52 = new hideShow('open52', 'close52');
  var hs53 = new hideShow('open53', 'close53');
  var hs54 = new hideShow('open54', 'close54');
  var hs55 = new hideShow('open55', 'close55');
  var hs56 = new hideShow('open56', 'close56');
  var hs57 = new hideShow('open57', 'close57');
  var hs58 = new hideShow('open58', 'close58');
  var hs59 = new hideShow('open59', 'close59');
  var hs60 = new hideShow('open60', 'close60');
  var hs61 = new hideShow('open61', 'close61');
  var hs62 = new hideShow('open62', 'close62');
});

function hideShow(toggleID, closeID) {
  this.$toggle = $('#' + toggleID);
  this.$close = $('#' + closeID);
  this.$region = $('#' + this.$toggle.attr('aria-controls'));
  this.keys = {
    enter: 13,
    space: 32
  };
  this.toggleSpeed = 500;
  this.bindHandlers();
}

hideShow.prototype.bindHandlers = function() {
  var thisObj = this;
  this.$toggle.click(function(e) {
    thisObj.toggleRegion();
    e.stopPropagation();
    return false;
  });
  this.$close.click(function(e) {
    thisObj.hideRegion();
    e.stopPropagation();
    return false;
  });
}

hideShow.prototype.hideRegion = function() {
  this.$region.hide().attr('aria-expanded', 'false');
  this.$toggle.find('span').html('<i class="fa fa-caret-down right-fa"></i>');
  this.$toggle.focus();
}

hideShow.prototype.toggleRegion = function() {
  var thisObj = this;
  this.$region.slideToggle(this.toggleSpeed, function() {
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
      $(this).focus();
      thisObj.$toggle.find('span').html('<i class="fa fa-caret-up right-fa"></i>');
    } else {
      $(this).attr('aria-expanded', 'false');
      thisObj.$toggle.find('span').html('<i class="fa fa-caret-down right-fa"></i>');
    }
  });
}

//Basic on idea of http://oaa-accessibility.org/example/20/
