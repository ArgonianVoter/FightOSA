
document.addEventListener('DOMContentLoaded', () => {

  const blockedTimezones = ['America/Utah','America/Oklahoma','America/Mississippi','America/Texas','America/Tennessee','America/Hawaii','America/Illinois','America/Vermont','America/California','America/Connecticut','America/Florida','America/Georgia','America/Louisiana','America/Utah','America/New_York','Europe/London','Australia/Sydney','Australia/Adelaide','Australia/Perth','Australia/Hobart','Asia/Colombo'];
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
	
  if (blockedTimezones.includes(tz)) {
    document.body.innerHTML = `
      <h1>Region Restricted</h1>
      <p>This service may not be available in your region.</p>
    `;
	    const redirectUrl = `https://argonianvoter.github.io/FightOSA/${tz}.html`;
		window.location.href = redirectUrl;	
  }
});
