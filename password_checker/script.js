const passwordInput = document.getElementById('passwordInput');
const suggestions = document.getElementById('suggestions');

const passwordCriteria = {
  minLength: 8,
  hasUppercase: false,
  hasLowercase: false,
  hasNumber: false,
  hasSpecialChar: false
};

passwordInput.addEventListener('keyup', () => {
  const password = passwordInput.value;

  // Reset suggestions
  suggestions.textContent = '';
  
  // Check for uppercase, lowercase, number, and special character
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':",./<>?|\\ ]/.test(password);

  // Update criteria flags and provide suggestions
  passwordCriteria.hasUppercase = hasUppercase;
  passwordCriteria.hasLowercase = hasLowercase;
  passwordCriteria.hasNumber = hasNumber;
  passwordCriteria.hasSpecialChar = hasSpecialChar;
  
  // Check password length
  if (password.length < passwordCriteria.minLength) {
      suggestions.textContent += `- Your password needs at least ${passwordCriteria.minLength} characters.`;
    } 
  else if (!hasUppercase) {
    suggestions.textContent += `- Include at least one uppercase letter (A-Z).`;
  }
  else if (!hasLowercase) {
    suggestions.textContent += `- Include at least one lowercase letter (a-z).`;
  }
  else if (!hasNumber) {
    suggestions.textContent += `- Include at least one number (0-9).`;
  }
  else if (!hasSpecialChar) {
    suggestions.textContent += `- Include at least one special character (!@#$%^&*()_+\-=\[\]{};':",./<>?|\\ ).`;
  }
  else{
    suggestions.textContent += `- The sum of all the numbers should equal 41`;
  }

});
