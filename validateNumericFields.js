function validateNumericField(executionContext) {
  var formContext = executionContext.getFormContext();
  var field = executionContext.getEventSource(); // Gets the field that triggered the event

  if (field) {
    // Get the current value of the field
    var fieldValue = field.getValue();

    // Regex to allow only numbers
    var numericRegex = /^\d*$/;

    if (fieldValue && !numericRegex.test(fieldValue)) {
      // Show an error message directly under the field
      field.controls.forEach(function (control) {
        control.setNotification("Only numbers are allowed in this field.");
      });

      // Optionally clear the field if it contains non-numeric characters
      field.setValue(null);
    } else {
      // Clear the error message if input is valid
      field.controls.forEach(function (control) {
        control.clearNotification();
      });
    }
  } else {
    console.error("Event source field not found.");
  }
}
