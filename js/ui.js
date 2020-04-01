 function eventFire(el, etype) {
        if (el.fireEvent) {
          el.fireEvent("on" + etype);
        } else {
          var evObj = document.createEvent("Events");
          evObj.initEvent(etype, true, false);
          el.dispatchEvent(evObj);
        }
      }

      function triggerEvent(elem, event) {
        var clickEvent = new Event(event); // Create the event.
        elem.dispatchEvent(clickEvent); // Dispatch the event.
      }

      var currentTab = 0; // Current tab is set to be the first tab (0)
      showTab(currentTab); // Display the current tab

      function showTab(n) {
        // This function will display the specified tab of the form ...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        // ... and fix the Previous/Next buttons:
        if (n == 0) {
          document.getElementById("prevBtn").style.display = "none";
        } else {
          document.getElementById("prevBtn").style.display = "inline";
        }
        
        //last screen
        
        if (n == x.length - 2) {
          if(submitButtonText!=undefined || submitButtonText!=null) {
            document.getElementById("nextBtn").innerHTML = submitButtonText;
          }
        } else {
          if(nextButton!=undefined || nextButton!=null) {
            document.getElementById("nextBtn").innerHTML = nextButton;
          }
        }
        
        
        
        if (n == x.length - 1) {
          
          covid();

          document.getElementById("nextBtn").style.display = "none";
          document.getElementById("nextBtn").type = "submit";
          eventFire(document.getElementById("nextBtn"), "click");
          document.getElementById("prevBtn").style.display = "none";

         
        }

        // ... and run a function that displays the correct step indicator:
        fixStepIndicator(n);
      }

      function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form... :
        if (currentTab >= x.length) {
          return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
      }

      function validateForm() {
        var x,
          y,
          i,
          valid = true;
        var z;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        z = x[currentTab].querySelector("h1");

        // A loop that checks every input field in the current tab:
        for (var i = 0; i < y.length; i++) {
          if (y[i].checked) {
            z.style.color = "black";
            document.getElementById("nextBtn").disabled = false;
            return true;
          } else {
            valid = false;
            z.style.color = "red";
          }
        }

        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
          document.getElementsByClassName("step")[currentTab].className +=
            " finish";
        }
        return valid; // return the valid status
      }

      function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        var i,
          x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class to the current step:
      }