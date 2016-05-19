
//JavaScript codes
//Constructor:begin
function result(x,y,operation){
  this.x=x;//x-variable to store the first value
  this.y=y;//y-variable to store the second value
  this.operation=operation;//operation variable is to store the type of the operation
}
//constructor:end
//...............................................................................
var esta= new result(0,0,"empty");//creat an object

//...............................................................................
//method:values:begin:this method is to disply the numbers on the text field
function values(x) {
  document.calculator.output.value += x;
}


//the below functions are to do the opperations. The name od the method refers to
//the rules
//............................................................................
//Method:Addition:begin
function Addition(){
    esta.x = document.calculator.output.value;//store the first value in the object
    esta.operation = "addition";//store the name of the operation in the objest
    document.getElementById("output").value = "";
    document.calculator.output.value = ' - ';
    document.getElementById("output").value = "";//clear the screan
    return (esta.x, esta.operation);//retun the object vlues
}

//Method:Addition:end
//............................................................................
//Method:Minus:begin
function Minus() {
  esta.x = document.calculator.output.value;//store the first value in the object
  esta.operation = "minus";//store the name of the operation in the objest
  document.getElementById("output").value = "";
  document.calculator.output.value = ' - ';
  document.getElementById("output").value = "";//clear the screan
  return (esta.x, esta.operation);//retun the object vlues
}
//Method:Minus:end
//..................................................................
//Method:Division:begin
function Division() {
  esta.x = document.calculator.output.value;//store the first value in the object
  esta.operation = "division";//store the name of the operation in the objest
  document.getElementById("output").value = "";
  document.calculator.output.value = ' / ';
  document.getElementById("output").value = "";//clear the screan
  return (esta.x, esta.operation);//retun the object vlues
}
//Method:Division:end
//..................................................................
//Method:Sign:begin
function Multiply() {
  esta.x = document.calculator.output.value;//store the first value in the object
  esta.operation = "multiply";//store the name of the operation in the objest
  document.getElementById("output").value = "";
  document.calculator.output.value = ' * ';
  document.getElementById("output").value = "";//clear the screan
  return (esta.x, esta.operation);//retun the object vlues
}
//Method:Sign:end
//..................................................................
//Method:Sign:begin
function Sign() {
//multiply by (-1) to change the sign to the opposite one
  document.calculator.output.value = document.calculator.output.value * (-1);
}
//Method:Sign:end
//..................................................................
//Method:Mod:begin
function Mod() {
  esta.x = document.calculator.output.value;
  esta.operation = "mod";//store the name of the operation in the objest
  document.getElementById("output").value = "";//clear the screan
  document.calculator.output.value = ' % ';
  document.getElementById("output").value = ""; //clear the screan
  return (esta.x, esta.operation); //retun the object vlues
}

//Method:Mod:end
//..................................................................
//Method:Clear:begin
function Clear() {
  document.getElementById("output").value = "";//clear the screan
  //set the object attribute to zero
  esta.x = 0;
  esta.y = 0;
  return (esta.x, exta.y);
}
//Method:Mod:end
//..................................................................
//Method:equal:begin
function equal() {//in this method where we do the arthmitic operations
  esta.y = document.calculator.output.value;//store the scond value in the object

  if (esta.operation == "addition") {
      document.calculator.output.value = ' = ';
      document.getElementById("output").value = "";
      final = Number(esta.x) + Number(esta.y);//final:it is the final answer
      document.calculator.output.value = final;//display the value
  } else {
    if (esta.operation == "minus") {//if my operation is minus, subtract y from x
      document.calculator.output.value = ' = ';
      document.getElementById("output").value = "";
      final = Number(esta.x) - Number(esta.y);
      document.calculator.output.value = final;
    } else {
       if(esta.operation == "division") {
        document.calculator.output.value = ' = ';
        document.getElementById("output").value = "";
        final = Number(esta.x) / Number(esta.y);
        document.calculator.output.value = final;
      } else {
        if(esta.operation == "mod") {
          document.calculator.output.value = ' = ';
          document.getElementById("output").value = "";
          final = Number(esta.x) % Number(esta.y);
          document.calculator.output.value = final;
        } else {
          if(esta.operation == "multiply") {
            document.calculator.output.value = ' = ';
            document.getElementById("output").value = "";
            final = Number(esta.x) * Number(esta.y);
            document.calculator.output.value = final;
          }

        }

      }
    }
  }
}
//Method:equal:end
//..................................................................
