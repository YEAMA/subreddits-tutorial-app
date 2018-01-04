import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class ListItem extends React.Component {
	render() {
		return (
			<View style={{flexDirection:'row'}}>
				<View style={styles.left}>
					<Image
						style={{ width: 80, height: 80 }}
						source={{ uri: this.props.img }}
					/>
				</View>

				<View style={styles.right}>
					<Text style={styles.text}>{this.props.title}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	left: {
		flexWrap: 'wrap', 
	    alignItems: 'flex-start',
	    flexDirection:'row',
	},
	right: {
		flexWrap: 'wrap', 
	    alignItems: 'flex-end',
	    flexDirection:'row',
	    width: Dimensions.get('window').width-50
	},
	text: {
		fontWeight: "300",
		padding: 10
	}
})