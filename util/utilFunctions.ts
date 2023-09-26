import * as ImagePicker from "expo-image-picker";
import api from "../services/api";
export const handleEditFromGallery = async (
  setImage,
  setLoading,
  queryClient,
  bottomSheetRef
) => {
  setLoading(true);
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  if (result.canceled) {
    setLoading(false);
    return;
  }

  let selectedAssets = result?.assets;
  let localUri = selectedAssets[0]?.uri;
  let filename = localUri.split("/").pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();

  formData.append("photo", { uri: localUri, name: filename, type } as any);

  const res = await api.updateProfilePhoto(formData);
  setImage(res?.photo_thumbnail);
  setLoading(false);
  bottomSheetRef.current?.close();
  queryClient.refetchQueries("fetchUser");
};

export const handleEditTakePhoto = async (
  setImage,
  setLoading,
  queryClient,
  bottomSheetRef
) => {
  setLoading(true);
  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  if (result.canceled) {
    setLoading(false);
    return;
  }

  let selectedAssets = result?.assets;
  let localUri = selectedAssets[0]?.uri;
  let filename = localUri.split("/").pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();

  formData.append("photo", { uri: localUri, name: filename, type } as any);

  const res = await api.updateProfilePhoto(formData);
  setImage(res?.photo_thumbnail);
  setLoading(false);
  queryClient.refetchQueries("fetchUser");
  bottomSheetRef.current?.close();
};
