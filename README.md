### TAX CALCULATOR WEBSITE

This website allows users to calculate their tax based on their income, age, and deductions. The tax calculation follows a specific formula detailed below.

#### Tax Calculation Formula:

- **Taxable Income:** 
    - Overall Income under 8 Lakhs is not taxed.
    - Overall Income over 8 Lakhs is taxed at different rates based on age:
        - Age < 40: 30%
        - Age ≥ 40 but < 60: 40%
        - Age ≥ 60: 10%

#### Features:

- **Input Validation:**
    - Users can input their income, age, and deductions.
    - Error icons will appear next to the input fields if incorrect values are entered. Hovering over these icons will display tooltips with error messages.

- **Age Dropdown:**
    - Users select their age range (<40, ≥ 40 & < 60, or ≥ 60) from a dropdown menu.

- **Error Handling:**
    - Error icons are not initially visible.
    - If the age dropdown is not selected before submission, an error icon will appear, indicating that the input is mandatory.

- **Modal Popup:**
    - Upon submission, a modal popup displays the calculated tax amount based on the provided information.

#### Usage:

1. Enter your gross annual income, additional income, deductions, and select your age range.
2. Ensure all input fields are correctly filled. Error icons will appear if any incorrect values are entered.
3. Select your age range from the dropdown menu if not already selected.
4. Click the "Submit" button.
5. The modal popup will display the calculated tax amount.

#### Netlify Deploy Link:

[https://taxcalctool.netlify.app/]

#### Technologies Used:

- HTML5
- CSS3
- JavaScript

#### How to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Create a new Pull Request.

---

By [Nishant Verma]
