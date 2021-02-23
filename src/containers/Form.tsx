import React, { Component } from 'react'
import TextInput from '../components/form-input/TextInput';
import NumberInput from '../components/form-input/NumberInput';
import DateInput from '../components/form-input/DateInput';
import FileInput from '../components/form-input/FileInput';
import ColorInput from '../components/form-input/ColorInput';
import SelectInput from '../components/form-input/SelectInput';
import RadioInput from '../components/form-input/RadioInput';
import CheckboxInput from '../components/form-input/CheckboxInput';

interface MyProps {
    
}
  
interface MyState {
    textInputData: string,
    numberInputData: number,
    dateInputData: string,
    fileInputData: string,
    colorInputData: string,
    selectInputData: string,
    selectOptions: any,
    className: any
}


class Form extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            textInputData: "",
            numberInputData: 0,
            dateInputData: '2021-02-17',
            fileInputData: "",
            colorInputData: "#000000",
            selectInputData: "",
            selectOptions: [
                {   value: 'foo', key: 'Foo'},
                {   value: 'bar', key: 'Bar'},
                {   value: 'baz', key: 'Baz'}
            ],
            className: {}
        };
    }

    onTextInputChange = (event: any) => {
        const textInputData = event.target.value;
        this.setState({ textInputData });
        console.log(textInputData);
    };

    onNumberInputChange = (event: any) => {
        const numberInputData = event.target.value;
        this.setState({ numberInputData });
        console.log(numberInputData);
    };

    onDateInputChange = (event: any) => {
        const dateInputData = event.target.value;
        this.setState({ dateInputData });
        console.log(typeof dateInputData);
    };

    onFileInputChange = (event: any) => {
        const fileInputData = event.target.value;
        this.setState({ fileInputData });
        console.log(fileInputData);
    };

    onColorInputChange = (event: any) => {
        const colorInputData = event.target.value;
        this.setState({ colorInputData });
        console.log(colorInputData);
    };

    onSelectInputChange = (event: any) => {
        const selectInputData = event.target.value;
        this.setState({ selectInputData });
        console.log(selectInputData);
    };

    render() {
        return (
            <div>
                <TextInput
                    name = ""
                    placeholder = "Enter Text"
                    value = {this.state.textInputData}
                    type = "text"
                    onChange = {this.onTextInputChange}
                />
                <NumberInput
                    name = ""
                    placeholder = "Enter Number"
                    value = {this.state.numberInputData}
                    type = "number"
                    onChange = {this.onNumberInputChange}
                />
                <DateInput
                    name = ""
                    placeholder = "Enter Date"
                    value = {this.state.dateInputData}
                    type = "date"
                    onChange = {this.onDateInputChange}
                />
                <FileInput
                    name = ""
                    placeholder = "Select File"
                    value = {this.state.fileInputData}
                    type = "file"
                    onChange = {this.onFileInputChange}
                />
                <ColorInput
                    name = ""
                    placeholder = "Select Color"
                    value = {this.state.colorInputData}
                    type = "color"
                    onChange = {this.onColorInputChange}
                />
                <SelectInput
                    name = ""
                    placeholder = "Select options"
                    options = {this.state.selectOptions}
                    value = {this.state.selectInputData}
                    onChange = {this.onSelectInputChange}
                />
                <RadioInput
                    name = ""
                    placeholder = "Option A"
                    value = {this.state.selectInputData}
                    onChange = {this.onSelectInputChange}
                />
                <CheckboxInput
                    name = ""
                    placeholder = "Option B"
                    value = {this.state.selectInputData}
                    onChange = {this.onSelectInputChange}
                />
            </div>
        )
    }
}

export default Form