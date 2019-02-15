const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');

// Add a name to the patient list
if (command === 'add') {
  patientList.push(prompt('Please enter a new patient name'));
}

// Update the patient list with new name
if (command === 'update') { 
  var oldpatient = prompt(('Please enter the patient name to be updated'));
  var newpatient = prompt(('Please enter the new patients name'));
  for ( let i = 0; i < patientList.length; i++ ) {
    if (patientList[i] === oldpatient) {
        patientList[i] = newpatient;
    }
  }  
}
// Delete a patient name
if (command === 'delete') {
  var delpatient = patientList.indexOf(prompt('Please enter the patient name to delete'));
  alert(patientList[delpatient]);
  patientList.splice(delpatient, 1);
  alert(patientList);
}

// Reorder two patient names
if (command === 'reorder') {
  var ordpatient1 = patientList.indexOf(prompt('Please enter the first patient to reorder'));
  var ordpatient2 = patientList.indexOf(prompt('Please enter the second patient to reorder'));
  alert(patientList);
  patientList.reverse(ordpatient1, ordpatient2)
  alert(patientList);
}

//   }
// }
// Display the patient list
// for (let i = 0; i < patientList.length; i++){
//   const patient = patientList[i];
//   alert(patient);
// }

alert(patientList);



