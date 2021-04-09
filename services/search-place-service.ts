import Geocoder from "@timwangdev/react-native-geocoder";

export const search = async () => {
  try {
    let result = await Geocoder.geocodeAddress("Красн", {
      locale: "ru",
      maxResults: 10,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
