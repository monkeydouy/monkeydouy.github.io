const fackbookClick = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    // "Android";
    window.location = "fb://page/109125357475042";
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    window.location = "fb://profile/109125357475042";
    //return "iOS";
  }
  //return "Other";
  window.location = "fb://page/109125357475042";
};
