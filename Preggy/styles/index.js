import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    heading: {
        fontFamily: 'NotoSerifTC-SemiBold',
        fontSize: 25,
        marginBottom: 20,
    },
    text: {
        fontFamily: 'NotoSerifTC-Regular',
        fontSize: 20,
        textAlign: 'center',
    },
    smallerText: {
        fontFamily: 'Roboto-Light',
        fontSize: 14,
      
        paddingVertical: 5,
    },
    weekInfo: {
        fontFamily: 'NotoSerifTC-Regular',
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
        textAlign: 'justify'
    },
    topMargin: {
        marginTop: 20
    }, 
    card: {
        width: 300,
    },
    image: {
        height: 150,
        width: 250,
        flex: 1,
        borderRadius: 10,
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(251,246,247)',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'rgb(251,246,247)'
    }
  })

