//function get input field value 
function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value ;
    const inputValue = parseFloat(inputString);
    inputField.value = "";
    return inputValue;
}

//function get text field value
function getTextFieldValue(textId){
    const textField = document.getElementById(textId);
    const textValueString = textField.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}
//function get title
function getTitle(titleId){
    const titleField = document.getElementById(titleId);
    const titleElement = titleField.innerText;
    return titleElement;
}

//addEventListener for triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleBValue =  getInputFieldValue('triangle-b-field')
    const triangleHValue = getInputFieldValue('triangle-h-field');
    
    // //validation
    if (triangleBValue === null || triangleBValue === "" || isNaN(parseInt(triangleBValue)) || parseInt(triangleBValue) <= 0 ||
        triangleHValue === null || triangleHValue === "" || isNaN(parseInt(triangleHValue)) || parseInt(triangleHValue) <= 0) {
         alert("Please Provide right Number.");
         return;
        } 
    //calculate
    const triangleValue = 0.5 * triangleBValue * triangleHValue;
    const triangle = triangleValue.toFixed(2);
      //get title
      const title = getTitle('title-triangle');

       //create button
       var button = document.createElement("button");
       button.setAttribute("id", "myButton");
       button.setAttribute("class", "myButtonClass");
       button.setAttribute("type", "button");
       button.innerHTML = "Convert to m<sup>2</sup>";

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${1}</td>
      <td>${title}</td>
      <td>${triangle}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)
      tr.appendChild(button)
})




//addEventListener for rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWValue = getInputFieldValue('rectangleWField')
    const rectangleLValue = getInputFieldValue('rectangleLField')

    // //validation
    if (rectangleWValue === null || rectangleWValue === "" || isNaN(parseInt(rectangleWValue)) || parseInt(rectangleWValue) <= 0 ||
        rectangleLValue === null || rectangleLValue === "" || isNaN(parseInt(rectangleLValue)) || parseInt(rectangleLValue) <= 0) {
         alert("Please Provide right Number.");
         return;
        } 

    //calculate area
    const rectangleValue = rectangleWValue * rectangleLValue;
    const rectangle = rectangleValue.toFixed(2);

    //get title
    const title = getTitle('title-rectangle');

     //create button
     var button = document.createElement("button");
     button.setAttribute("id", "myButton");
     button.setAttribute("class", "myButtonClass");
     button.setAttribute("type", "button");
     button.innerHTML = "Convert to m<sup>2</sup>";

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${2}</td>
      <td>${title}</td>
      <td>${rectangle}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)
      tr.appendChild(button)
})



//addEventListener for Parallelogram
document.getElementById('btn-Parallelogram').addEventListener('click', function(){
    const ParaBValue = getTextFieldValue('bParallelogram')
    const ParaHValue = getTextFieldValue('hParallelogram')
    
    //calculate
    const Parallelogram = ParaBValue * ParaHValue;
    
    //get title
    const title = getTitle('title-parallelogram');

     //create button
     var button = document.createElement("button");
     button.setAttribute("id", "myButton");
     button.setAttribute("class", "myButtonClass");
     button.setAttribute("type", "button");
     button.innerHTML = "Convert to m<sup>2</sup>";

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${3}</td>
      <td>${title}</td>
      <td>${Parallelogram}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)
      tr.appendChild(button)
    
})

//addEventListener for Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusD1Value = getTextFieldValue('d1-rhombus');
    const rhombusD2Value = getTextFieldValue('d2-rhombus');

    //calculate
    rhombus = 0.5 * rhombusD1Value * rhombusD2Value;
    //get title
    const title = getTitle('title-rhombus');

     //create button
     var button = document.createElement("button");
     button.setAttribute("id", "myButton");
     button.setAttribute("class", "myButtonClass");
     button.setAttribute("type", "button");
     button.innerHTML = "Convert to m<sup>2</sup>";

    //   create and set value
      const container = document.getElementById('table-container');
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${4}</td>
      <td>${title}</td>
      <td>${rhombus}cm <sup>2</sup></td>
      `;
      container.appendChild(tr)
      tr.appendChild(button)
})

//addEventListener for Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonPValue = getTextFieldValue('p-pentagon');
    const pentagonBValue = getTextFieldValue('b-pentagon');

    //calculate
    const pentagon = 0.5 * pentagonPValue * pentagonBValue;
     //get title
     const title = getTitle('title-pentagon');

      //create button
      var button = document.createElement("button");
      button.setAttribute("id", "myButton");
      button.setAttribute("class", "myButtonClass");
      button.setAttribute("type", "button");
      button.innerHTML = "Convert to m<sup>2</sup>";

     //   create and set value
       const container = document.getElementById('table-container');
       const tr = document.createElement("tr");
       tr.innerHTML = `
       <td>${5}</td>
       <td>${title}</td>
       <td>${pentagon}cm <sup>2</sup></td>
       `;
       container.appendChild(tr)
       tr.appendChild(button)
})

//addEventListener for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseAValue = getTextFieldValue('a-ellipse');
    const ellipseBValue = getTextFieldValue('b-ellipse');

    //calculate
    const ellipseValue = 3.14 * ellipseAValue * ellipseBValue;
    const ellipse = ellipseValue.toFixed(2)
     //get title
     const title = getTitle('title-ellipse');

     //create button
     var button = document.createElement("button");
     button.setAttribute("id", "myButton");
     button.setAttribute("class", "myButtonClass");
     button.setAttribute("type", "button");
     button.innerHTML = "Convert to m<sup>2</sup>";

     //   create and set value
       const container = document.getElementById('table-container');
       const tr = document.createElement("tr");
       tr.innerHTML = `
       <td>${6}</td>
       <td>${title}</td>
       <td>${ellipse}cm <sup>2</sup></td>
       `;
       container.appendChild(tr)
       tr.appendChild(button)

       
})



// randomColor function
function randomColor(elementId) {
    // generate random RGB color values
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // set background color of the element
    document.getElementById(elementId).style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

// add event listener
document.getElementById("random-color").addEventListener('mouseover', function() {
    randomColor("random-bg");
    randomColor("random-bg2");
    randomColor("random-bg3");
    randomColor("random-bg4");
    randomColor("random-bg5");
    randomColor("random-bg6");
    randomColor("random-bg7");
});
