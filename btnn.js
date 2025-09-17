document.addEventListener('DOMContentLoaded', () => {
    // Load saved data
    loadFormData();

    // Set up event listeners
    const form = document.getElementById('subsidyForm');
    form.addEventListener('input', saveFormData);
});

function saveFormData() {
    const formData = {
        refNo: document.getElementById('refNo').value,
        headOfFamily: document.getElementById('headOfFamily').value,
        childrenCount: document.getElementById('childrenCount').value,
        purok: document.getElementById('purok').value
    };
    localStorage.setItem('subsidyFormData', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('subsidyFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('refNo').value = formData.refNo || '';
        document.getElementById('headOfFamily').value = formData.headOfFamily || '';
        document.getElementById('childrenCount').value = formData.childrenCount || '';
        document.getElementById('purok').value = formData.purok || '';
    }
}
