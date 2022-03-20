function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

function handleSelectChange(optionSelectorEvent, output) {
  const container = document.getElementById(output);
  container.innerHTML = "";
  
  function resetToFirstOrOutput(inputElement, option, inheritedValue) {
    function getBaseNameOfPath(path) {
      const partials = path.split("\\");
      return partials[partials.length-1];
    }

    const appInput = document.createElement("input");
    appInput.name = "app";
    appInput.type = "hidden"; 

    inputElement.onclick = async function(event) {
      var target = event.target || event.srcElement;
      console.log(target, "clicked.");
      if (target.value.length == 0) {
        console.log("Suspect Cancel was hit, no files selected.");
        option.value = "Site";
        container.innerHTML = `Input URL: <input type="text" name="webite" placeholder="deployedUrl.com" />`;
      } else {
        option.value = inheritedValue;
        appInput.value = await encryptAndPushCode("/dist/"+getBaseNameOfPath(target.value));
        container.innerHTML = "<p>&#9989; Encryption loaded </p>";
        container.appendChild(appInput);
      }
    }
    
    inputElement.onchange = async function(event) {
      var target = event.target || event.srcElement;
      console.log(target, "changed.");
      if (target.value.length == 0) {
        console.log("Suspect Cancel was hit, no files selected.");
        if (numFiles == target.files.length) {
          option.value = "Site";
          container.innerHTML = `Input URL: <input type="text" name="webite" placeholder="deployedUrl.com" />`;
        }
      } else {
        option.value = inheritedValue;
        appInput.value = await encryptAndPushCode("/dist/"+getBaseNameOfPath(target.value));
        container.innerHTML = "<p>&#9989; Encryption loaded </p>";
        container.appendChild(appInput);
      }
    }
    
    inputElement.onblur = async function(event) {
      var target = event.target || event.srcElement;
      console.log(target, "changed.");
      if (target.value.length == 0) {
        console.log("Suspect Cancel was hit, no files selected.");
        if (numFiles == target.files.length) {
          option.value = "Site";
          container.innerHTML = `Input URL: <input type="text" name="webite" placeholder="deployedUrl.com" />`;
        }
      } else {
        option.value = inheritedValue;
        appInput.value = await encryptAndPushCode("/dist/"+getBaseNameOfPath(target.value));
        container.innerHTML = "<p>&#9989; Encryption loaded </p>";
        container.appendChild(appInput);
      }
    }

    inputElement.click();
  }

  switch (optionSelectorEvent.value) {
    case "Site": 
      container.innerHTML = `Input URL: <input type="text" name="webite" placeholder="deployedUrl.com" />`;

      break;
    case "Application": 
      const fileSelector = document.createElement('input');
      fileSelector.setAttribute('type', 'file');
      resetToFirstOrOutput(fileSelector, optionSelectorEvent, "Application");

      break;
    // case "Display": 
    //   const inputList = document.createElement('ul');
    //   inputList.setAttribute('type', 'select');

    //   const slideFile = document.createElement('input');
    //   slideFile.setAttribute('type', 'file');

    //   const addBtn = document.createElement('input');
    //   addBtn.setAttribute('type', 'button');
    //   addBtn.innerText = "+";
    //   addBtn.onclick = () => {
    //     inputList.appendChild(slideRow);
    //   }

    //   const slideRow = document.createElement('div');
    //   slideRow.innerHTML = slideFile;
    //   slideRow.appendChild(addBtn);

    //   inputList.appendChild(slideRow);
    //   container.appendChild(inputList);

    //   break;
    }
}