function bold() {
    console.log('bold')
    document.execCommand('bold', false, null);
  }

  function underline() {
    console.log('bold')
    document.execCommand('underline', false, null);
  }  

  function italic() {
    console.log('bold')
    document.execCommand('italic', false, null);
  }  

  function changeTextColor() {
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('input', function() {
      var selectedColor = colorPicker.value;
      document.execCommand('foreColor', false, selectedColor);
    });

    // Trigger the color picker dialog
     colorPicker.click();
  }
  function Left() {
    var editor = document.getElementById('editor');
    editor.style.textAlign = 'left';
  }
  function Center() {
      var editor = document.getElementById('editor');
      editor.style.textAlign = 'center';
    }
    function Right() {
      var editor = document.getElementById('editor');
      editor.style.textAlign = 'right';
    }

    function Justify() {
      var editor = document.getElementById('editor');
      editor.style.textAlign = 'justify';
    }