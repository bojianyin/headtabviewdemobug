import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { SceneMap } from 'react-native-tab-view';
import { HScrollView } from 'react-native-head-tab-view'
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header'

const FirstRoute = () => (
  <HScrollView index={0}>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}><Text>content</Text></View>
  </HScrollView>
);

const SecondRoute = () => (
  <HScrollView index={1}>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}><Text>content2</Text></View>
  </HScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={{flex:1}}>
      <CollapsibleHeaderTabView
        renderScrollHeader={() => <View style={{ height: 200, backgroundColor: 'red' }}/>}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    height:50,
    marginBottom:10
  },
});
