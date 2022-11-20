import React, { useState } from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import { AppBar, Text, TextInput, IconButton, ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Picker } from '@react-native-picker/picker';
import MultipleLineTextInput from "../../components/multipleLineTextInput";
import DateTimePicker from '@react-native-community/datetimepicker';


const CreateActivity = (props) => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(true);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return <ScrollView>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        </View>
        <TextInput
            placeholder="请输入活动主题"
            leading={props => <Icon name="run" {...props} />}
        />
        {/* <TextInput
            label="Label"
            variant="outlined"
            trailing={props => (
                <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
            )}
        /> */}
        <MultipleLineTextInput />
        <View style={styles.rows}>
            <Text style={styles.rowTitle}>活动属性:</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="线下活动" value="线下活动" />
                <Picker.Item label="线上活动" value="线上活动" />
            </Picker>
        </View>
        <View>
            <Text style={{ ...styles.rowTitle, marginTop: 10, marginBottom: 10 }}>基本信息</Text>
        </View>
        {/* <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: .5 }}>
                <Text title="开始时间" />
            </View>
            <View style={{ flex: .5 }} >
                <Text>selected: {date.toLocaleString()}</Text>
            </View>
        </View>
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row"
        }, { flex: 1 }]}>
            <View style={{ flex: 0.5, backgroundColor: "red" }} />
            <View style={{ flex: 0.5, backgroundColor: "darkorange" }} />
        </View> */}
        {/* <Button onPress={showDatepicker} title="选择日期" />
        <Button onPress={showTimepicker} title="选择时间" /> */}
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
            />
        )}
        <View style={styles.rows}>
            <Text style={styles.rowTitle} onPress={() => showDatepicker()}>开始时间</Text>
        </View>
        <View style={styles.rows}>
            <Text style={styles.rowTitle} onPress={() => showDatepicker()}>结束时间</Text>
        </View>
        <View>
            <ListItem title="活动地点" />
            <ListItem title="活动类型" />
            <Text>参与人群</Text>
            <ListItem title="可参与人" />
            <Text>报名设置</Text>
            <ListItem title="活动总名额" />
            <ListItem title="活动费用" />
            <ListItem title="活动保险" />
            <ListItem title="报名填写项" />
            <ListItem title="报名截止" />
            <ListItem title="报名方式" />
            <ListItem title="更多设置" />
            <ListItem title="存为草稿" />
        </View>

    </ScrollView>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: 'lightgrey',
        borderBottomWidth :1,
    },
    rowTitle: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        
    }
});
export default CreateActivity;