  document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementsByClassName('close')[0];
  
    calculateButton.addEventListener('click', function() {
      const income = parseFloat(document.getElementById('income').value);
      const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
      const deductions = parseFloat(document.getElementById('deductions').value) || 0;
      const age = document.getElementById('age').value;
  
      // Validate inputs
      const inputsValid = validateInputs(income, extraIncome, deductions, age);
  
      if (inputsValid) {
        const tax = calculateTax(income, extraIncome, deductions, age);
        const result = document.getElementById('result');
        result.innerHTML = `<p><h2>Your overall income will be</h2> <h2>${(income+extraIncome-deductions) - tax}</h2> after tax deductions.</p>`;
        modal.style.display = 'block';
      }
    });
  
    // closeButton.addEventListener('click', function() {
    //   modal.style.display = 'none';
    // });

    const closeModalButton = document.querySelector('.close-modal');
    closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    });

    // Add event listener for question mark icons
    const incomeQuestionMark = document.getElementById('incomeQuestionMark');
    incomeQuestionMark.addEventListener('click', function() {
    displayModal('Please enter your gross annual income in Lakhs. Only numeric values are allowed.');
    });
    // Repeat similar event listener for other question mark icons

    // Function to display modal with instructions
    function displayModal(message) {
    const modalContent = document.querySelector('.modal-content');
    const result = document.getElementById('result');
    result.innerHTML = `<p>${message}</p>`;
    modalContent.style.display = 'block';
    modal.style.display = 'block';
    }

    // Update the close button event listener to hide the modal content
    closeModalButton.addEventListener('click', function() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.display = 'none';
    modal.style.display = 'none';
    });

  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    function validateInputs(income, extraIncome, deductions, age) {
      let valid = true;
      if (isNaN(income)) {
        showErrorIcon('income');
        valid = false;
      } else {
        hideErrorIcon('income');
      }
  
      if (isNaN(extraIncome)) {
        showErrorIcon('extraIncome');
        valid = false;
      } else {
        hideErrorIcon('extraIncome');
      }
  
      if (isNaN(deductions)) {
        showErrorIcon('deductions');
        valid = false;
      } else {
        hideErrorIcon('deductions');
      }
  
      if (age === '') {
        showErrorIcon('age');
        valid = false;
      } else {
        hideErrorIcon('age');
      }
  
      return valid;
    }
  
    function showErrorIcon(inputId) {
      document.getElementById(inputId + 'ErrorIcon').style.display = 'block';
    }
  
    function hideErrorIcon(inputId) {
      document.getElementById(inputId + 'ErrorIcon').style.display = 'none';
    }
  
    function calculateTax(income, extraIncome, deductions, age) {
      const taxableIncome = income + extraIncome - deductions;
      let tax = 0;
  
      if (taxableIncome > 800000) {
        const taxRate = getTaxRate(age);
        tax = (taxableIncome - 800000) * taxRate;
      }
  
      return tax;
    }
  
    function getTaxRate(age) {
      switch (age) {
        case '<40':
          return 0.3;
        case '>=40&<60':
          return 0.4;
        case '>=60':
          return 0.1;
        default:
          return 0;
      }
    }
  });
  