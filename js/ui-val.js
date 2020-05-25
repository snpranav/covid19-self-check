$(document).ready(function() {
    /* HIGHLIGHT AND SELECT ONE RADIO ONLY */

    $('input[type="radio"]').click(function() {
      $('input[type="radio"]').each(function() {
        if ($(this).is(":checked")) {
          $(this)
            .parent()
            .addClass("checked");
        } else {
          $(this)
            .parent()
            .removeClass("checked");
        }
      });
    });

    /* CHECKBOX HIGHLIGHTS */

    $('input[name="pre_existing_conditions"]').click(function() {
      if ($(this).attr("id") !== "health-reset") {
        $(this)
          .parent()
          .addClass("checked");

        if ($('input[id="health-reset"]').is(":checked")) {
          $('input[id="health-reset"]')
            .prop("checked", false)
            .parent()
            .removeClass("checked");
        }
      }

      if ($(this).attr("id") == "health-reset") {
        $('input[name="pre_existing_conditions"]')
          .prop("checked", false)
          .parent()
          .removeClass("checked");

        $(this)
          .prop("checked", true)
          .parent()
          .addClass("checked");
      }
    });

    $("input:checkbox").change(function() {
      var ischecked = $(this).is(":checked");
      if (!ischecked) {
        $(this)
          .parent()
          .removeClass("checked");
      }
    });

    $('input[name="travel"]').click(function() {
      if ($(this).attr("id") !== "travel-reset") {
        $(this)
          .parent()
          .addClass("checked");

        if ($('input[id="travel-reset"]').is(":checked")) {
          $('input[id="travel-reset"]')
            .prop("checked", false)
            .parent()
            .removeClass("checked");
        }
      }

      if ($(this).attr("id") == "travel-reset") {
        $('input[name="travel"]')
          .prop("checked", false)
          .parent()
          .removeClass("checked");

        $(this)
          .prop("checked", true)
          .parent()
          .addClass("checked");
      }
    });
  });