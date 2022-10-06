import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        color: 'green',
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 30,
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
    },
    pickerBorder: {
        borderRadius: 12, 
        borderWidth: 2
    },
    scrollView: {
        marginHorizontal: 15,
      },
    input: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 12,
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
      },
      res0: {
        textAlign: 'center',
        fontSize: 24,
        color: 'green',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30
      },
      res1: {
        textAlign: 'center',
        fontSize: 24,
        color: 'yellow',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30
      },
      res2: {
        textAlign: 'center',
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30,
        borderBottomWidth: 1,
        

    },
    label: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        fontSize: 16,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000'
    },

})