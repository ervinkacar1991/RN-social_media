import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../colorPalette/colors";
import ProfileInfo from "./ProfileInfo";
import { Feather } from "@expo/vector-icons";
import { useQuery } from "react-query";
import api from "../../services/api";

const DefaultCovereUri =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKDQ0NFQ8PFSsZFRkrNysrLSsrLTcrKy03NystLSsrKzctKys3LTc3Nys3KzcrKysrKystKy0tKzcrKystLf/AABEIAKABOwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB8QAQEBAQACAwEBAQAAAAAAAAABAhEDMRJBUSFxkf/EABkBAQEBAQEBAAAAAAAAAAAAAAIDAQAGB//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEQL/2gAMAwEAAhEDEQA/APJBrMSwRvYtBBQYpAFRilvP9b7I5RpUaaWrtLusigxSdqKiowSAzaryxyWsqLcsUoAqMUu2b1XLF43dGNNLSVm6rKhHLd0zdVBUjlmnVrKg2ZaGV6ZGqKENlEpUMssi1G3QFddRuQkVi3WdMt2MNLr2QB87G9C2LGXVixQbLJwWKDFIsQVGCWkWCowSiUtZVGKSi8OKnUWycdMxvkUOoNx4vHT4RPgqdQbA18KllVOotEUVGKUAUGCUrLbCgxyJatZVGzLWa05tWlFpQFBsjK9CskjUjPT5OutjHTrMutsWCuuu51ay+cDekr2nyQUGKSnQUGxJ06iqDBJKqcM1UYJX4iioxSgCowS1mKRVBppBFUGKQBUYJRLmNCoxSx8Gbh0S3ih1G5/GsadNaZW5Y3MauUsVGyyoigxSChjGiKGNlACsgLHXVBeMuu5W2bHzQb01gWooNkBVBilBUUGCRFRQY5XNaYazVRglSDWYoMEqAqMEiKKjBIIqgxSDN0xaqMMtXf4xQW5bMiKKjFKAKDBKWM3LYoMW5i1FRsiKGMaI0khjZI1ISK3bIAy69ID5mN6ZpYzcu2cs69mNlyGrlkxsgCgxSiNIoNmUFOKDBKyukcm8eT9/6qMEtHGhQabZ4vFFRg2eM79NpYqMcuQCo2JQVFRgkAVGKRFRUYpGbSoryxyAKDFKC8WRQY0kdM57GW/H9t2LYsR2sc9ZMY2QCuvVJ1uTij5iXpmOVdXItsIlihDdYsR0ZsUGyycFUGLQVFBilKi1FBjlrG7P8ds6l9POS8VGDzegZx5O+/bSg00iKKjBLjqf1G/JGFeWzIAqMUoKSKjBKVi1rc/rK3LHIBFBilFka4KHUWIooMEo1hlcez2xLoA0YWNY/GHZOKHVl6QHzS9LTXpzdN+nN0iAENjBZlqQxi3O5/WWvJfpkxuhRZnpjFsI6Xx1m5v5VRjZFRQYpG8eTnv0wKjFL0exwzqx1zqX/VBpJNT+Obs5WK8scsirIqMUpJ1riiowbn5PpzdfJ6c1uWzKNY+2SXl6qMEulyy6Q4Z1BuY1csqjGE9goMUugqNGMAPY3oDp184vS2dsxqjLafFQbZC3g5+S/RbZlmgENqR1xP45yOqgw6gJq8UGnlnd+mONIoN2U+LNy2KDFufBsVGLXPk/f+m041nKowSkjQKDBIiiowSzv1XF3cFeWzIiosMUt+O/Tbj6dooMEhQMYJZuWbHRFTqLagkp0xikDqdMY5dwHzu9HAHXQB11NXkcmt3+/wCMs2QQAhut+OOjOJ/GlBptKxauqyY2ZAFBilBUUGKRFazlQYszn7aVFBpsZsaFRilkXiKjFKOOvdd3Lye1eWOWBUWGxKN+O/TKKjBLsEvQxppAFBilBUVGKRm6v40KDG7gPnt6GAOuiavIrnu9rLSyAyUWRG/HP60sbomqtrlo9hlRjtX5ENyVE6vVBikBrOVBi0zlsFBpsDp2KDFKB2fsT5T9igxSqHyn6nyn6qMUjn5J6dPnP1nstn+q8scue5ysuvln25VbnqzIAqMUteO/To4uub2KDTSCooMEgCgxSgqKDG//2Q==";

const ProfileHeader = ({ user }) => {
  // const {
  //   isLoading,
  //   data: userInfo,
  //   isError,
  // } = useQuery(
  //   "fetchUserFollowers",
  //   () => api.fetchUserFollowers(user?.username),
  //   { enabled: !!user?.username }
  // );
  // if (!userInfo) {
  //   return (
  //     <View>
  //       <Text>Evo sad ce</Text>
  //     </View>
  //   );
  // }

  return (
    <View>
      <Image
        source={{
          uri: user?.cover ? user?.cover : DefaultCovereUri,
        }}
        style={styles.coverPhoto}
        resizeMode="cover"
      />
      <View style={styles.topIcons}>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{user?.username}</Text>
          <Feather name="chevron-down" style={styles.chevronIcon} />
        </View>
        <View style={styles.menuContainer}>
          <Feather name="plus-square" style={styles.plusIcon} />
          <TouchableOpacity>
            <Feather name="menu" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <ProfileInfo user={user?.username} />

      <View style={styles.profileInfoContainer}>
        <Image
          source={{
            uri: user?.photo,
          }}
          style={styles.profilePhoto}
          resizeMode="cover"
        />

        <Text
          style={{
            paddingVertical: 5,
            fontWeight: "bold",
            letterSpacing: 0.7,
            color: "white",
          }}
        >
          {user?.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  coverPhoto: {
    height: 200,
    width: "100%",
  },
  profileInfoContainer: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 210,
    alignItems: "center",
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.storyBorderColor,
  },
  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  chevronIcon: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusIcon: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 13,
  },
  menuIcon: {
    fontSize: 25,
    color: "white",
  },
});

export default ProfileHeader;
