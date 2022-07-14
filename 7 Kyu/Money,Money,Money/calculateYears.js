//Submitted Solution and voted best practice
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    years++;
    principal = principal + ((principal * interest) - (principal * interest * tax));
  }
  return years;
}