function removeSafelink(requestDetails) {
  var originalURL = getParameterByName('url', requestDetails.url);

  console.debug('Detected a "Microsoft Safe Link" redirect.');
  let domain = (new URL(originalURL));

  let double_wrapped = domain.hostname.endsWith("safelinks.protection.outlook.com");
  if (originalURL.startsWith("https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html")) {
    double_wrapped = true;
  };
  if (originalURL.startsWith("https://safelinks.protection.outlook.com/")) {
    double_wrapped = true;
  };
  if (originalURL.startsWith("https://outlook.office.com/mail/safelink.html")) {
    double_wrapped = true;
  };
  if (double_wrapped) {
    originalURL = getParameterByName('url', originalURL);
    domain = (new URL(originalURL));
  };

  let cam = domain.hostname.endsWith(".cam.ac.uk");
  if (domain.hostname == "universityofcambridgecloud-my.sharepoint.com") {
    cam = true;
  };
  if (domain.hostname == "uniofcam.saasiteu.com") {
    cam = true;
  };
  if (cam) {
    console.debug('Rewrote a Cambridge-related "Microsoft Safe Link" redirect.');
    return {
      redirectUrl: originalURL
    };
  } else {
    'pass'
  };
}

browser.webRequest.onBeforeRequest.addListener(
  removeSafelink,
  {
    urls: [
      "https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html*",
      "https://safelinks.protection.outlook.com/*",
      "https://*.safelinks.protection.outlook.com/*",
      "https://outlook.office.com/mail/safelink.html*",
    ]
  },
  ['blocking']
);

// Source: https://stackoverflow.com/a/901144
function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
