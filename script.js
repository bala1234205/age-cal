function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultContainer = document.getElementById('result');
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    
    // Check if date is valid
    if (!birthdateInput.value) {
        resultContainer.innerHTML = `
            <div class="error-message">
                Please select your date of birth!
            </div>
        `;
        resultContainer.classList.add('show');
        return;
    }
    
    // Check if birthdate is in the future
    if (birthdate > today) {
        resultContainer.innerHTML = `
            <div class="error-message">
                Date of birth cannot be in the future!
            </div>
        `;
        resultContainer.classList.add('show');
        return;
    }
    
    // Calculate age
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
    
    // Adjust for negative days
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate total days
    const timeDiff = today.getTime() - birthdate.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    // Display result
    resultContainer.innerHTML = `
        <div class="result-box">
            <div class="result-title">Your Age</div>
            <div class="age-display">
                <div class="age-item">
                    <div class="age-number">${years}</div>
                    <div class="age-label">Years</div>
                </div>
                <div class="age-item">
                    <div class="age-number">${months}</div>
                    <div class="age-label">Months</div>
                </div>
                <div class="age-item">
                    <div class="age-number">${days}</div>
                    <div class="age-label">Days</div>
                </div>
            </div>
            <div class="total-days">
                Total Days: ${totalDays.toLocaleString()}
            </div>
        </div>
    `;
    
    resultContainer.classList.add('show');
}

// Allow Enter key to calculate
document.getElementById('birthdate').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateAge();
    }
});

