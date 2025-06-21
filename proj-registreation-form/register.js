function createParticipantHTML(index) {
  return `
  <section class="participant">
    <p>Participant ${index}</p>
    <div class="item">
      <label for="fname${index}">First Name<span>*</span></label>
      <input id="fname${index}" type="text" name="fname${index}" required />
    </div>
    <div class="item activities">
      <label for="activity${index}">Activity #<span>*</span></label>
      <input id="activity${index}" type="text" name="activity${index}" />
    </div>
    <div class="item">
      <label for="fee${index}">Fee ($)<span>*</span></label>
      <input id="fee${index}" type="number" name="fee${index}" />
    </div>
    <div class="item">
      <label for="date${index}">Desired Date <span>*</span></label>
      <input id="date${index}" type="date" name="date${index}" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select id="grade${index}" name="grade${index}">
        <option value="" disabled selected></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>
  `;
}

const addButton = document.getElementById('add');
const participantsFieldset = document.querySelector('.participants');

let participantCount = 1; 

addButton.addEventListener('click', () => {
  participantCount++;
  const participantHTML = createParticipantHTML(participantCount);

  // Insert the new participant section before the Add button
  addButton.insertAdjacentHTML('beforebegin', participantHTML);
});

const submitButton = document.getElementById('submitButton');

function submitForm(event) {
  event.preventDefault();

  // Calculate total fees
  const total = totalFees();

  // Collect all participant data
  const participants = [];

  for (let i = 1; i <= participantCount; i++) {
    // Use querySelector to safely get inputs, if the participant section exists
    const fname = document.getElementById(`fname${i}`)?.value || '';
    const activity = document.getElementById(`activity${i}`)?.value || '';
    const fee = document.getElementById(`fee${i}`)?.value || '';
    const date = document.getElementById(`date${i}`)?.value || '';
    const grade = document.getElementById(`grade${i}`)?.value || '';

    // Only add participant if they have a first name (or some criteria)
    if (fname.trim() !== '') {
      participants.push({ fname, activity, fee, date, grade });
    }
  }

  // You can also get other form fields here if needed (e.g., adult_name, phone, etc.)

  // Display or process data — here’s an example of logging
  console.log("Participants:", participants);
  console.log("Total Fees:", total);
}