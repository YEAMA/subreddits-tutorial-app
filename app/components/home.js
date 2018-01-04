import React from 'react';
import { StyleSheet, Text, View, Picker, Slider, SectionList, Image } from 'react-native';

import ListItem from '../elements/listitem'

export default class HomeScreen extends React.Component {
  state = {
    type: "sports",
    count: 1,
    data: [],
    loading: true
  }

  fetchPosts () {
    fetch(`https://www.reddit.com/r/${this.state.type}/top.json?limit=${this.state.count}`)
    .then(response => response.json())
    .then((response) => {
      this.setState({
        data: response.data.children,
        loading: false
      })
    })
    .catch(e => console.error(e));
  }

  componentWillMount() {
    this.fetchPosts();
  }

  render() {
    let count = 0;
    let list = (<SectionList
                  renderItem={({item}) => <ListItem key={count++} img={item.data.thumbnail} title={item.data.title} />}
                  renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                  sections={[
                    {data: this.state.data, title: `Displaying ${this.state.data.length} Posts`}
                  ]}
                  keyExtractor={(item, index) => index}
                />);


    return (
      <View style={styles.container}>
        <Picker
          style={{ width: 200, height: 180 }}
          selectedValue={this.state.type}
          onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue}, this.fetchPosts)}>
          <Picker.Item label="Sports" value="sports" />
          <Picker.Item label="Food" value="food" />
          <Picker.Item label="Books" value="books" />
          <Picker.Item label="Funny" value="funny" />
        </Picker>

        <Slider
          style={{ width: 200, height: 70 }}
          minimumValue={1}
          maximumValue={10}
          step={1}
          onSlidingComplete={(val) => this.setState({ count: val }, this.fetchPosts)}
        />
        
        <View style={{ marginBottom: 150 }}>
        {(!this.state.loading) ?
          list :
          <Text style={{ color: 'red', padding: 20 }}>LOADING ... Please Wait!!</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  header: {
    fontWeight: 'bold',
    padding: 10
  }
});
