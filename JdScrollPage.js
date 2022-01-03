import React from "react";
import { View, Text, useWindowDimensions, StyleSheet, Image } from "react-native";

import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

/**
 * @namespace JdScrollPage.js
 * @author macbookpro/xiaobo
 * @type IFirstProps
 * @datetime 2021-12-28 23:09:53
 * @param props
 * @description
 */
const JdScrollPage = props => {

  const { width } = useWindowDimensions();
  const translationY = useSharedValue(0);
  const maxWid = width - 100 - 20;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  }, []);

  const headerViewAni = useAnimatedStyle(() => {
    const val = width - 20 - translationY.value;
    return {
      width: (val <= maxWid) ? maxWid : val,
    };
  }, []);

  const fixedView = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translationY.value,
        },
      ],
    };
  });

  const parentBlackView = useAnimatedStyle(() => {
    const val = 100 - translationY.value / 8;
    return {

      height: val <= 50 ? 50 : val,
    };
  });

  return (
    <View style={{ flex: 1 }}>


      <Animated.ScrollView onScroll={scrollHandler}>

        <Animated.View style={[{ alignItems: "flex-start",zIndex:10 }, fixedView]}>

          <Animated.View style={[styles.headerLayout, parentBlackView]}>

            <View style={styles.logoLayout}>
              <Image source={require('./logo.jpg')} style={styles.logoPic} resizeMode={"contain"}/>
            </View>

            <View style={styles.rightLayout}>
              <Text>this is layout</Text>
            </View>

          </Animated.View>

          {/*search bar*/}
          <Animated.View style={[styles.search,{width:width-20}, headerViewAni]}>
            <Text>请输入搜索内容</Text>
          </Animated.View>

        </Animated.View>

        {/*scroll content*/}
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello1</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>
        <View style={{ backgroundColor: "#ccc", height: 80 }}>
          <Text>hello</Text>
        </View>


      </Animated.ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  logo:{
    fontSize: 20,
    color: "#fff",
    width: 100,
    height: 50,
    textAlignVertical: "center",
    backgroundColor: "lime",
    textAlign: "center",
  },
  search:{
    backgroundColor: "#fff",
    paddingLeft: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 35,
    position: "absolute",
    bottom: 7,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  rightLayout:{
    width: 100,
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLayout:{
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "#e43130",
    justifyContent: "space-between",
  },
  logoPic:{
    width:100,
    maxHeight:50
  },
  logoLayout:{
    flexDirection:"row"
  }
})

export default JdScrollPage;
