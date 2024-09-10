const dummyApiResponse = {
  showLightDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColor: true,
  showTreeNavigationView: true,
  showCustomTabView: false,
  showAccrodian: true,
};

export function FeatureFlagServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(resolve(dummyApiResponse), 500);
    } else {
      reject('Something went to wrong! please try again.');
    }
  });
}
