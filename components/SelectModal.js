import React from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import SIZES from '../constants/sizes';
import FONTS from '../constants/fonts';

const SelectModal = ({
    items,
    isVisible,
    handleCloseModal,
    handleSelectedItem
}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    const renderList = ({item}) => {
        return (
            <TouchableOpacity onPress={() => handleSelectedItem(item)}>
                <Text style={styles.item}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Modal 
            animationType='slide'
            transparent={true}
            visible={isVisible}
        >
            <TouchableWithoutFeedback onPress={handleCloseModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.listContainer}>
                        <View style={styles.listView}>
                            <Text style={styles.title}>Seleccione...</Text>
                            <FlatList 
                                data={items}
                                keyExtractor={(item) => `${item.key}`}
                                renderItem={renderList}
                                showsVerticalScrollIndicator={false}
                                style={styles.selectList}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const createStyles = (colors) => StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        borderRadius: SIZES.radius * 0.5,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }, 
    listView: {
        width: SIZES.width * 0.8,
        height: SIZES.height * 0.3,
        backgroundColor: colors.card,
        borderRadius: SIZES.radius * 0.5,
        paddingBottom: SIZES.padding
    },
    selectList: {
        paddingHorizontal: SIZES.padding * 2
    },
    title: {
        color: colors.primary,
        textAlign: 'center',
        paddingVertical: SIZES.padding * 0.5,
        ...FONTS.body4
    },
    item: {
        color: colors.text,
        paddingVertical: SIZES.padding * 0.5,
        ...FONTS.h4
    }
})

export default SelectModal
