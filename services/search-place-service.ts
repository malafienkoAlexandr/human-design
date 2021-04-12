import Geocoder from "@timwangdev/react-native-geocoder";

type Props = {
  place: string;
};

export const searchPlace = async () => {
  try {
    await Geocoder.geocodeAddress("Моск", {
      locale: "ru",
    });
  } catch (error) {}
};
