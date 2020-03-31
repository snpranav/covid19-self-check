function covid() {
  
        var data = $("form")
          .serialize()
          .split("&");
        console.log(data);
        var obj = {};
        for (var key in data) {
          console.log(data[key]);
          obj[data[key].split("=")[0]] = data[key].split("=")[1];
        }

        console.log(obj);

        var participant = obj.participant;

        var gender = obj.gender;

        var age = obj.age;

        var ped = obj.pre_extisting_disorders;

        var tr = obj.travel;

        var ic = obj.internal_travel_contact;

        var rl = obj.covid_confirm_relation;

        var fever = obj.fever;

        var hdc = obj.hdc;

        var cough = obj.cough;

        var cold = obj.cold;

        var bc = obj.breathing_congestion;

        var tp = obj.speaking_disorder;

        var st = 0;

   
        

        if (
          tr == "yes" ||
          ic == "yes" ||
          rl == "yes" ||
          (fever == "yes" && cough == "yes") ||
          (fever == "yes" && cough == "yes" && bc == "yes" && ped == "yes")
        ) {
          st = 1;
        } else if (
          fever == "yes" ||
          cough == "yes" ||
          cold == "yes" ||
          hdc == "yes"
        ) {
          st = 2;
        } else {
          st = 3;
        }

        $("#pdo").val(st);

        if (st == "1") {
          $("#hr").css("display", "block");
        }

        if (st == "2") {
          $("#mr").css("display", "block");
        }

        if (st == "3") {
          $("#nr").css("display", "block");
        }
      }