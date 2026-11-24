const IMVE_ENDPOINT = 'https://api.app.i-mve.com/job/user/695abd66812e0a25504c7979';

function formatMoveDate(moveDate) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(moveDate || '');

  if (!match) {
    return moveDate || null;
  }

  const [, year, month, day] = match;
  return `${day}-${month}-${year}`;
}

function getRequiredField(data, fieldName, maxLength) {
  const value = data[fieldName];

  if (typeof value !== 'string') {
    return '';
  }

  const trimmedValue = value.trim();

  if (maxLength && trimmedValue.length > maxLength) {
    console.warn(
      `Truncated ${fieldName} from ${trimmedValue.length} to ${maxLength} characters.`
    );
  }

  return maxLength ? trimmedValue.slice(0, maxLength) : trimmedValue;
}

function summariseFields(data) {
  return Object.fromEntries(
    Object.entries(data)
      .sort(([firstName], [secondName]) => firstName.localeCompare(secondName))
      .map(([fieldName, value]) => [
        fieldName,
        {
          type: value === null ? 'null' : typeof value,
          length: typeof value === 'string' ? value.length : null,
          trimmedLength: typeof value === 'string' ? value.trim().length : null
        }
      ])
  );
}

function redactSubmittedValues(responseBody, formData) {
  return Object.entries(formData).reduce((redactedBody, [fieldName, value]) => {
    if (typeof value !== 'string' || value.length < 3) {
      return redactedBody;
    }

    return redactedBody.split(value).join(`[redacted ${fieldName}]`);
  }, responseBody);
}

export default {
  async formSubmitted(event) {
    const data = event.data || {};
    const requiredFields = [
      'first_name',
      'email',
      'phone',
      'mf_add1',
      'mt_add1'
    ];

    console.log(
      'Received verified form data:',
      JSON.stringify(summariseFields(data))
    );

    // Ignore verified submissions from any other forms added to the site later.
    if (requiredFields.some((fieldName) => !getRequiredField(data, fieldName))) {
      console.log('Skipping a verified submission that is not a complete contact enquiry.');
      return;
    }

    const formData = {
      first_name: getRequiredField(data, 'first_name'),
      email: getRequiredField(data, 'email'),
      phone: getRequiredField(data, 'phone'),
      mf_add1: getRequiredField(data, 'mf_add1', 200),
      mt_add1: getRequiredField(data, 'mt_add1', 200),
      move_date: formatMoveDate(data.move_date),
      source: getRequiredField(data, 'traffic-source') || 'Directly via website'
    };

    console.log(
      'Prepared i-Mve payload:',
      JSON.stringify(summariseFields(formData))
    );

    const response = await fetch(IMVE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const responseBody = await response.text();

    console.log('i-Mve response status:', response.status);

    if (!response.ok) {
      const safeResponseBody = redactSubmittedValues(responseBody, formData)
        .slice(0, 2000);

      console.error(
        'i-Mve rejection details:',
        safeResponseBody || '(empty response body)'
      );

      throw new Error(`i-Mve rejected a verified form submission with status ${response.status}.`);
    }

    console.log('Forwarded a verified contact enquiry to i-Mve.');
  }
};
