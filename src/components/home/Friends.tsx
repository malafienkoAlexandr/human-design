import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { THEME } from "../../theme";
import { User } from "UserModule";
import { AddFriendsButton } from "../buttons/AddFriendsButton";

type Props = {
  items: User[];
  addAction: () => void;
  showAllAction: () => void;
  onPress: () => void;
};

export const Friends = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Друзья</Text>
        <TouchableOpacity onPress={props.showAllAction}>
          <Text style={styles.all}>Смотреть все</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <AddFriendsButton onPress={props.addAction}></AddFriendsButton>
          <FlatList
            contentContainerStyle={{}}
            horizontal
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={() => <View></View>}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 187,
    backgroundColor: THEME.WHITE_COLOR,
  },
  content: {
    width: "100%",
    height: 145,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginTop: 24,
    marginLeft: 26,
    marginRight: 26,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: THEME.WHITE_COLOR,
  },
  main: {
    height: 134,
    marginTop: 0,
    marginLeft: 26,
    marginRight: 26,
    backgroundColor: THEME.WHITE_COLOR,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  list: {
    height: 156,
    flex: 1,
    position: "absolute",
  },
  personalChildContent: {
    width: "100%",
    padding: 16,
    marginRight: 16,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: THEME.BLACK_COLOR_APP,
  },
  all: {
    fontSize: 13,
    fontWeight: "500",
    color: THEME.GREY_COLOR_60,
  },
});
