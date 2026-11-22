const IMVE_ENDPOINT = 'https://api.app.i-mve.com/job/user/695abd66812e0a25504c7979';

function formatMoveDate(moveDate) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(moveDate || '');

  if (!match) {
    return moveDate || null;
  }

  const [, year, month, day] = match;
  return `${day}-${month}-${year}`;
}

function getRequiredField(data, fieldName) {
  const value = data[fieldName];
  return typeof value === 'string' ? value.trim() : '';
}

export default {
  async formSubmitted(event) {
    const data = event.data || {};
    const requiredFields = [
      'first_name',
      'email',
      'phone',
      'mf_postcode',
      'mt_postcode'
    ];

    // Ignore verified submissions from any other forms added to the site later.
    if (requiredFields.some((fieldName) => !getRequiredField(data, fieldName))) {
      console.log('Skipping a verified submission that is not a complete contact enquiry.');
      return;
    }

    const formData = {
      first_name: getRequiredField(data, 'first_name'),
      email: getRequiredField(data, 'email'),
      phone: getRequiredField(data, 'phone'),
      mf_postcode: getRequiredField(data, 'mf_postcode'),
      mt_postcode: getRequiredField(data, 'mt_postcode'),
      move_date: formatMoveDate(data.move_date),
      source: getRequiredField(data, 'traffic-source') || 'Directly via website'
    };

    const response = await fetch(IMVE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`i-Mve rejected a verified form submission with status ${response.status}.`);
    }

    console.log('Forwarded a verified contact enquiry to i-Mve.');
  }
};
